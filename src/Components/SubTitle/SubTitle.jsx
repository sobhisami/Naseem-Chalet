import './style.css'
const SubTitle = ({children,variant}) => {
  return (
    <span className={variant==="sub-title-w"?"sub-title-w":"sub-title animate-text"}>
        {children}
      </span>
  )
}

export default SubTitle
