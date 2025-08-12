import { setupServer } from "msw/node";
import { handlers } from "./handlers";
import { matchRequestUrl } from "msw";

export const server = setupServer(...handlers);

export const waitForRequest = (method: string, url: string) => {
  let requestId = "";

  return new Promise<Request>((resolve, reject) => {
    server.events.on("request:start", (req) => {
      const matchesMethod =
        req.request.method.toLowerCase() === method.toLowerCase();
      const matchesUrl = matchRequestUrl(new URL(req.request.url), url).matches;

      if (matchesMethod && matchesUrl) {
        requestId = req.requestId;
      }
    });

    server.events.on("request:match", (req) => {
      if (req.requestId === requestId) {
        resolve(req.request);
      }
    });

    server.events.on("request:unhandled", (req) => {
      if (req.requestId === requestId) {
        reject(
          new Error(
            `The ${req.request.method} ${
              new URL(req.request.url).href
            } request was unhandled.`
          )
        );
      }
    });
  });
};
