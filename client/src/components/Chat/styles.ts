import styled, { css } from "styled-components";

export const ChatContainer = styled.div`
  background-color: #1a202c;

  height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 50%;
  height: 50%;
  position: relative;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  background-color: #2d3748;

  border-radius: 10px;

  margin-bottom: 5px;

  width: 100%;
  padding: 15px;

  color: #fff;

  display: flex;
  align-items: center;

  font-weight: 500;

  font-size: 15px;

  h3 {
    margin-left: 3px;
    font-size: 20px;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const MessagesContent = styled.div`
  width: 100%;
  height: 90%;

  background-color: #4a556850;

  padding: 5px 5px;

  overflow: auto;

  border-radius: 10px;

  display: flex;
  flex-direction: column;

  span {
    color: white;
  }
`;

export const InfoMsg = styled.div<{ msgMine?: boolean }>`
  ${({ msgMine }) => css`
    background-color: ${msgMine ? "#718096" : "#71809650"};
    border-radius: 5px;
    width: 70%;

    max-width: 100%;

    padding: 15px 15px;

    display: flex;
    flex-direction: column;

    margin: 5px;

    align-self: ${msgMine ? "flex-start" : "flex-end"};
    span {
      color: #fff;
      font-size: 18px;

      :last-child {
        margin-top: 5px;
        font-size: 12px;

        color: #eee;
      }
    }
  `}
`;

export const Footer = styled.div`
  width: 100%;

  border-radius: 10px;

  margin-top: 15px;

  input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;

    background-color: #4a5568;

    border: none;

    color: white;

    ::placeholder {
      color: white;
    }
  }
`;

export const OverLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 350px;
  background-color: #2d3748;

  color: #fff;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  border-radius: 15px;

  padding: 15px 15px;

  h1 {
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;

    background-color: #4a5568;

    border: none;

    color: white;

    ::placeholder {
      color: white;
    }
  }
`;
