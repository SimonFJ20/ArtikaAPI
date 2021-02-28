
/*
*       Artika API Server
*
*       Filename:   users.ts
*       Pathname:   ./users/users.ts
*       Language:   TypeScript
*       Content:    Users main file
*
*       License:    GPL-2.0
*
*       Authors:
*       Simon From Jakobsen
*           Email:      simonfromjakobsen@gmail.com
*           GitHub:     SimonFJ20
*
*       Created:    23-02-2021
*       Last Edit:  23-02-2021
*/



import { compare, hash } from 'bcrypt';
import express from 'express'
import { Document, MongooseDocument } from 'mongoose';
import User from '../models/User';
import { generateRandomString } from '../utils';

const router = express.Router();












// /api/users/getAllUsers
router.get('/getAllUsers', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users).status(200);
    }catch(err) {
        res.json({message: err}).status(500);
    }
});








// /api/users/createUser
router.post('/createUser', async (req, res) => {

    try {
        
        const hashedPassword = await hash(req.body.password, 10);

        const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email
        });

        User.find({username: req.body.username}, async (err, response) => {
            try {
                if(response.length) {
                    throw {
                        errors: {username: {message: 'Username already taken', properties: 
                        {message: 'Username already taken', path: 'username', value: req.body.username}}}};
                }
                const savedUser = await newUser.save();
                res.status(200);
                res.json(savedUser);
            }catch(err) {
                res.status(400);
                res.json(err);
            }
        });

    } catch(err) {
        res.json({message: err}).status(500);
    }

})









router.post('/login', async (req, res) => {


    try {
        const user = await User.findOne({username: req.body.username});

        if(user == null) {
            res.json({error: {username: {message: 'Cannnot find user'}}}).status(400);
            return;
        }
    
        try {
            if(await compare(req.body.password, user.password)) {
                const authKey = generateRandomString(64);
                const updatedAuthKey = await User.updateOne({_id: user._id}, {$set: {authKey: authKey}});
                res.status(200);
                res.json({status: true, authKey: authKey});
            }else {
                res.status(400);
                res.json({error: {password: {message: 'Wrong username or password'}}});
            }
        }catch(err) {
            res.json({message: err}).status(500);
        }
    } catch(err) {
        res.json({msg: err}).status(500);
    }
});














export default router;