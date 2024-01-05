import { useEffect, useState, createRef } from 'react';
import PlaceDetails from './PlaceDetails';


const Places = ({places, childClicked, isLoading, type, setType}) => {

  
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
                <option value={"restaurant"}>Restaurant</option>
                <option value={"atractions"}>Atractions</option>
              </select>

              <select>
                <option value="ratings">Ratings</option>
              </select>
            </label>
          </form>
  */

    

  return (
    <div>
      {isLoading ? (
        <div> <h5>Loading...</h5> </div>
      ):(
        <>
          <form>
            <label>
              <h3>WHERE TO?</h3>

              <select value={type} onChange={(e)=> setType(e.target.value)}>
                <option value={"restaurant"}>Restaurant</option>
                <option value={"attractions"}>Attractions</option>
              </select>
            </label>
          </form>
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