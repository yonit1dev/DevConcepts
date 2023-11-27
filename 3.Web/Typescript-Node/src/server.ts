import express, { Request, Response } from "express";

const HOST = "127.0.0.1";
const PORT = 6000;

// Initializing application and configuration
const app = express();
app.use(express.urlencoded({ extended: true }));

// Root handler
app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    data: "Server is Running",
  });
});

// Unknown path handlers
app.use("*", (req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    data: "Unknown Path!",
  });
});

// Server initializations
app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});

// Error handling
process.on("uncaughtException", (err: Error) => {
  console.log(err.name, err.message);
  console.log("UNCAUGHT EXCEPTION! Shutting down...");

  process.exit(1);
});

process.on("unhandledRejection", (reason: Error, promise: Promise<any>) => {
  console.log(reason);
  console.log(reason.name, reason.message);
  console.log("UNHANDLED REJECTION! Shutting down...");

  process.exit(1);
});
