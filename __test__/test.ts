import request from 'supertest';
import app from '../src/app';
import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import { dbConnect, dbDisconnect } from '../test-utils/dbHandler'
import {todoModel} from '../src/model/todomodel'


let mongo: MongoMemoryServer
beforeAll(async() => {
  await dbConnect()
})

afterAll(async() => {
  await dbDisconnect()
})

describe('Todolist crud endpoints', () => {
    
      test('create a new todo', async () => {
        await request(app)
        .post('/create-todo')
        .send({title:"buy a teddy"})
        .expect(res => {
            expect(res.body.title).toBe("buy a teddy")
          })
      })



})