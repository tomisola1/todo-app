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
    
    test('get all balance', async () => {
        await request(app)
        .get('/balance')
        .expect(200)
    
      })
    
    
      test('get a single balance', async () => {
        await request(app)
        .get('/balance/3213484386')
        .expect(200)
      })
    
      test('create a new balance', async () => {
        await request(app)
        .post('/create-account').send({
          "account": 6138897157,
          "balance": 50000,
          "createdAt": "Sun Aug 15 2021 22:55:57 GMT+0100 (West Africa Standard Time)"
        })
        .expect(201)
      })
    
      test('create a new transfer', async () => {
        const transfer = {
          "senderAccount": 4690512073,
          "amount": 1000,
          "receiverAccount": 3213484386
        }
        await request(app)
        .post('/transfer')
        .send(transfer)
        .expect(201)
      })



})