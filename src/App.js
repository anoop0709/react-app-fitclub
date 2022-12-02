import './App.css';
import Footer from './Componenets/Footer/Footer';
import Hero from './Componenets/Hero/Hero';
import Join from './Componenets/Join/Join';
import Plans from './Componenets/Plans/Plans';
import Programs from './Componenets/Programs/Programs';
import Reasons from './Componenets/Reasons/Reasons';
import Testimonial from './Componenets/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
         <Hero/>
         <Programs/>
         <Reasons/>
         <Plans/>
         <Testimonial/>
         <Join/>
         <Footer/>
    </div>
  );
}

export default App;
