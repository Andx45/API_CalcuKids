import { DataTypes } from "sequelize";
import { pool } from "../config/db.js";

export const History = pool.define('historial', {
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
    operacion_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'operaciones',
            key: 'id'
        }
    },
    numero1: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    numero2: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    resultado: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    fecha_operacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'historial', 
    timestamps: false
});
