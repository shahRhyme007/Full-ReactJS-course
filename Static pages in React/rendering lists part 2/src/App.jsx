
import List from "./List"
function App() {


  const fruits = [{id: 1, name: "apple", calories: 95}, 
                  {id: 2, name: "orange", calories: 50}, 
                  {id: 3, name: "banana", calories: 12}, 
                  {id: 4, name: "coconut", calories: 56}, 
                  {id: 5, name: "pineapple", calories: 90},]
  return(


    <List items = {fruits} category = "Fruits"/>
  )

}

export default App
