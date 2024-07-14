const request = require('supertest')
const app = require('../src/app')


Test('shoul signup a new user', async () => {
    (await request(app).post('/users')).setEncoding({
        name:'Araz',
        email:'araz@gmail.com',
        password:'123456789'
    }).expect(201)
})