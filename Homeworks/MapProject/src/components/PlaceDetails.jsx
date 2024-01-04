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
          <br/>
          <img src={img.small ? img.small.url : img.small.url} className="img-place" alt='Card Place'/> 
          <div>
            <h3>{item.name}</h3>
            {item?.address && (<> Location: {item.address}</>)}
          </div>
          <div>
            <>Price:{item.price_level}</> 
            <>Ranking: {item.ranking} </>
            {item?.phone && (<>Phone: {item.phone}</>)}
          </div>  
        </div>
        
      ): null}
    </div>
  )
}

export default PlaceDetails