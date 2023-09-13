import {Container, SubTitle, Title} from '../../Components'
import './style.css'
const About = () => {
  return (
    <div className='about-wrapper'>
      <Container variant="container-small">
        <section className='about'>
         <img className='animate-text animation' src={"../../images/vidue.png"} alt="vidue" />
         <article className='animate-text'>
           <SubTitle variant="sub-title-w">فيديو التطبيق </SubTitle>
           <Title variant="w-title">فيديو تعريفي عن التطبيق </Title>
           <p>
           يعمل الفيديو التعريفي على استعراض ملامح التطبيق وكيفية استخدامه <br /> بشكل سهل وفعال
           </p>
         </article>
         <img className='animate-text light-image' src={"../../images/interviwe.png"} alt="interviwe" />
        </section>
      </Container>
    </div>
  )
}

export default About
