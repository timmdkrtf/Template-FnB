import Navbar from "../components/Navigation"
import Home from "../components/Home"
import Menu from "../components/Menu"
import Portfolio from "../components/Portfolio"
import Footer from "../components/Footer"

function Landing(){
    return (
        <div>
            <Navbar />
            <Home />
            <Menu />
            <Portfolio />
            <Footer />
        </div>
    );
}
export default Landing;