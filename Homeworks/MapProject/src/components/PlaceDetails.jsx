import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faRankingStar, faHandHoldingDollar, faGlobe } from '@fortawesome/free-solid-svg-icons';



const PlaceDetails = ({item, selected, refProp}) => {
  // console.log(item)
  if(selected) refProp?.current?.scrollIntoView({behavior: "smooth", block: "start"})
  const photo = item.photo ? item.photo : " ";
  const img = photo.images ? photo.images: " ";

  return (
    <div className="placeCard">
      {img ? (
        <div className='containerPlaceCard'  >
          <div className='cardName testClass'>
            <>{item.name}</> 
          </div>
          
          <img src={img.large ? img.large.url : img.small.url} className="img-place" alt='Card Place'/> 
          
          <div className='testClass'>
            {item?.website && (<><FontAwesomeIcon icon={faGlobe} className='itemsCard' /> <b> :</b> <a href={item.website}>Click to access Website.</a></>)}
            <br/>
            <FontAwesomeIcon icon={faRankingStar} className='itemsCard'  /><b> :</b> {item.ranking} 
            <br/>
            {item?.phone && (<> <FontAwesomeIcon icon={faPhoneVolume} className='itemsCard' /> <b> :</b> {item.phone}</>)}
            <br/>
            {item?.price_level && (<><FontAwesomeIcon icon={faHandHoldingDollar} className='itemsCard' /><b>  : </b><>{item.price_level}</></>)}
          </div> 
           
        </div>
        
      ): (null)}
    </div>
  )
}

export default PlaceDetails