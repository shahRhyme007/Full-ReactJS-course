function Food()
{

    const food1 = "Orange"
    const food2 = "Danish cake"
    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toLocaleUpperCase()}</li>
        </ul>
    );

}

export default Food