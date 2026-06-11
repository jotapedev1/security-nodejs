const UserService = require('../services/userService')
const userService = new UserService();

class UserController {
    static async createUser(req, res) {
        const { name, email, password } = req.body;
        
        try {
            const user = await userService.createUser({ name, email, password });    
            res.status(201).json(user);

        } catch (error) {
            console.log('Message error: ', error.message);
            res.status(400).send({ error: error.message });
        }
    }
    static async getUsers(req, res) {
        const users = await userService.getUsers();
        res.status(200).json(users);
    }
    static async getUserById(req, res) {
        const { id } = req.params;
        try {
            const user = await userService.getUserById(id);
            res.status(200).json(user);
        } catch (error) {
            console.log('Message error: ', error.message);
            res.status(404).send({ error: error.message });
        }
    }
    static async updateUser(req, res) {
        const { id } = req.params;
        const { name, email } = req.body;
        try {
            const user = await userService.updateUser({ id, name, email });
            res.status(200).json(user);
        } catch (error) {
            console.log('Message error: ', error.message);
            res.status(404).send({ error: error.message });
        }
    }
    static async deleteUser(req, res) {
        const { id } = req.params;
        try {
            await userService.deleteUser(id);
            res.status(200).send({ message: 'User deleted successfully' });
        } catch (error) {
            console.log('Message error: ', error.message);
            res.status(404).send({ error: error.message });
        }
    }
}

module.exports = UserController 