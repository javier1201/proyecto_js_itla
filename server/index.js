import {app} from "./src/main.js"
// const app = require("./src/main");
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});