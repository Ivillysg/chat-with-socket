import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import {
  ChatContainer,
  Footer,
  Header,
  InfoMsg,
  Main,
  MessagesContent,
  ModalContainer,
  OverLayout,
  Wrapper,
} from "./styles";
const socket = io("http://localhost:8080");
socket.on("connect", () =>
  console.log("[IO] Connect => A new connection has been established")
);

interface Messages {
  author: string;
  message: string;
  date?: string;
  id?: string;
}

export function Chat() {
  const [username, setUsername] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Messages[]>([]);

  useEffect(() => {
    const handleNewMessage = (newMessage: Messages) => {
      return setMessages([...messages, newMessage]);
    };
    socket.on("chat.message", handleNewMessage);
  }, [messages]);

  const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim()) {
      socket.emit("chat.message", {
        author: username,
        message,
      });
      setMessage("");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setMessage(event.target.value);

  const handleFormSubmitName = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return (
      <OverLayout>
        <ModalContainer>
          <h1>Bem-vindo ao chat</h1>

          <form onSubmit={handleFormSubmitName}>
            <input
              type="text"
              placeholder="Digite seu nome e aperte enter"
              value={username}
              onChange={({ target }) => {
                setUsername(target.value);
              }}
            />
          </form>
        </ModalContainer>
      </OverLayout>
    );
  }

  return (
    <ChatContainer>
      <Wrapper>
        <Header>
          Você está logado como:
          <h3>{username}</h3>
        </Header>
        <Main>
          <MessagesContent>
            {messages.length > 0 &&
              messages.map((message, index) => (
                <InfoMsg msgMine={message.author === username} key={index}>
                  <span>{message.message}</span>
                  <span>{`${message.author} - ${format(
                    new Date(message?.date || ""),
                    "dd/MM/yyyy - HH:mm"
                  )}`}</span>
                </InfoMsg>
              ))}
            {messages.length === 0 && <span>Nenhuma mensagem!</span>}
          </MessagesContent>
          <Footer>
            <form onSubmit={handleFormSubmit}>
              <input
                value={message}
                onChange={handleInputChange}
                placeholder="Digite sua mensagem"
                type="text"
              />
            </form>
          </Footer>
        </Main>
      </Wrapper>
    </ChatContainer>
  );
}
