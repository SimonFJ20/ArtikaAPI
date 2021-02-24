import mongoose from 'mongoose';
import { validateEmail } from '../utils';


export interface UsersInterface {
	username: string,
	password: string,
	email: string,
	createdDate: Date,
	authkey: string
}


const Users = new mongoose.Schema({

    username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
	},
	createdDate: {
		type: Date,
		default: Date.now
	},
    authKey: {
        type: String,
		default: '0'
    }

    
});

export default mongoose.model('Users', Users);
