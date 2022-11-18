import express from "express";
import objection from "objection";
import { Coin } from "../../models/index.js";
import CoinApi from "../../apiClient/coinApi";

const coinsRouter = new express.Router();

coinsRouter.get("/", async (req, res) => {
  try {
    const coinApiResponse = await CoinApi.getCoins();
    const coinsData = JSON.parse(coinApiResponse);
    return res.set({ "Content-Type": "application/json" }).status(200).json(coinsData);
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

export default coinsRouter;
