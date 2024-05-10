import styles from "./List.module.css" 
import PropTypes from "prop-types"

function List (props){

    // items is our fruits array
    const itemPropList = props.items

   
        const CategoryHeading = props.categoryz

        const listItems = itemPropList.map(itemProp =>
        <li key = {itemProp.id}>
            {itemProp.name}  = &nbsp; {itemProp.calories}</li>)
        

        return (
        <>
        {/*LIST.JSX CREATES THE FUNCTIONALITY OF THE APPLICATION */}
            <h3 className={styles.listCategory}> {CategoryHeading}</h3>
            <ol className={styles.listItemCSS}> {listItems}</ol>
        </>
            
        )
}

// adding default props 
List.defaultProps = {
    categoryz : "Category", 
    items: []
}

List.PropTypes = {
    categoryz : PropTypes.string, 
    items : PropTypes.arrayOf(PropTypes.shape({ id : PropTypes.number, 
                                                name: PropTypes.string,
                                                calories: PropTypes.number}
                                            ))
     

}


export default List