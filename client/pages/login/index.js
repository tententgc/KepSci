import Layout from '/components/layouts'
import Link from 'next/link'
import React from 'react'
import { providers,getSession} from 'next-auth/react'

const Login = ({providers,session}) => { 
    console.log({providers,session})
        
    if(session) return null; 

    return (
        <div className='d-flex justify-content-center align-items-center'> 
            <div className='login-card mx-auto drop-shadow-md'>
                <p className='text-center text-2xl font-semibold mb-3'>Login</p>
                <div className='flex flex-col gap-3'>
                    {Object.values(providers).map((provider) => {
                        return (
                            <div key={provider.name}>
                                <button className='btn btn-primary' onClick={() => signIn(provider.id)}>
                                    Sign in with {provider.name}
                                </button>
                            </div>
                        )
                    })}
                    </div>
                    </div>
                    
        </div>
    )
}

Login.getInitialProps = async (context) => { 
    return { 
        providers: await providers(context), 
        session : await getSession(context) 
    }
}


export default Login ;