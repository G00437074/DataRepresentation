/* created a content component in the components folder 
    here we will display the main content of the page */
function Content(){
    return (
        <div>
            <h1>Hello World! from Content.jsx</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
}

export default Content
