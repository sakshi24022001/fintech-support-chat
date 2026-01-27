export const chatSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("🟢 Socket connected");

    socket.on("sendMessage", (msg) => {
      io.emit("receiveMessage", msg);
    });

    socket.on("disconnect", () => {
      console.log("🔴 Socket disconnected");
    });
  });
};
