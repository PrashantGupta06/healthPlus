import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection"
import CardsSection from "./Components/CardsSection";
import AboutUs from "./Components/AboutUs";
import BookAppoint from "./Components/BookAppoint";
import Doctors from "./Components/Doctors";
import Footer from "./Components/Footer";
import Slider from "./Components/Slider";
import reviews from "./Components/data";

function App() {
  return (
    <div className="overflow-hidden">
    <Navbar/>
    <HeroSection/>
    <CardsSection/>
    <AboutUs/>
    <BookAppoint/>
    <Slider reviews={reviews}/>
    <Doctors/>
    <Footer/>
    </div>
  );
}

export default App;
