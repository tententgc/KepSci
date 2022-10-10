import Layout from '/components/layouts'
import Link from 'next/link'
import { useState } from 'react';
import axios from 'axios'; 
export default function Home() {
    const [username, setUsername] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const res = await axios.post('http://localhost:5001/api/auth/register', { 
            username,
            email,
            password,
        });
        console.log(res);
    }



    return (
        <Layout>
            <div className='login-card mx-auto drop-shadow-md'>
                <p className='text-center text-2xl font-semibold mb-3'>Registration</p>
                <form className='flex flex-col gap-3' onSubmit={handleSubmit} >
                    <div className='input-group mb-3'>
                        <span className="block font-medium text-slate-700">Username</span>
                        <input 
                        id = 'username' 
                        name = 'username' 
                        type="text" 
                        onChange={(e) => setUsername(e.target.value)} 
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"
                        placeholder="ชื่อผู้ใช้งาน" />
                    </div>
                    <div className='input-group mb-3'>
                        <span className="block font-medium text-slate-700">Email</span>
                        <input
                            id='email'
                            name='email'
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"
                            placeholder="Example@gmail.com" />
                    </div>
                    <div className='input-group mb-3'>
                        <span className="block font-medium text-slate-700">Password</span>
                        <input 
                        id = "password"
                        name = "password"
                        type="password" 
                        pattern='[a-z0-9]{1,15}'
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Type your password" 
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm" />
                    </div>
                    <div className='input-group mb-3'>
                        <span className="block font-medium text-slate-700">Confirm-Password</span>
                        <input 
                        id="confirm" 
                        name="confirm"
                        type="password"
                        pattern='[a-z0-9]{1,15}'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Type your password again" 
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm" />
                    </div>
                    <div className='input-group mb-2'>
                        <Link href="/login">
                            <a className='transition duration-75 mb-5 text-blue-500 hover:text-blue-700'>มีบัญชีเรียบร้อยแล้ว?</a>
                        </Link>
                    </div>
                    <button 
                    type ='submit' 
                    value="Register "className='transition duration-75 block px-3 py-2 w-full mb-3 rounded-md bg-blue-500 text-white hover:bg-blue-600'>สมัครบัญชีผู้ใช้งาน</button>
                </form>
            </div>
        </Layout>
    )

}