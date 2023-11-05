import supertest from 'supertest'
import app, { request, response } from '../src/app.js'

describe("POST /users",()=>{
    describe("username and password",()=>{
        test("respond with a 200 status code",async () =>{
            const response=await request(app).post("/users").send({
                username:"username",
                password:"password"
            })
            expect(response.statusCode).toBe(200)

        })
        test("json in the content type headers",async () =>{
            const response=await request(app).post("/users").send({
                username:"username",
                password:"password"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))

    })
    test("user Id", async () =>{
        const response= await request(app).post("/users").send({
            username:"username",
            password:"password"
        })
        expect(response.userId).toBeDefined()
    })
    describe("username and password missing",()=>{
        test("respond with a 400 status code",async () =>{
            const response=await request(app).post("/users").send({
                username:"username",
                
            })
            expect(response.statusCode).toBe(400)

        })

    })
    })
})