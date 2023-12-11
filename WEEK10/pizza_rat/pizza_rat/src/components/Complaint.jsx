import { useState } from "react"


const Complaint = ({item}) => {

    const [showResolution, setShowResolution] = useState(false)

  return (
    <div>Complaint
    <div>
    {item.complaint_type}

    <button onClick={() => setShowResolution(!showResolution)}>What did the Police do?</button>
    <div>{ showResolution && item.resolution_description}</div>
    </div>
    </div>
  )
}

export default Complaint