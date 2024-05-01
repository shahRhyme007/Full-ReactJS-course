

// how to style react components with css
// 1. external - great for global styling- puting everything to index.css
// 2. modules - dedicated css styling sheet for each component ---> in this example we have created a specific folder for the component Button
// 3. inline - good for small component with minimal styling

import Button from "./Button/Button.jsx"


function App() {


  return(<Button></Button>)
  
 
}

export default App
