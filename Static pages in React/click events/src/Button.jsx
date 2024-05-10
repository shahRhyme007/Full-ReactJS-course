

function Button(){

    const handleClick = ( ) => console.log("ouch!!")
    // using parameter
    const handleClick2 = (name) => console.log (`${name} stop clicking me` ) 

    // doing calculations
    let count = 0
    const handleClick3 = (name) => {
        if (count < 5)
        {
            count++; 
            console.log(`${name} you clicked me ${count} times `)
        }
        else
        {
            console.log(`${name} stop clicking me!`)
        }
    }


    // e is called the event parameter writter as e in short (really useful)
    // const handleClick4 = (e) => console.log(e) //we can change the event properties by accessing the elements
    const handleClick5 = (e) => e.target.textContent = "OUCH!😭" ;//we can change the event properties by accessing the elements

    
return (
<>
<button onClick={handleClick}>CLICK ME</button>
<br></br>
{/* using function parameter */}
<button onClick={ ()=> handleClick2("rhyme")}>CLICK ME </button>
<br></br>
<button onClick={ ()=> handleClick3("rhyme")}>CLICK ME </button>
<br></br>
<button onClick={ (e)=> handleClick5(e)}>CLICK ME 😊 </button>

</>
)

}

export default Button