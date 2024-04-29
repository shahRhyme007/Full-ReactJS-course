// NOTE ; react is all about reusing components. A component is a small section of a code that can include JS and HTML
import Header from "./Header"
import Footer from './Footer.jsx'
import Food from "./Food.jsx";

// to eliminate the sample project delete everything inside fo the app function 
function App() {

  //we do have an app componen that serves as our root
  //we will add other components to our app component
  return(
    //adding the header component(we are only allowed to return a single element. That is how jsx is designed)
    //so we have to enclose all our components with in a fragment
    // <Header></Header>\

    <>
     < Header/>
     <Food/>
     <Food/>
     <Footer></Footer>

    
    
    </>
  ); 

 
}

export default App
