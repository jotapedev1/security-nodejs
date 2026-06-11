const database = require('../models')
const { compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const jsonSecret = require('../config/jsonSecret')
const { json } = require('body-parser')

class AuthService{
    async login(dto){
        console.log(dto)
        const user = await database.user.findOne({
            attributes:['id', 'email', 'password'],
            where:{
                email: dto.email
            }
        })
        if (!user){
            throw new Error('User not registered.')
        }
        const matchedPasswords = await compare(dto.password, user.password)

        if(!matchedPasswords){
            throw new Error('Email or password are incorrect')
        }

        const accessToken = sign({
            id: user.id,
            email: user.email
        },
        jsonSecret.secret, 
        {
            expiresIn: 43200
        })

        return{ accessToken }
    }
}
module.exports = AuthService;