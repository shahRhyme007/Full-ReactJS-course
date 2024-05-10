
import List from "./List/List"
function App() {


  const fruits = [{id: 1, name: "apple", calories: 95}, 
                  {id: 2, name: "orange", calories: 50}, 
                  {id: 3, name: "banana", calories: 12}, 
                  {id: 4, name: "coconut", calories: 56}, 
                  {id: 5, name: "pineapple", calories: 90},]


  const vegetables = [{id: 6, name: "potates", calories: 77}, 
                  {id: 7, name: "celery", calories: 67}, 
                  {id: 8, name: "corn", calories: 43}, 
                  {id: 9, name: "cucumber", calories: 34}, 
                  {id: 10, name: "carrots", calories: 12},]
  return(
    // with conditional rendering
    <>{fruits.length > 0 ? <List items = {fruits} categoryz = "Fruits"/> : null}
      
      {/* with out conditional rendering */}
      <List items = {vegetables} categoryz = "Vegetables"/>

    </>


    
  )

}

export default App
