function ProfilePicture() {

    const imageURL = "./src/assets/naruto.jpeg"
    const handleClick = (e) => e.target.src = "./src/assets/image.jpg"


    return(<img style={{ width: '300px', height: 'auto' }} 
                onClick={(e) => handleClick(e)} src={imageURL}>
           </img>)

}
export default ProfilePicture