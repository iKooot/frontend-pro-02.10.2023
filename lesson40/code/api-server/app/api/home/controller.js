const { Router } = require("express");
const fs = require("fs");
const path = require("path");
const CODES = require("http-status-codes");
const { itemsProvider } = require("../../services");

const homeRouter = Router();

homeRouter.get("/", (req, res) => {
  let template = "";

  const index$ = fs.createReadStream(
    path.join(__dirname, "..", "..", "..", "public", "views", "index.html"),
    { encoding: "utf-8" }
  );

  index$.on("data", (chunk) => (template += chunk));

  index$.on("end", async () => {
    const items = await itemsProvider.getItems();
    const list = items.map(el => `<li class="list-group-item">[${el.date}] ${el.value}</li>`).join('\n');
    template = template.replace('{%list%}', list);

    res.send(template);
  });

  index$.on("error", () => {
    res.status(CODES.INTERNAL_SERVER_ERROR).send("Internal Server Error");
  });
});

homeRouter.get("/index.html", (req, res) => {
  res.redirect("/");
});

homeRouter.post("/", async (req, res) => {
  await itemsProvider.setItem({
    value: req.body.itemValue,
    date: new Date().toISOString()
  });

  res.redirect("/");
});

module.exports = homeRouter;
