

function List (props){

    const itemPropList = props.items 

   
        const CategoryHeading = props.category 

        const listItems = itemPropList.map(itemProp => <li key = {itemProp.id}>
            {itemProp.name}  = &nbsp; {itemProp.calories}</li>)
        

        return (<>
        <h3>{CategoryHeading}</h3>
        <ol>{listItems}</ol>
        </>
            
        )

}
export default List