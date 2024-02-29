const app = require("./app");

const HOST_NAME = process.env.HOST_NAME ?? "localhost";
const PORT = process.env.PORT ?? 3113;

app.listen(PORT, HOST_NAME, () => {
  console.log(`Server is servering on http://${HOST_NAME}:${PORT}`);
});
