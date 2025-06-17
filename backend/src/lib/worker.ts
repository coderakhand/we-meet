import * as mediasoup from "mediasoup";
import { types as mediasoupTypes } from "mediasoup";
import { config } from "../config";

const worker: Array<{
  worker: mediasoupTypes.Worker;
  router: mediasoupTypes.Router;
}> = [];

let nextMediasoupWorkerIdx = 0;

const createWorker = async () => {
  const worker = await mediasoup.createWorker({
    logLevel: config.mediasoup.worker.logLevel as mediasoupTypes.WorkerLogLevel,
    logTags: config.mediasoup.worker.logTags,
    rtcMinPort: config.mediasoup.worker.rtcMinPort,
    rtcMaxPort: config.mediasoup.worker.rtcMaxPort,
  });

  worker.on("died", () => {
    console.log("mediasoup", worker.pid);
    setTimeout(() => {
      process.exit(1);
    }, 2000);
  });
};

export { createWorker };
