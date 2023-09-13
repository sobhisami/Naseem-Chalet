import './style.css'
const SubTitle = ({children,variant}) => {
  return (
    <span className={variant==="sub-title-w"?"sub-title-w animate-text":"sub-title animate-text"}>
        {children}
      </span>
  )
}

export default SubTitle
