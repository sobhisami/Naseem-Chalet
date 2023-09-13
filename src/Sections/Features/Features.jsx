import {Container, SubTitle, Title} from '../../Components'
import './style.css'
const Features = () => {
  return (
    <div>
      <Container>
        <section className='features'>
          <article className='animate-text'>
            <SubTitle>مميزات التطبيق</SubTitle>
            <Title>مميزات رائعة</Title>
            <p className='animated-para'>
            تطبيقنا يقدم مجموعة متنوعة من المميزات المبتكرة التي تلبي احتياجات مختلفة. سواء كنت تبحث عن طرق <br /> فعالة للبحث، أو تسعى للحصول على معلومات دقيقة وموثوقة، أو ترغب في توفير وقتك
            </p>
          </article>
          <article>
            <div className='sub-features animate-text'>
                <div className='features-design animation'>
                  <span>تصميم مميز</span>
                  <img src={"../../images/star.png"} alt="star" />
                </div>
                <div className='animation'>
                  <span>سهل الإستخدام</span>
                  <img src={"../../images/easy.png"} alt="easy" />
                </div>
                <div className='features-design animation'>
                  <span>قليل الحجم</span>
                  <img src={"../../images/size.png"} alt="size" />
                </div>
                <div className='animation'>
                  <span>جودة عالية ودقة</span>
                  <img src={"../../images/hightQ.png"} alt="hightQ" />
                </div>
            </div>
            <div className='logo-feature animate-text'>
              <img src={"../../images/feature.png"} alt="" />
            </div>
          </article>
        </section>
      </Container>
    </div>
  )
}

export default Features
