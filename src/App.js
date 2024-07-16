import Header from "./components/Header";
import Main from "./components/Main";
import Companies from "./components/Companies";
import AboutUs from "./components/AboutUs"
import Services from "./components/Services"
import Working from "./components/Working"
import Case from "./components/Case"
import Team from "./components/Team"
import Pricing from "./components/Pricing"
import Faqs from "./components/Faqs";
import Feedback from "./components/Feedback";
import Posts from "./components/Posts";
import Form from "./components/Form";
import Sign from "./components/Sign";
import Footer from "./components/Footer";



function HomePage() {
  return (
    <div className="App">
      <Header/>
     <Main/>
     <Companies/>
     <AboutUs/>
     <Services/>
     <Working/>
     <Case/>
     <Team/>
     <Pricing/>
     <Faqs/>
     <Feedback/>
     <Posts/>
     <Form/>
     <Sign/>
     <Footer/>
    </div>
  );
}

export default HomePage;
