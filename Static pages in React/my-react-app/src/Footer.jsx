function Footer (){

    return(

        <footer>
            {/* with in our return statement we can ad some js. To include the js put them inside {}. outiside of the return statement you dont */}
            <p> &copy;{new Date().getFullYear()} Rhyme's website</p>
        </footer>
    ); 

}
export default Footer 