import Header from "./components/Header";
import Main from "./components/Main";
import Companies from "./components/Companies";
import AboutUs from "./components/AboutUs"



function HomePage() {
  return (
    <div className="App">
      <Header/>
     <Main/>
     <Companies/>
     <AboutUs/>
    </div>
  );
}

export default HomePage;
