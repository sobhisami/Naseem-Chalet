import { useState } from "react"
import "./style.css"
const Step = ({src,alt,title}) => {
  return (
    <div className="step">
      <img src={src} alt={alt} />
      <span>{title}</span>
    </div>
  )
}

export default Step
