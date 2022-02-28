import './style.css';
import Header from '../../components/header/Header';
import Top from '../../components/topbackgroundcontent/Top'
import Reputation from '../../components/reputation/Reputation';
import About from '../../components/about/About';
import Services from '../../components/services/Services';
import Experience from '../../components/experience/Experience';
import Consultation from '../../components/consultation/Consultation';
import Project from '../../components/project/Project';
import Form from '../../components/form/Form';
import Footer from '../../components/footer/Footer';
function Home(){
    return(
        <div>
             <Header />
             <Top />
             <Reputation />
             <About />
             <Services />
             <Experience />
             <Consultation />
             <Project />
             <Form />
             <Footer />
        </div>
    )
}

export default Home;