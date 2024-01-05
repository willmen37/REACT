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
  const [type, setType] = useState("restaurants")

  // useEffect(()=>{

  //   navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}})=>{
  //     setCoordinates({lat:latitude, lng:longitude});

  //   })
  // },[])

  // console.log(import.meta.env.VITE_TRAVEL_API_KEY)
  useEffect(()=>{
    // console.log(coordinates,bounds)
    setIsLoading(true)

    if(bounds.ne && bounds.sw){
      fetchData(type,bounds.ne,bounds.sw)
      .then((data) => { 
          console.log(data)  
          setPlaces(data.filter((place)=> place.name && place.num_reviews > 0));
          setIsLoading(false)
        }).catch((err)=>console.log(err))  

    }
    


  },[type,bounds]);

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
          <MapC
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked = {setChildClicked}
          />
          
        </div> 
        
        <div className='internalDiv1'> 
        
          <Places
              places={places}
              childClicked={childClicked}
              isLoading={isLoading}

              type={type}
              setType={setType}
          />
        </div>

        
      </div>
    </div>
  )
}

export default App


