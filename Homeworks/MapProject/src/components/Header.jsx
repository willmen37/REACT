import { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';


const Header = ({setCoordinates, type, setType}) => {
  const[autocomplete, seAutocomplete]=useState(null);

  const onLoad = (autoC) => seAutocomplete(autoC);
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({lat, lng})
  }

  return (
    
    <nav className='nav'>
      <h1 className='title'>GoingOut</h1>
      <>
        <div className='where'>
          <h3 className='placesh3'>City:</h3>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            
            <input type="text" className="input" placeholder=" Type your Location here"></input>
          </Autocomplete>
        </div>
        <div className='where'>
          <h3 className='placesh3'>Places:</h3>
          <form>
            
            <label >
              <select value={type} onChange={(e)=> setType(e.target.value)} className='custom'>
                <option value={"restaurants"}>Restaurants</option>
                <option value={"attractions"}>Attractions</option>
              </select>
            </label>
          </form>
        </div>  
    
        
      </>
    </nav>
      
  
  )
}

export default Header