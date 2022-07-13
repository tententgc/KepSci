import Navbar from './navbar'

const Layout = (props) => (
    <div>
        <Navbar />
        <div className="main pt-10 px-4 lg:pt-16">
            <div className="md:container md:mx-auto">
                {props.children}
            </div>
        </div>
    </div>
)
  
export default Layout