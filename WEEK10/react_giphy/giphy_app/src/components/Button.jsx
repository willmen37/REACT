import Gif from "./Gif"
import { useState } from "react";

const Button = () => {

    let key = import.meta.env.VITE_KEY;
   

    
    const [picture, setPicture]= useState(null)

    function handleClick(){

        
   
        async function giphy(){
            try{
                const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${key}`);
                const data = await response.json();
                
                setPicture(data)
                console.log(data)
                

            }catch(error){
                console.log(error)
            }
            
        }
        giphy()
   

        
    }

  return (
    <div>

        <button onClick={handleClick}>New Call</button>
        <h3>Used Giphy to pull some gifs</h3>
        <Gif picture={picture}/>
    
    </div>
  )
}

export default Button