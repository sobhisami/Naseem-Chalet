import './style.css'
const Title = ({children,variant}) => {
  return (
    <span className={variant==="w-title" ? "w-title" :"title"}>{children}</span>
  )
}

export default Title
