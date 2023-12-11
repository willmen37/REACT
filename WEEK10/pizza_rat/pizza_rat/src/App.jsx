
import {useState, useEffect } from "react";
import Complaint from "./components/Complaint";


const App = () => {

  const [location, setLocation] = useState("")
  const [input, setInput] = useState('')
  const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=${input}&agency=NYPD&borough=${location}`

  
  const [complaint, setComplaint] = useState([])

  

  async function getData(){
    try{

      const response = await fetch(url);
      const data = await response.json();
      console.log(data)

      setComplaint(data)
    }catch(error){
      console.log(error);
    }
  }

  useEffect( () => {

    getData()

  }, [location])


  function handleClick(e){
    // console.log(e.target.innerText)
    if (input > 0) {
      setLocation(e.target.innerText.toUpperCase())
    } else {
      setInput(10);
      setLocation(e.target.innerText.toUpperCase())
    }
    
    console.log(location)

  }

  function handleChange(e){
    setInput(e.target.value);
  }

  

  return (

    <div>
      <h3>WHERE CAN WE CAUSE TROUBLE TODAY?</h3>
      <input type="number"  value={input} onChange={handleChange}/>
      <button onClick={handleClick}>Brooklyn</button>
      <button onClick={handleClick}>Manhattan</button>
      <button onClick={handleClick}>Queens</button>
      <button onClick={handleClick}>Bronx</button>
      <button onClick={handleClick}>Staten Island</button>
      { complaint.map((complaint) => <Complaint item={complaint} key={complaint.unique_key}/>)}
    </div>
  )
}

export default App