import { getCsrfToken, getProviders, signIn, getSession } from "next-auth/react";
import Layout from '/components/layouts'
import { useRouter } from 'next/router'
import { useState, Router} from "react"; 
import Link from 'next/link'
export default function SignIn({ csrfToken, providers }) {

    const router = useRouter() 
    const [username, setUsername] = useState(''); 
    const [email,setEmail] = useState(''); 
    const [password,setPassword] = useState(''); 
    const [Message , setMessage] = useState(null); 

    const signinUser = async (e) => { 
        e.preventDefault();
        let options = {redirect:false,email,password} 
        const res = await signIn('credentials',options); 
        setMessage(null);
        if (res?.error){ 
            setMessage(res.error)
        }
        if (res?.ok){
          return router.push('/')
        }

    }

    const signupUser = async (e) => {
        e.preventDefault();
        setMessage(null);
        const res = await fetch('/api/register', { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})
        })
        const data = await res.json();  
        if (data.message) {
            setMessage(data.message)
        }
        if (data.message === "Register Success"){
            const options = {redirect:false,email,password}
            const res = await signIn('credentials',options);
            return router.push('/') 
        }
    } 



    return (
    <Layout>
        <div className='login-card mx-auto drop-shadow-md'>
            <p className='text-center text-2xl font-semibold mb-3'>เข้าสู่ระบบ</p>

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
                <span className="block font-medium text-slate-700">Password</span>
                <input
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="password"
                    value={password}
                    placeholder="password" 
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"
                    onChange={(e) => setPassword(e.target.value)}
                    required />
            </div>
            <p style={{color:'red'}}>{Message}</p> 
            <div className='input-group mb-2'>
                    <Link href="/register">
                        <a className='transition duration-75 mb-5 text-blue-500 hover:text-blue-700'>ยังไม่มีบัญชี?</a>
                    </Link>
                </div>
            <button className='transition duration-75 block px-3 py-2 w-full mb-3 rounded-md bg-blue-500 text-white hover:bg-blue-600' onClick={(e) => signinUser(e)}>Sign in</button> 
        </form>
        </div>


            {Object.values(providers).map((provider) => {
                if (provider.name === "Email" || provider.name === "Credentials") {
                    return ;
                }
                return (<div key={provider.name}>
                    <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
                </div>)
               
            })}
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (session) {
        console.log(session)
    }

    const csrfToken = await getCsrfToken(context);
    const providers = await getProviders()
    return {
        props: { csrfToken, providers }
    }
}