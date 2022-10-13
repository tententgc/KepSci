import { getCsrfToken, getProviders, signIn, getSession } from "next-auth/react";
import Layout from '/components/layouts'
import { useRouter } from 'next/router'
import { useState, Router , useEffect} from "react";
import Link from 'next/link' 


export default function SignUp({ csrfToken, providers }) {

    const router = useRouter()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [Message, setMessage] = useState(null);

    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [cPasswordClass, setCPasswordClass] = useState('form-control');
    const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

    useEffect(() => {
        if (isCPasswordDirty) {
            if (password === cPassword) {
                setShowErrorMessage(false);
                setCPasswordClass('form-control is-valid')
            } else {
                setShowErrorMessage(true)
                setCPasswordClass('form-control is-invalid')
            }
        }
    }, [cPassword])


    const handleCPassword = (e) => {
        setCPassword(e.target.value);
        setIsCPasswordDirty(true);
    }

    const signupUser = async (e) => {
        e.preventDefault();
        setMessage(null);
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username,email, password })
        })
        console.log(res)

        const data = await res.json();
        if (data.message) {
            setMessage(data.message)
        }
        if (data.message === "Register Success") {
            const options = { redirect: false,username, email, password }
            const res = await signIn('credentials', options);
            return router.push('/')
        }
    }

    return (
        <Layout>
            <div className='login-card mx-auto drop-shadow-md'>
                <p className='text-center text-2xl font-semibold mb-3'>สมัครใช้งาน</p>

                <form method="post" action="/api/auth/signin/email">
                    <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

                    <div className='input-group mb-3'>
                        <span className="block font-medium text-slate-700">Email</span>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"
                            placeholder="Example@gmail.com"
                            required />
                    </div>
                    <div className='input-group mb-3'>
                        <span className="block font-medium text-slate-700">Name</span>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            autoComplete="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"
                            placeholder="Example"
                            required />
                    </div>
                    <div className='input-group mb-3'>
                        <span className="block font-medium text-slate-700">Password</span>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="password"
                            value={password}
                            placeholder="password"
                            className="form-control mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                    <div className='input-group mb-3'>
                        <span className="block font-medium text-slate-700">Confirm Password</span>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmpassword"
                            autoComplete="Cpassword"
                            value={cPassword}
                            placeholder="password"
                            className="form-label mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"
                            onChange={handleCPassword}
                            required />
                    </div>
                    {showErrorMessage && isCPasswordDirty ? <div style={{color:'red'}}> Passwords did not match </div> : ''}
                


                    <p style={{ color: 'red' }}>{Message}</p>
                    <div className='input-group mb-2'>
                        <Link href="/signin">
                            <a className='transition duration-75 mb-5 text-blue-500 hover:text-blue-700'>ฉันมีบัญชีแล้ว?</a>
                        </Link>
                    </div>
                    
                    <button className='transition duration-75 block px-3 py-2 w-full mb-3 rounded-md bg-blue-500 text-white hover:bg-blue-600' onClick={(e) => signupUser(e)}>Sign Up</button>
                </form>
            </div>
        </Layout>
    )
}