import { About, Connect, Creativity, Features, Footer, Header ,Works} from "./Sections"

const App = () => {
  return (
    <>
    <Header/>
    <button class="top">
     <img src={'../images/arrow-left.png'} alt="" />
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
