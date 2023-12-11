import { useEffect, useState } from "react";

const AllShips = () => {

    const [ data, setData] = useState();


    useEffect(() =>{

        async function fetchData(){
            try{
                const response = await fetch("https://swapi.dev/api/starships/?format=json");
                const data = await response.json();
                // console.log(data);
                setData(data)

            }catch(error){
                console.log(error)
            }
        }
        fetchData();
        // console.log(data)

    },[])

  return (
    <div className="container">

    {data && data.results.map((item, index)=>{
        console.log(item)
        return(
            <div key={index} className="ships">
             {item.name} 
            </div>
        )
       
    })}
    
    
    
    </div>
  )
}

export default AllShips