import './style.css'
const SubTitle = ({children,variant}) => {
  return (
    <span className={variant==="sub-title-w"?"sub-title-w":"sub-title"}>{children}</span>
  )
}

export default SubTitle
