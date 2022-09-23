import Navbar from './nav'
import Footer from './footer'

const Layout = (props) => (
    <div>
        <Navbar />
        <div className="main py-10 px-4 lg:pt-16">
            <div className="md:container md:mx-auto">
                {props.children}
            </div>
        </div>
        <Footer />
    </div>
)
  
export default Layout