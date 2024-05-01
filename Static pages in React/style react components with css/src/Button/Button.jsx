// import styles from "./Button.module.css" usded for module styling

function  Button(){

    
        // import name styles and the name of the class which is called button
        // a unique clas name is generated viea a hash
        // ---------------CODE FOR MODULE STYLING------------------------
        // return(
        //     <button className={styles.button}>Click me</button>
        // )
        // -------------------------------------------------------------


        // now we will be doing inline styling - all the css code will be stored in the Button.jsx folder- no need to write elsewhere
        const sytles = {
            // the swithed from - naming convention to camel case nameing convention
            // Also all the values should be strings
                backgroundColor: "aqua",
                color: "white",
                padding: "10px 20ps",
                borderRadius: "5px",
                /* removing the border */
                border: "none", 
                /* changing the cursor when hovering over the button */
                cursor: "pointer"  ,      

        }
        return(
            // this is inline css styling
        <button style={sytles}>Click me</button>
    ); 

}

export default Button