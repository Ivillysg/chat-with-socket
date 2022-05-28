import { io } from "./http";

io.on("connection", (socket) => {
  console.log("[IO] Connection => Server has a new connection");
  socket.on("chat.message", (data) => {
    io.emit("chat.message", {
      ...data,
      date: new Date().toISOString(),
      id: socket.id,
    });
    console.log("[SOCKET] Chat.message => ", socket.id);
  });
  socket.on("disconnect", () => {
    console.log("[SOCKET] Disconnect => A connection was disconnected");
  });
});
