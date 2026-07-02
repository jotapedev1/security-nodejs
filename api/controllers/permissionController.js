const PermissionService = require('../services/permissionService');
const permissionService = new PermissionService();

class PermissionController {
    static async register(req, res) {
        const { name, description } = req.body;
        try {
            const permission = await database.permission.create({ 
                id: uuid.v4(),
                name: dto.name, 
                description: dto.description 
            });

            return newPermission;

        } catch (error) {
            throw new Error('Error creating permission: ' + error.message);
        }
    }
}
module.exports = new PermissionController;