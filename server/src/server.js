import express from 'express';
// const cors = require('cors');
import path from "path";
import authRoutes from "./routes/auth.route.js";
// import messageRoutes from "./routes/message.route.js";


const __dirname = path.resolve();
const PORT = ENV.PORT || 3000;


if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
    });
}

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

const app = express();
app.listen(3000, () => console.log('Server running on port' + PORT
    
));