import jsonServer from "json-server";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
server.use(cors());
server.use(middlewares);

// Function to load JSON files
const loadData = () => {
  const data = {};
  const files = [
    "admins",
    "clients",
    "designers",
    "vendors",
    "products",
    "projects",
  ];

  files.forEach((file) => {
    const filePath = path.join(__dirname, "data", `${file}.json`);
    if (fs.existsSync(filePath)) {
      data[file] = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
  });

  return data;
};

const router = jsonServer.router(loadData());
server.use(router);

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running at http://localhost:${PORT}`);
});
