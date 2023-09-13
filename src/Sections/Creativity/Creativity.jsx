import {Container, SubTitle, Title} from '../../Components'
import './style.css'
const Creativity = () => {
  return (
    <div className='creativity-wrapper'>
      <Container>
        <section>
          <SubTitle>واجهات التطبيق</SubTitle>
          <Title>واجهات ابداعية</Title>
          <p>مجموعة من الواجهات الجذابة وسهلة الاستخدام التي تهدف لراحة <br /> المستخدم بكافة السبل اثناء استخدام التطبيق</p>
          <article className='animate-text'>
            <img src={"../../images/crai-left.png"} alt="crai-left" />
            <img className='crai-center' src={"../../images/crai-center.png"} alt="crai-center" />
            <img src={"../../images/crai-right.png"} alt="crai-right" />
          </article>
          <div className='animate-text'>
            <img src={"../../images/arrow-left.png"} alt="arrow-left" />
            <img src={"../../images/arrow-right.png"} alt="arrow-right" />
          </div>
        </section>
      </Container>
    </div>
  )
}

export default Creativity
