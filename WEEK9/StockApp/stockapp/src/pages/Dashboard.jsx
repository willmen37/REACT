import { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom";



const Dashboard = () => {

    let apikey = import.meta.env.VITE_API_URL;
    // console.log(apikey)

    let {symbol} = useParams();

    let navigate = useNavigate()

    const url=`https://financialmodelingprep.com/api/v3/stock/list?apikey=${apikey}`;
    // console.log(url)

    const [stock, setStock] = useState({})

    async function getStock(){
        try{
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data)

            const filteredStock = data.filter(data => {
                if(data.symbol == symbol){
                    return true
                } 
            })
            setStock(filteredStock)
        }catch(error){
            console.log(error);
        }
        
    }
    // console.log(stock)
    useEffect( ()=>{
        getStock()
    }, [])


function loaded(){
    return (
        <div onClick={() => navigate("/")}>
    
                <h1>Stock name:<br/> {stock[0]?.name}</h1>
                <h1>Current value:<br/> {stock[0]?.price}</h1>
        
        
            
        </div>
      )
}

function loading(){
    return(
        <div>
            <h1>Loading...</h1>
        </div>
    )
}


return stock[0]?.price ? loaded() : loading()

  
}

export default Dashboard