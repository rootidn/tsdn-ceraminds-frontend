import Explore from "../components/Explore"
import Hero from "../components/Hero"
import Introduction from "../components/Introduction"
import About from "../components/About"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="bg-slate-50">
      <Hero/>
      <Introduction/>
      <Explore/>
      <About/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}
