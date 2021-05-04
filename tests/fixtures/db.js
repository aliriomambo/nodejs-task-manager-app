const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../src/models/userModel')
const Task = require('../../src/models/taskModel')


const userOneId = new mongoose.Types.ObjectId
const userOne = {
    _id: userOneId,
    name: 'Alirio Mambo',
    email: 'aliriomambo@example.com',
    password: '56what!!',
    tokens: [{
        token: jwt.sign({_id: userOneId}, process.env.SECRET_KEY)
    }]
}
const userTwoId = new mongoose.Types.ObjectId
const userTwo = {
    _id: userTwoId,
    name: 'Josefa Mambo',
    email: 'josefamambo@example.com',
    password: '56what!!',
    tokens: [{
        token: jwt.sign({_id: userTwoId}, process.env.SECRET_KEY)
    }]
}

const taskOne = {
    _id: new mongoose.Types.ObjectId,
    description: 'My first task',
    completed: false,
    owner: userOneId
}
const taskTwo = {
    _id: new mongoose.Types.ObjectId,
    description: 'My second task',
    completed: true,
    owner: userOneId
}
const taskThree = {
    _id: new mongoose.Types.ObjectId,
    description: 'My third task',
    completed: true,
    owner: userTwoId
}

const setupDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()

}

module.exports = {
    userOneId,
    userOne,
    userTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
}