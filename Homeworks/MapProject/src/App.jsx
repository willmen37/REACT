import './App.css'
import Places from "./components/Places"
import MapC from './components/MapC'
import Header from './components/Header'
import { useEffect, useState } from 'react'

import { fetchData } from './api'

function App() {
  const [places, setPlaces] = useState();
  const [childClicked, setChildClicked] = useState({})

  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})

  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{

    navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}})=>{
      setCoordinates({lat:latitude, lng:longitude});

    })
  },[])

  
  useEffect(()=>{
    // console.log(coordinates,bounds)
    setIsLoading(true)

    if(bounds.ne && bounds.sw){
      fetchData(bounds.ne,bounds.sw)
      .then((data) => { 
          //  console.log(data)  
          setPlaces(data.filter((place)=> place.name && place.num_reviews > 0));
          setIsLoading(false)
        })  

    }
    


  },[bounds]);

  // console.log(places)


  return (
    <div >
      <div>
        <Header
          setCoordinates={setCoordinates}
        />
      </div>
      <div className='container'>
        

        <div className='internalDiv2'>
          <Places
            places={places}
            childClicked={childClicked}
          />
        </div> 
        
        <div className='internalDiv1'> 
        <MapC
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          places={places}
          setChildClicked = {setChildClicked}
        
        />
</div>

        
      </div>
    </div>
  )
}

export default App


