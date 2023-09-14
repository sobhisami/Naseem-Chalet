import {Container, SubTitle, Title} from '../../Components'
import './style.css'
const Connect = () => {
  return (
    <div>
      <Container>
        <section className='connect' id="contact">
          <SubTitle>فورم التواصل</SubTitle>
          <Title>تواصل معنا</Title>
          <p>على استعداد دائم للاستماع إلى ملاحظات واقتراحات العملاء <br /> أو المستخدمين</p>
          <form>
            <div className='animate-text'>
              <label htmlFor="name">الاسم</label>
              <input type="text"  id='name'/>
            </div>
            <div className='animate-text'>
              <label htmlFor="title">عنوان الموضوع</label>
              <input type="text" id='title' />
            </div>
            <div className='animate-text'>
              <label htmlFor="subject">الموضوع</label>
              <input type="text" id='subject' />
            </div>
            <div className='animate-text animation'>
              <button type='submit'> تأكيد وإرسال </button>
              <span> <img src={"../../images/submit.png"} alt="submit-arrow" /></span>
            </div>
          </form>
        </section>
      </Container>
    </div>
  )
}

export default Connect
