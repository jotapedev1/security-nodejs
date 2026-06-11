const database = require('../models')
const { hash } = require('bcryptjs')
const uuid = require('uuid')

class UserService {
    async createUser(dto) {
        const existing = await database.user.findOne({ 
            where: { email: dto.email } 
        });

        if (existing) throw new Error('User already exists');

        const hashedPassword = await hash(dto.password, 8);
        
        return database.user.create({
            id: uuid.v4(),
            name: dto.name,
            email: dto.email,
            password: hashedPassword
        });
    }
    async getUsers() {
        const users = await database.user.findAll();
        return users;
    }
    async getUserById(id) {
        const user = await database.user.findOne({
            where: { id }
        });
        if (!user) throw new Error('User not found');

        return user;
    }   
    async deleteUser(id) {
        const user = await database.user.findOne({
            where: { id }
        });
        if (!user) throw new Error('User not found');

        try{
            await database.user.destroy({
                where: { id }
            });
        }catch (error) {
            console.error('Message error: ', error.message);
            throw error;
        }
    }
    async updateUser(dto) {
        const user = await database.user.findOne({
            where: { id: dto.id }
        });
        if (!user) throw new Error('User not found');
        try{
            user.name = dto.name;
            user.email = dto.email;
            
            await user.save();
            return user;
        }catch (error) {
            console.error('Message error: ', error.message);
            throw error;
        }
    }
 
}

module.exports = UserService;   