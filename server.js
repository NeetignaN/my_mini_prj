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
    "messages",
  ];

  files.forEach((file) => {
    const filePath = path.join(__dirname, "data", `${file}.json`);
    if (fs.existsSync(filePath)) {
      // Read the JSON file
      const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

      // Store the data
      data[file] = jsonData;
    }
  });

  return data;
};

const router = jsonServer.router(loadData());

// Add custom routes to get related data
server.get("/api/clients/:id/projects", (req, res) => {
  const clientId = parseInt(req.params.id);
  const projects = router.db
    .get("projects")
    .filter({ client_id: clientId })
    .value();
  res.jsonp(projects);
});

server.get("/api/designers/:id/projects", (req, res) => {
  const designerId = parseInt(req.params.id);
  const projects = router.db
    .get("projects")
    .filter({ designer_id: designerId })
    .value();
  res.jsonp(projects);
});

server.use("/api", router);

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running at http://localhost:${PORT}`);
});
