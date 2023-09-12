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
              <li><a href="#" className='user'><img src={"../../images/user.svg"} alt="" /></a></li>
              <li ><a href="#" className='science'><img src={"../../images/SA.png"} alt="" /> العربية</a></li>
              <li><a href="#" className='active'>الرئيسية</a></li>
              <li><a href="#">مميزات التطبيق</a></li>
              <li><a href="#">شاشة التطبيق</a></li>
              <li><a href="#">احصل على التطبيق</a></li>
              <li><a href="#">تواصل معنا</a></li>
                <li><a href="#"><img src={"../../images/logohead.svg"} alt="" /></a></li>
              </ul>
           </div>
          <div className='download'>
            <SubTitle variant={"sub-title-w"}>حمله الأن</SubTitle>
            <Title variant="w-title">وقم بتوفير وقتك في البحث المطول <br /> عن أفضل الشاليهات</Title>
            <article>
              <div>
                <span className='img-left'> <img src={"../../images/welcome.png"}  alt="" /></span>
                <span className='img-center'><img src={"../../images/splach.png"}  alt="" /></span>
                <span className='img-right'> <img src={"../../images/filter.png"}  alt="" /></span>
              </div>
              <div>
                <img src={"../../images/appstore.png"} alt="appstore" />
                <img src={"../../images/googlestore.png"} alt="googlestore" />
              </div>
            </article>
          </div>
        </header>
      </Container>
    </div>
  )
}

export default Header
