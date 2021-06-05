 import './App.css';
import Profile from './profile/profile';
import image from './profile/imageInSrc.jpg';
 function App() {

  const styleProfile ={ color:"gray", fontSize: '10px' };
  const imgProfile =  { width:"150px", border: '2px solid gray' };
 
    const handlemyname = name => alert(name);
  

  const Photo = props => {
    return <h1> {props.children}</h1>;
  };
  return (
  <>
    <div className="App" style={styleProfile}>

    <Profile name="Mhamad" bio="GoMyCode Degree"profession="Web Developper" handlemyname={handlemyname}/>
   <Photo><img src={image} alt='photo' style={imgProfile}/></Photo>

      

    </div>
</>
  );
}

export default App;
