import { useEffect, useState, createRef } from 'react';
import PlaceDetails from './PlaceDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Places = ({places, childClicked, isLoading}) => {

  
  //  console.log({childClicked})

  const [elRefs, setElRefs] = useState([])

  useEffect(()=>{
    const refs = Array(places?.length).fill().map((_, i)=> elRefs[i] || createRef());

    setElRefs(refs);
  },[places]);

  /*
         <form>
            <label>
              <h3>WHERE TO?</h3>

              <select value={type} onChange={(e)=> setType(e.target.value)}>
                <option value={"restaurant"}>Restaurants</option>
                <option value={"attractions"}>Attractions</option>
              </select>
            </label>
          </form>
  */

  return (
    <div>
      {isLoading ? (
        <div className='loading'>  <FontAwesomeIcon icon={faEye} beatFade  size="xl" /> <br/> <>Loading...</></div>
        ):(
        <>
     
          <div>
            {places && places.map((item,index)=>{
              // console.log(item)
              return(
                <div key={index}>
                  <PlaceDetails
                    item={item}
                    selected={Number(childClicked) === index}
                    refProp={elRefs[index]}
                  />
                </div>
              )
            })}
          </div>
        
        </>
      )}
    </div>
  )

}

export default Places