//props = are read only properties that are shared between components.
          // A parent component can send a data to a children component
          // when you include a component with in a parent you can send that child component key value pairs
          // <Component key= value></Component>





import StudentINFO from "./Student/Student.jsx"


function App() {

  // Student is the child component and app is the parent comopnent 
  // when we send key value pairs to a component they are all stored with in the props object(in our case that is in Student.jsx)

  return(

    <>
    {/* the name of the variable "name should be same on both App.jsx and Student.jsx" */}
    {/* if the value is not a string variable than you have to enclose it in {} */}
      <StudentINFO name= "Rhyme" age= {21} isStudent = {false}/>
      <StudentINFO name= "rhythm" age= {12} isStudent = {true}/>
      <StudentINFO name= "Rakib" age= {18} isStudent = {false}/>
      <StudentINFO/>
      <StudentINFO name="dilam na "/>
    </>
    
  )

}

export default App
