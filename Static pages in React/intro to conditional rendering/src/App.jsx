// conditional rendering = allows you to control what gets rendered in your application based on certain conditions
//                         we can(show, hide , or change components)

import UserGreeting from "./UserGreeting/UserGreeting";

function App() {

  return(
    <>
      <UserGreeting isLoggedIn = {true} username = "rhyme boi"/>
      <UserGreeting isLoggedIn = {false} username = "rhyme boi"/>
      <UserGreeting isLoggedIn = {false}/>
      <UserGreeting isLoggedIn = {true}/>
    </>
  )

}

export default App
