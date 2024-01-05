import { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';


const Header = ({setCoordinates}) => {
  const[autocomplete, seAutocomplete]=useState(null);

  const onLoad = (autoC) => seAutocomplete(autoC);
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({lat, lng})
  }

  return (
    
    <nav className='nav'>
      <b>GoingOut</b>
      <>
        {/*<> <a href="#services">Services</a></>
           <> <a href="#portfolio">Portfolio</a></>
           <> <a href="#contact">Contact</a></>*/}
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <input type="text" placeholder="Search.."></input>
        </Autocomplete>
        
      </>
    </nav>
      
  
  )
}

export default Header