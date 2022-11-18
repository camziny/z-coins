import got from "got";

const coinApiKey = class CoinApi { //hidden
  static async getCoins() {
    try {
      const apiResponse = await got("rest.coinapi.io", {
        method: "GET",
        headers: {
          "X-CoinAPI-Key": `${coinApiKey}`,
        },
      });
      const responseBody = apiResponse.body;
      return responseBody;
    } catch (error) {
      return { error: error.message };
    }
  }
};

export default CoinApi;
