import {Container, SubTitle, Title} from '../../Components'
import './style.css'
const Header = () => {
  return (
    <div className='header'>
      <Container>
        <header>
           <div>
              <span className='bar' id="bar"><img src={"../../images/bars.webp"} alt="" /></span>
              <ul>
              <li ><span href="#" className='user'><img src={"../../images/user.svg"} alt="" /></span></li>
              <li><a href="#" className='science'><img src={"../../images/SA.png"} alt="SA" /> العربية</a></li>
              <li><a href="#" className='active'>الرئيسية</a></li>
              <li><a href="#">مميزات التطبيق</a></li>
              <li><a href="#">شاشة التطبيق</a></li>
              <li><a href="#">احصل على التطبيق</a></li>
              <li><a href="#">تواصل معنا</a></li>
                <li><span href="#"><img src={"../../images/logohead.svg"} alt="logohead" /></span></li>
              </ul>
           </div>
          <div className='download'>
            <SubTitle variant={"sub-title-w"}>حمله الأن</SubTitle>
            <Title variant="w-title">وقم بتوفير وقتك في البحث المطول <br /> عن أفضل الشاليهات</Title>
            <article>
              <div className='wrapper-images'>
                <span className='img-left'> <img src={"../../images/welcome.png"}  alt="" /></span>
                <span className='img-center render'><img src={"../../images/splach.png"}  alt="" /></span>
                <span className='img-right'> <img src={"../../images/filter.png"}  alt="" /></span>
              </div>
              <div className='animate-text'>
                <img className='light-up-image' src={"../../images/appstore.png"} alt="appstore" />
                <img className='light-up-image' src={"../../images/googlestore.png"} alt="googlestore" />
              </div>
            </article>
          </div>
        </header>
      </Container>
    </div>
  )
}

export default Header
