

function List (){
   
   
   
    //**********************this is for list of strings*************************************************** 
    /*const fruits = ["apple", "orange", "banana", "coconut", "pineapple"]
    //when we return the fruits and  call the List components in App.jsx we get a long string in the output window
    // Instead of returning our array of strings , we have to convert our array of strings into array of  list elements 
    // we use the built in map method to convert strings into array of list elements 


    // inside of the map method we can either pass in : callback a function expression,  or an arrow function 
    // we are using an arrow function in this example 
    // inside the function named fruitList do this 
    const listItems = fruits.map(fruitIndividual => <li>{fruitIndividual}</li>)

    return (
        <ul>{listItems}</ul>
    ) */




        //**********************this is for list of objects*************************************************** 

        const fruits = [{id: 1, name: "apple", calories: 95}, 
                        {id: 2, name: "orange", calories: 50}, 
                        {id: 3, name: "banana", calories: 12}, 
                        {id: 4, name: "coconut", calories: 56}, 
                        {id: 5, name: "pineapple", calories: 90},]

        // sorting the list of objects 
        // fruits.sort((a,b) => a.name.localeCompare(b.name)) //ALPHABETICAL ORDER
        // fruits.sort((a,b) => b.name.localeCompare(a.name)) //REVERSE ALPHABETICAL ORDER

        // fruits.sort((a,b) => a.calories - b.calories) //CALORIES SORTED IN ASCENDING ORDER (Numeric)
        // fruits.sort((a,b) => b.calories - a.calories) //CALORIES SORTED IN DESCENDING  ORDER 


        // filter method
        const lowCalFruits = fruits.filter(fruitFilter => fruitFilter.calories < 60)

        //map method 
        /* const listItems = fruits.map(fruitList => <li key = {fruits.id}>
            {fruitList.name}  = &nbsp; {fruitList.calories}</li>)*/

        const listItems = lowCalFruits.map(fruitList => <li key = {fruits.id}>
            {fruitList.name}  = &nbsp; {fruitList.calories}</li>)
        

        return (
            <ol>{listItems}</ol>
        )

}
export default List