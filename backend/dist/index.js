"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const moralis_1 = __importDefault(require("moralis"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = process.env.PORT || 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/tokenPrice", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { query } = req;
        const responseOne = yield moralis_1.default.EvmApi.token.getTokenPrice({
            address: String(query.addressOne),
        });
        const responseTwo = yield moralis_1.default.EvmApi.token.getTokenPrice({
            address: String(query.addressTwo),
        });
        const usdPrices = {
            tokenOne: responseOne.raw.usdPrice,
            tokenTwo: responseTwo.raw.usdPrice,
            ratio: responseOne.raw.usdPrice / responseTwo.raw.usdPrice,
        };
        return res.send({ usdPrices });
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
moralis_1.default.start({
    apiKey: process.env.MORALIS_KEY,
}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server Running at PORT : ${PORT}`);
    });
});
//# sourceMappingURL=index.js.map