import { getCsrfToken, getProviders, signIn, getSession } from "next-auth/react";
import Layout from '/components/layouts'
import Link from 'next/link'
import { useState, Router } from "react"; 
export default function SignIn({ csrfToken, providers }) {


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
        return  Router.push('/') 
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
            return Router.push('/') 
        }
    } 



    return (
    <Layout>
        <form method="post" action="/api/auth/signin/email">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> 
            <label> 
                Email address
                <input 
                type="email" 
                id="email" 
                name="email" 
                autoComplete="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required />
            </label>
            <label>
                Password
                <input
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
            </label>
            <p style={{color:'red'}}>{Message}</p> 
            <button onClick={(e) => signinUser(e)}>Sign in</button> 
            <button onClick={(e) => signupUser(e)}>Sign up</button>
        </form>


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