const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')

const userId = new mongoose.Types.ObjectId()
const user = {
    _id: userId,
    name:'abedini',
    email:'abedini@gmail.com',
    password:'123456789',
    tokens: [{
        token: jwt.sign({_id: userId}, process.env.JWT_SECRET)
    }]

}



beforeEach(async () => {
    await User.deleteMany()
    await User(user).save()
})



test('should signup a new user', async () => {
    const response = await request(app).post('/users').send({
        name:'Araz',
        email:'araz@gmail.com',
        password:'123456789'
    }).expect(201)


    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    expect(response.body.user.name).toBe('Araz')


    expect(response.body).toMatchObject({
        user:{
            name:'Araz',
            email:'araz@gmail.com',
        },
        token: user.tokens[0].token

    })

    expect(user.password).not.toBe('123456789')
})


test('should login user', async () => {
    console.log(user)
    const reponse  = await request(app).post('/users/login').send({

        email: user.email,
        password:user.password
    }).expect(200)
    console.log('-------------------------------------------------------')
    console.log(user)
    console.log('-------------------------------------------------------')
    expect(reponse.body.token).toBe(user.tokens[1].token)
})


test('shouldnt login', async () => {
    await request(app).post('/users/login').send({

        email: user.email,
        password:12367899
    }).expect(400)
})


test('should get profile', async() => {
    await request(app).get('/users/me')
    .set('Authorization', `Bearer ${user.tokens[0].token}`)
    .send()
    .expect(200)
})


test('shouldnt get profile', async() => {
    await request(app).get('/users/me')
    .set('Authorization', `Bearer ${user.tokens[0].token}`)
    .send()
    .expect(200)
})


test('shouldn delete profile', async() => {
    await request(app).delete('/users/me')
    .send()
    .expect(401)
})


test('shouldnt delete profile', async() => {
    await request(app).delete('/users/me')
    .send()
    .expect(401)
})