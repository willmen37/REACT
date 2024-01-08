import { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute, faLocationDot, faGopuram, faUtensils } from '@fortawesome/free-solid-svg-icons';


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
      <div className='title'>
        <FontAwesomeIcon icon={faRoute} size="xl" />
        < >GoingOut</>
      </div>
      <>
        <div className='where'>
          <FontAwesomeIcon icon={faLocationDot} size="xl" className='placesh3'/>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            
            <input type="text" className="input" placeholder=" Type your Location here"></input>
          </Autocomplete>
        </div>
        <div className='where'>
          
          <FontAwesomeIcon icon={ faUtensils} size="xl" className='placesh3'/>
          <form>
            <label >
              <select value={type} onChange={(e)=> setType(e.target.value)} className='custom'>
                <option value={"restaurants"}>Restaurants</option>
                <option value={"attractions"}>Attractions</option>
              </select>
            </label>
          </form>
          <FontAwesomeIcon icon={faGopuram} size="xl" className='placesh3'/>

        </div>  
    
        
      </>
    </nav>
      
  
  )
}

export default Header