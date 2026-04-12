import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";
const __dirname = path.resolve();
const PORT = ENV.PORT || 3000;



app.use(express.json({ limit: "13mb" })); // req.body
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


if (ENV.NODE_ENV === "production") {
    const clientPath = path.join(__dirname, "../../client/dist");
    
    // Only serve static files if the frontend build exists (to prevent ENOENT on API-only deployments)
    import('fs').then(fs => {
        if (fs.existsSync(clientPath)) {
            app.use(express.static(clientPath));
            app.get("*", (_, res) => {
                res.sendFile(path.join(clientPath, "index.html"));
            });
        }
    });
}

server.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
    connectDB();
});