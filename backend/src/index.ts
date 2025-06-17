import { createWorker } from "mediasoup";
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });
let mediasoupRouter;

async function start() {
  try {
    const worker = await createWorker();
    mediasoupRouter = worker;
    console.log("Mediasoup worker created");
  } catch (e) {
    console.error("Failed to create mediasoup worker", e);
    process.exit(1);
  }
}

start();

wss.on("connection", (ws) => {
  ws.on("error", console.error);

  ws.on("message", () => ws.send("Hello from web socket server"));

  ws.on("close", () => {
    console.log("disconnected");
  });
});
