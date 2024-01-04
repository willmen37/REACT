import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'


const MapC = ({setCoordinates, setBounds, coordinates, places, setChildClicked}) => {

  return (
    <div style={{height: "150vh", width: "100%"}}>
      <GoogleMapReact
        bootstrapURLKeys = {{key:"AIzaSyBW317sgE_gG6Gph4YgrNWtSypJWgKKoYM"}}
        defaultCenter = {coordinates}
        center = {coordinates}
        defaultZoom = {14}
        margin = {[50, 50, 50, 50]}
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
                <p>{item.name}</p>
                <img src={img} className="img-map" alt={item.name}/>
              </div>
            ):(null)}
          </div>
        })}
      </GoogleMapReact>
    </div>
  )
}

export default MapC