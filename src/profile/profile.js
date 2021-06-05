import PropTypes from "prop-types";


 

function profile(props) {
    return(
    <>
    <h1>Hello I'm {props.name}</h1>
    <h1>I have   {props.bio}</h1>
    <h1>so i'm a {props.profession}</h1>

    <button onClick={() => props.handlemyname(props.name)}>
        Profile Name
    </button>


  </>
 );

}
   
   
   
   profile.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
     
   };
   profile.defaultProps = {
    name: "Your name",
    bio: "your bio",
    profession: "Your profession"
   };
   
   
   export default profile;
   