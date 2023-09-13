import './style.css'
const Title = ({children,variant}) => {
  return (
    <span className={variant==="w-title" ? "w-title t-color" :"title animate-text y-color"}>{children}</span>
  )
}

export default Title
