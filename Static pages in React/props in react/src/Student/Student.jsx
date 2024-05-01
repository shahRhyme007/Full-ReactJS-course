// in order for the function to accept props , this functin needs a props parameter
// props is a js object 



import styles from "./Student.module.css" 
import propTypes from 'prop-types'
function Student (props) 
{
    return(
        // 
           <div className={styles.studentCSS}>
            {/* the props.name is returned from app.jsx */}
        <p>YoYo name : {props.name}</p>
        <p>YoYo age  : {props.age}</p>
        {/* since boolean is not displayed directly on the DOM we have to use a ternary if here  */}
        <p>YoYo Student : {props.isStudent ? "Yes" : "No"}</p>
    </div>

    )

    
}

/*PROPTYPES = a mechanism that ensure that the passed value is of the correct datatype. 
            age: PropTypes. number*/

Student.propTypes = {
    name :propTypes.string, 
    age : propTypes. number, 
    isStudent : propTypes. bool,
}


/*defaultProps = default values for props in case they are not passed from the parent componet 
            name: "Guest"*/

Student.defaultProps = {
    name : "Guest", 
    age: 0, 
    isStudent: false
}


export default Student 