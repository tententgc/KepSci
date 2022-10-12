import { getCsrfToken, getProviders, signIn,getSession } from "next-auth/react";
import Layout from '/components/layouts'
export default function SignIn({ csrfToken, providers }) {
    return (
        <Layout>
        <form method="post" action="/api/auth/signin/email">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label>
                Email address
                <input type="email" id="email" name="email" />
            </label>
            <button type="submit">Sign in with email</button>
        </form>
        
        {Object.values(providers).map((provider) => {
            if (provider.name === "Email") { 
                return ; 
            }
            return <div key={provider.name}>
                <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
            </div>
    })}
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context); 
    if (session) { 
        console.log("Session", JSON.stringify(session, null, 2)); 
    } else{ 
        res.status(401).send("Unauthorized"); 
    }
    const csrfToken = await getCsrfToken(context); 
    const providers = await getProviders()
    return{ 
        props: { csrfToken , providers } 
    }
}