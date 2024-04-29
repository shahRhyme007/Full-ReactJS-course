// jsx means java script xml

// instead of class we use classname

// react is creating with jsx is plain java script objects
/*jsx is just like  a function and when it is run returns us object that reaact can interpret and use to create actual elements 
that get put on to the screen for us*/



const element = <h1 className= 'header'>this is jsx</h1>

console.log(element)

ReactDOM.render( element, document.getElementById("root")
)


// with jsx we are retuning a single parent element. is this example div is the parent element and the h1 and p are the children elements. There there were no div then I would have gotten error for the code

/*ReactDOM.render( <div>
    <h1 className= 'header'>this is jsx</h1>
    <p>this is a paragraph</p>

</div>,
document.getElementById("root"))*/




// I can save a whole bunch of jsx into a single variable

const page = <div>
                <h1 className= 'header'>this is jsx</h1>
                <p>this is a paragraph</p>

            </div>

ReactDOM.render( page, document.getElementById("root"))




// challenge; creating a navigation bar

const navbar = <nav>
                    <h1>Rhymes coding</h1>
                    <ul>
                        <li>one</li>
                        <li>two</li>
                        <li>three</li>
                    </ul>                         
                </nav>

ReactDOM.render( navbar, document.getElementById("root"))
