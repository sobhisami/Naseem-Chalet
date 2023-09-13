import {Container, Line, Step, SubTitle, Title} from '../../Components'
import './style.css'
const Works = () => {
  return (
    <div>
      <Container>
       <section className='works'>
         <SubTitle>آلية العمل</SubTitle>
         <Title>كيف يعمل التطبيق</Title>
         <p className='animated-para2'>
         مجموعة من الخطوات والعمليات التي تتيح للمستخدمين الاستفادة <br /> من وظائف التطبيق بكفاءة.
         </p>
         <article>
            <Step src={"../../images/open.png"} alt="open" title="افتح المتجر"/>
            <Line num="01"/>
            <span className='sub-line'> {" -------->"} </span>
            <Step src={"../../images/dwonload.png"} 
            alt="time" title="قم بتنزيل التطبيق"/>
            <Line num="02"/>
            <span className='sub-line-tow'> {" -------->"} </span>
           <Step src={"../../images/createAcount.png"} alt="dwonload" title="إنشاء حساب"/>
           <Line num="03"/>
           <span className='sub-line'> {"-------->"} </span>
           <Step src={"../../images/time.png"} alt="time" title="تمتع بوقتك"/>
         </article>
         <div className='work-img animate-text'><img src={"../../images/work.png"} alt="work" /></div>
       </section>
      </Container>
    </div>
  )
}

export default Works
