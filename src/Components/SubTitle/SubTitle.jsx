import './style.css'
const SubTitle = ({children,variant}) => {
  return (
    <span className={variant==="sub-title-w"?"sub-title-w animate-text":"sub-title animate-text"}>
        <svg width="100%" height="100%">
        <text x="50%" y="60%"  text-anchor="middle"  >
        {children} 
        </text>
        </svg>
      </span>
  )
}

export default SubTitle
