import { Sequelize } from "sequelize";

export const pool  = new Sequelize('calcukids', 'sec_umg', 'secure@umg2024',{
    host: 'localhost',
    dialect: 'mysql'
});

