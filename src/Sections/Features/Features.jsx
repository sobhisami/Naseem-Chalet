import {Container, SubTitle, Title} from '../../Components'
import './style.css'
const Features = () => {
  return (
    <div>
      <Container>
        <section className='features'>
          <article>
            <SubTitle>مميزات التطبيق</SubTitle>
            <Title>مميزات رائعة</Title>
            <p>
            تطبيقنا يقدم مجموعة متنوعة من المميزات المبتكرة التي تلبي احتياجات مختلفة. سواء كنت تبحث عن طرق <br /> فعالة للبحث، أو تسعى للحصول على معلومات دقيقة وموثوقة، أو ترغب في توفير وقتك
            </p>
          </article>
          <article>
            <div className='sub-features'>
              <div className='features-design'>
                <span>تصميم مميز</span>
                <img src={"../../images/star.png"} alt="star" />
              </div>
              <div>
                <span>سهل الإستخدام</span>
                <img src={"../../images/easy.png"} alt="easy" />
              </div>
              <div className='features-design'>
                <span>قليل الحجم</span>
                <img src={"../../images/size.png"} alt="size" />
              </div>
              <div>
                <span>جودة عالية ودقة</span>
                <img src={"../../images/hightQ.png"} alt="hightQ" />
              </div>
            </div>
            <div className='logo-feature'>
              <img src={"../../images/feature.png"} alt="" />
            </div>
          </article>
        </section>
      </Container>
    </div>
  )
}

export default Features
