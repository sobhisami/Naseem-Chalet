import {Container, Title} from '../../Components'
import './style.css'
const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <footer>
          <Title variant="w-title">التطبيق متاح للتنزيل والتثبيت من متجر التطبيقات</Title>
          <p>للاستفادة من وظائف وخدمات التطبيق على جهازك المحمول قم بتحميله من المتجر الخاص بك حسب نوع نظام <br /> هاتفك وتمتع بعدها بخدمات التطبيق بكل أريحية</p>
          <div className='store animate-text'>
            <img  src={"../../images/googlestore.png"} alt="googlestore" />
            <img  src={"../../images/appstore.png"} alt="appstore" />
          </div>
          <hr />
          <article>
            <div className='animate-text'>
              <a href=""><img src={"../../images/Twitter.png"} alt="Twitter" /></a>
              <a href=""><img src={"../../images/Linkedin.png"} alt="Linkedin" /></a>
              <a href=""><img src={"../../images/Facebook.png"} alt="Facebook" /></a>
            </div>
            <div className='animate-text'>
              <span dir='ltr'>© 2023 <span>Tweet Tech</span>. جميع الحقوق محفوظة لدى. </span>
              <img src={"../../images/logohead.svg"} alt="" />
            </div>
          </article>
        </footer>
      </Container>
    </div>
  )
}

export default Footer
