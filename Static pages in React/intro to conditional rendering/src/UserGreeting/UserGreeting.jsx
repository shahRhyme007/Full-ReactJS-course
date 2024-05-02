import styles from "./UserGreeting.module.css"
import propTypes from "prop-types"

function UserGreeting(props){
    // note: props is an object and username is an Element
    // if (props.isLoggedIn)
    // {
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please Login to continue</h2>
    // }


    // shortcut
    return (props.isLoggedIn ? <h2 className= {styles.welcomeMessage}>Welcome {props.username}</h2> : 
                               <h2  className= {styles.loginPrompt}>Please Login to continue</h2> )

}

UserGreeting.propTypes = {
    isLoggedIn : propTypes.bool,
    username : propTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn : false,
    username : "Guest",

}
export default UserGreeting