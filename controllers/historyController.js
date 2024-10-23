import { History } from "../models/historyModel.js";

export const createHistory = async (req, res) => {
    try {
        const { usuario_id, operacion_id, numero1, numero2, resultado } = req.body;
        const newHistory = await History.create({
            usuario_id,
            operacion_id,
            numero1,
            numero2,
            resultado
        });
        res.status(201).json(newHistory);
    } catch (error) {
        res.status(500).json({ message: "Error al crear el historial", error });
    }
};

export const getHistories = async (req, res) => {
    try {
        const histories = await History.findAll();
        res.status(200).json(histories);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el historial", error });
    }
};

export const getHistoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const history = await History.findByPk(id);
        if (!history) {
            return res.status(404).json({ message: "Registro del historial no encontrado" });
        }
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el registro del historial", error });
    }
};

export const updateHistory = async (req, res) => {
    try {
        const { id } = req.params;
        const { usuario_id, operacion_id, numero1, numero2, resultado } = req.body;
        const history = await History.findByPk(id);
        if (!history) {
            return res.status(404).json({ message: "Registro del historial no encontrado" });
        }
        history.usuario_id = usuario_id;
        history.operacion_id = operacion_id;
        history.numero1 = numero1;
        history.numero2 = numero2;
        history.resultado = resultado;
        await history.save();
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el registro del historial", error });
    }
};

export const deleteHistory = async (req, res) => {
    try {
        const { id } = req.params;
        const history = await History.findByPk(id);
        if (!history) {
            return res.status(404).json({ message: "Registro del historial no encontrado" });
        }
        await history.destroy();
        res.status(200).json({ message: "Registro del historial eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el registro del historial", error });
    }
};
