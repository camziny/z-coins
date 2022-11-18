const Model = require("./Model");

class Coin extends Model {
  static get tableName() {
    return "coins";
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "price", "coinId", "userId"],
      properties: {
        name: { type: "string" },
        price: { type: "string" },
        coinId: { type: ["string", "integer"] },
        userId: { type: ["string", "integer"] },
      },
    };
  }

  static get relatedMappings() {
    const { User } = require("./index.js");

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "coins.userId",
          to: "users.id",
        },
      },
    };
  }
}

module.exports = Coin;
