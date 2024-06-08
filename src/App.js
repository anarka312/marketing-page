import Header from "./components/Header";
import Main from "./components/Main";
import Companies from "./components/Companies";
import AboutUs from "./components/AboutUs"
import Services from "./components/Services"



function HomePage() {
  return (
    <div className="App">
      <Header/>
     <Main/>
     <Companies/>
     <AboutUs/>
     <Services/>
    </div>
  );
}

export default HomePage;
