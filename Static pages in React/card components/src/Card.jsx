
import pic from "./assets/naruto.jpeg"
function Card(){
    return(
        <div className="card">
            {/* if you are selecting a photo from the local computer than put the image in the asset folder */}
            <img className="card-image" src={pic} alt="" />
            {/* <img src="https://zelda.nintendo.com/tears-of-the-kingdom/_images/features/link-crouching.png" width={300} alt="Profile Picture" /> */}
            <h2 className="card-title">Shah Arifur Rahman Rhyme</h2>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Veniam molestias expedita corrupti laudantium sunt labore! A consequuntur cupiditate est labore!</p>

        </div>
    )



}

export default Card