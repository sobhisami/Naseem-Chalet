import './style.css'
const Container = ({children,variant}) => {
  return (
    <div className={variant==="container-small" ? "container-small" : "container-large"}>{children}</div>
  )
}

export default Container
