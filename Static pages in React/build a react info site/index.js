/*ReactDOM.render(
    <ul>
        <li>First Item</li>
        <li>Second item</li>
    </ul>, 
    document.getElementById("root")
)*/


// same thing using JS (not recommended- very bad use)

const h1 = document.createElement('h1')
h1.textContent = 'This is a imperative way to program'
h1.className = 'header'
document.getElementById('root').append(h1)