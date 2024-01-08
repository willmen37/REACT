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
            <h3>{item.name}</h3> 
          </div>
          
          <img src={img.large ? img.large.url : img.small.url} className="img-place" alt='Card Place'/> 
          
          <div className='itemsCard'>
            {item?.website && (<> <b>Website:</b> <a href={item.website}>{item.website}</a></>)}
            <br/>
            <b>Ranking:</b> {item.ranking} 
            <br/>
            {item?.phone && (<><b>Phone:</b> {item.phone}</>)}
            <br/>
            <b>Price:</b>{item.price_level}
          </div>  
        </div>
        
      ): (null)}
    </div>
  )
}

export default PlaceDetails