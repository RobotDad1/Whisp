import express from 'express';
// const cors = require('cors');
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

const PORT = ENV.PORT || 3000;


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

const app = express();
app.listen(3000, () => console.log('Server running on port' + PORT
    
));