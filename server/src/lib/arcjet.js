// Use to limit the requests to the server and protect against bots and DDoS attacks

import arcjet, { shield, detectBot, slidingWindow } from "@arcjet/node";

import { ENV } from "./env.js";

const aj = arcjet({
    key: ENV.ARCJET_KEY,
    rules: [
        shield({ mode: "LIVE" }),
        detectBot({
            mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
        allow: [
            "CATEGORY:SEARCH_ENGINE", // Allow search engine bots (e.g., Googlebot, Bingbot)
        ],
        }),
        slidingWindow({
            mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
            max: 100,
            interval: 60,
        }),
    ],
});

export default aj;