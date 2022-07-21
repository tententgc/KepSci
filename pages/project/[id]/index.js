import Link from 'next/link'
import Layout from '/components/layouts'
import { useRouter } from 'next/router'

export default function Project() {
    const router = useRouter()
    const { id } = router.query
    return (
        <Layout>
            <p> { id } </p>
        </Layout>
    )
}