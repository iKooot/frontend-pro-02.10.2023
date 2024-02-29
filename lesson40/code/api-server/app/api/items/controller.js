const { Router } = require("express");
const { itemsProvider } = require("../../services");
const {
  itemParamValidation,
  createItemValidation,
  updateItemValidation,
} = require("./validations");
const CODES = require("http-status-codes")

const itemsRouter = Router();

itemsRouter.get("/", async (req, res) => {
  const item = await itemsProvider.getItems();
  res.json(item);
});

itemsRouter.get("/:id", itemParamValidation, async (req, res) => {
  res.json(await itemsProvider.getItem(req.params.id));
});

itemsRouter.post("/", createItemValidation, async (req, res) => {
  const { value, date = new Date().toISOString() } = req.body;
  res.json(await itemsProvider.setItem({ value, date }));
});

itemsRouter.put(
  "/:id",
  itemParamValidation,
  updateItemValidation,
  async (req, res) => {
    const item = req.body;
    res.json(await itemsProvider.setItem({ id: req.params.id, ...item }));
  }
);

itemsRouter.delete("/:id", itemParamValidation, async (req, res) => {
  await itemsProvider.deleteItem(req.params.id);
  res.status(CODES.OK).send('ok');
});

module.exports = itemsRouter;
