import {useState} from "react"

export default function UseState() {
    const result = useState(0);
    const [c,d]= useState(1);
    console.log(result);
    
  return (
    <div>UseState</div>
  )
}
