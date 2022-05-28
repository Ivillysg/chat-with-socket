import express from "express";
import http from "http";
import cors from "cors";

import { Server } from "socket.io";

const app = express();
app.get("/", (req, res) => res.json({ message: "Hello World" }));

app.use(cors());

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

export { serverHttp, io };
