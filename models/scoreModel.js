import { DataTypes } from "sequelize";
import { pool } from "../config/db.js";

export const Score = pool.define('puntajes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id'
        }
    },
    puntaje: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_actualizacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false
});
