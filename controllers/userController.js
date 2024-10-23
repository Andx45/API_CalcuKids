import { User } from "../models/userModel.js";

export const createUser = async (req, res) => {
    try {
        const { nombre, edad } = req.body;
        const newUser = await User.create({
            nombre,
            edad
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Error al crear el usuario", error });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los usuarios", error });
    }
};

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el usuario", error });
    }
};


export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, edad } = req.body;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        user.nombre = nombre;
        user.edad = edad;
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el usuario", error });
    }
};


export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        await user.destroy();
        res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el usuario", error });
    }
};
