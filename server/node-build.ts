import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Handle __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Express app
const app = express();
const port = process.env.PORT || 3000;

// Path to your built React SPA
const distPath = path.join(__dirname, "../spa");

// Serve static files (JS, CSS, images, favicon, etc.)
app.use(express.static(distPath));

// Example API endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from API!" });
});

// Health endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// --- SPA FALLBACK ROUTE ---
// This regex means: match EVERYTHING except routes starting with /api or /health
app.get(/^(?!\/api\/|\/health).*/, (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Shutting down gracefully...");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Shutting down gracefully...");
  process.exit(0);
});
