const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
    res.send("<h1>🚀 My Kubernetes Web App</h1><p>Served from Node.js container.</p>");
});

app.get("/health", (req, res) => {
    res.json({ status: "healthy" });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
