import { About, Connect, Creativity, Features, Footer, Header ,Works} from "./Sections"

const App = () => {
  return (
    <>
    <Header/>
    <button className="top">
     <img src={'../images/arrow-right.png'} alt="" />
    </button>
    <Features/>
    <About/>
    <Works/>
    <Creativity/>
    <Connect/>
    <Footer/>
    </>
  )
}

export default App
