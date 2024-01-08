import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import MapStl from "./mapStl"


const MapC = ({setCoordinates, setBounds, coordinates, places, setChildClicked}) => {

  return (
    <div style={{height: "90vh", width: "100%"}}>
      <GoogleMapReact
        bootstrapURLKeys = {{key:import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
        defaultCenter = {coordinates}
        center = {coordinates}
        defaultZoom = {14}
        margin = {[50, 50, 50, 50]}
        options={{disableDefaultUI: true, zoomControl: true, styles: MapStl  }}
        onChange={(e) => {
          // console.log(e)
          setCoordinates({lat: e.center.lat , lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw }); 
          // console.log(setBounds)
        }}
        onChildClick={(child)=> setChildClicked(child)}
        >
        
        {places && places.map((item, index) => {
          // console.log(places)
          const img= item?.photo?.images?.small?.url
          
          return <div 
            className='map-card'
            lat={Number(item.latitude)}
            lng={Number(item.longitude)}
            key={index}
          >
            { img?(
              <div>
                <h3>{item.name}</h3>
                <img src={img} className="img-map" alt={item.name}/>
                <div><b>Price: </b>{item.price_level}</div>
              </div>
            ):(null)}
          </div>
        })}
      </GoogleMapReact>
    </div>
  )
}

export default MapC