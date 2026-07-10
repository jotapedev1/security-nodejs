const PermissionService = require('../services/permissionService');
const permissionService = new PermissionService();

class PermissionController {
    static async register(req, res) {
        const { name, description } = req.body;
        try {
            const permission = await permissionService.register({ name, description });
            res.status(201).json(permission);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    static async getAll(req, res) {
        const permissions = await permissionService.getAll();
        res.status(200).json(permissions);
    }
    static async getById(req, res) {
        try {
            const permission = await permissionService.getById(req.params.id);
            res.status(200).json(permission);
        } catch (error) {
            res.status(404).send({ message: error.message });
        }
    }
    static async update(req, res) {
        try {
            const permission = await permissionService.update(req.params.id, req.body);
            res.status(200).json(permission);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    static async delete(req, res) {
        try {
            await permissionService.delete(req.params.id);
            res.status(200).send({ message: 'Permission deleted successfully' });
        } catch (error) {
            res.status(404).send({ message: error.message });
        }
    }
}
module.exports = PermissionController;