import express from "express";
import Moralis from "moralis";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/tokenPrice", async (req, res) => {
  try {
    const { query } = req;
    const responseOne = await Moralis.EvmApi.token.getTokenPrice({
      address: String(query.addressOne),
    });

    const responseTwo = await Moralis.EvmApi.token.getTokenPrice({
      address: String(query.addressTwo),
    });

    const usdPrices = {
      tokenOne: responseOne.raw.usdPrice,
      tokenTwo: responseTwo.raw.usdPrice,
      ratio: responseOne.raw.usdPrice / responseTwo.raw.usdPrice,
    };

    return res.send({ usdPrices });
  } catch (error) {
    res.status(500).json(error);
  }
});

Moralis.start({
  apiKey: process.env.MORALIS_KEY,
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server Running at PORT : ${PORT}`);
  });
});
