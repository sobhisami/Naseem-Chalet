import { useState } from "react"
import "./style.css"
const Step = ({src,alt,title}) => {
  return (
    <div className="step animate-text light-image">
      <img src={src} alt={alt} />
      <span>{title}</span>
    </div>
  )
}

export default Step
