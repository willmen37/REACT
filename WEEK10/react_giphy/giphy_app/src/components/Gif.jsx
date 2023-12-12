const Gif = ({picture}) => {

   
  return (
    <div>
        {picture && 
            <img src={picture.data.images.fixed_height.url}/>
            
        }
    
    </div>
  )
}

export default Gif