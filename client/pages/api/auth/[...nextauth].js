import EmailProvider from 'next-auth/providers/email'; 
import NextAuth from "next-auth"; 
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "./lib/mongodb"
import connectDB from './lib/connectDB';
import CredentialsProvider from 'next-auth/providers/credentials'; 
import bcrypt from 'bcryptjs';
import Users from '../../models/userModel';
connectDB();

export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers: [
    //     EmailProvider({
    //     server:{ 
    //         host: process.env.EMAIL_SERVER_HOST,
    //         port: process.env.EMAIL_SERVER_PORT, 
    //         auth: {
    //             user: process.env.EMAIL_SERVER_USER,
    //             pass: process.env.EMAIL_SERVER_PASSWORD,
    //         }
    //     },
    //         from: process.env.EMAIL_FROM, 
    // }),

    CredentialsProvider({ 
        name: 'Credentials', 
        credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: {  label: "Password", type: "password" }
        },
        async authorize(credentials,req) {
            const email = credentials.email; 
            const password = credentials.password; 
            const user = await Users.findOne({email}); 
            if(!user) { 
                throw new Error('You haven\'t registered yet') 
            } 
            if (user){ 
                return signInUser({password , user})
            }
        }
    })
], 
    pages:{ 
        signIn:"/signin" 
    },
    secret: "secret", 
    database: process.env.MONGODB_URI, 
});

const signInUser = async ({password, user}) => { 
    if (!user.password){
        throw new Error("please enter password")
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch){
        throw new Error("password not correct")
    }
    return user  
}
