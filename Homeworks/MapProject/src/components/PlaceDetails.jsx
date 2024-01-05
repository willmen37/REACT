import React from 'react'


const PlaceDetails = ({item, selected, refProp}) => {
  // console.log(item)
  if(selected) refProp?.current?.scrollIntoView({behavior: "smooth", block: "start"})
  const photo = item.photo ? item.photo : " ";
  const img = photo.images ? photo.images: " ";

  return (
    <div className="placeCard">
      {img ? (
        <div className='containerPlaceCard'  style = {{height: 350}}>
          <div>
            <h2>{item.name}</h2> 
          </div>
          
          <img src={img.large ? img.large.url : img.small.url} className="img-place" alt='Card Place'/> 
          
          <div className='itemsCard'>
            {item?.address && (<> <b>Location:</b> {item.address}</>)}
            <br/>
            <div><b>Ranking:</b> {item.ranking} </div>
            {item?.phone && (<><b>Phone:</b> {item.phone}</>)}
            <br/>
            <div><b>Price:</b>{item.price_level}</div> 
          </div>  
        </div>
        
      ): (null)}
    </div>
  )
}

export default PlaceDetails