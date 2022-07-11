import Navbar from './navbar'
import Header from './header'

const Layout = (props) => (
    <div>
        <Header />
        <Navbar />
        <div class="main md:pt- lg:pt-16">
            <div className="md:container md:mx-auto">
                {props.children}
            </div>
        </div>
    </div>
)
  
export default Layout