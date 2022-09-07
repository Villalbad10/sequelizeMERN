import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Address = sequelize.define(
  "address",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    street: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    postal: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
