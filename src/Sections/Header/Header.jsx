import {Container, SubTitle, Title} from '../../Components'
import './style.css'
const Header = (e) => {
  let onClick=(e)=>{
    let ul =document.querySelector('#list')
    ul.classList.toggle("open")
  }
  return (
    <div className='header'>
      <Container>
        <header>
           <div>
              <span className='bar' onClick={onClick} id="bar"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></span>
              <ul id='list'>
              <li className='img-list' ><span href="#" className='user'><img src={"../../images/user.svg"} alt="" /></span></li>
              <li><select className='custom-select' name="" id="">
                  <option defaultValue="arabic" value="arabic">
                  العربية
                  </option>
                  <option value="english"> English
                  </option>
                  </select>
                </li>
              <li><a href="#" className='active'>الرئيسية</a></li>
              <li><a href="#about">مميزات التطبيق</a></li>
              <li><a href="#creativity">شاشة التطبيق</a></li>
              <li><a href="#footer">احصل على التطبيق</a></li>
              <li><a href="#contact">تواصل معنا</a></li>
                <li className='img-list'><span href="#"><img src={"../../images/logohead.svg"} alt="logohead" /></span></li>
              </ul>
           </div>
          <div className='download'>
            <SubTitle variant={"sub-title-w"}>حمله الأن</SubTitle>
            <Title variant="w-title">وقم بتوفير وقتك في البحث المطول <br /> عن أفضل الشاليهات</Title>
              <div className='download-logos'>
                <a href="#"><img className='point' src={"../../images/appstore.png"} alt="appstore" /></a>
                <a href="#"> <img className='point' src={"../../images/googlestore.png"} alt="googlestore" /></a>
              </div>
            <article>
              <div className='wrapper-images'>
                <span className='img-left'> <img src={"../../images/welcome.png"}  alt="" /></span>
                <span className='img-center'><img src={"../../images/splach.png"}  alt="" /></span>
                <span className='img-right'> <img src={"../../images/filter.png"}  alt="" /></span>
              </div>
              <div className='animate-text'>
                {/* <img className='light-up-image' src={"../../images/appstore.png"} alt="appstore" />
                <img className='light-up-image' src={"../../images/googlestore.png"} alt="googlestore" /> */}
              </div>
            </article>
          </div>
        </header>
      </Container>
    </div>
  )
}

export default Header
