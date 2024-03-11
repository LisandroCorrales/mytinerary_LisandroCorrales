import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Header from "../components/Header"

const LayoutMain = (props) => {
    return (
        <div className="w-full min-h-screen flex flex-col ">

            <Header />

            <Hero/>


            {props.children}
            

            <Footer />

        </div> 
    )
}
export default LayoutMain