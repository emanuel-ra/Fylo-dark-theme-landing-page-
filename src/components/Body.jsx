import Intro from './body/Intro'
import Offers from './body/Offers'
import Benefits from './body/Benefits'
import Testimonials from './body/Testimonials'
import GetAccess from './body/GetAccess'
import Footer from './Footer'


function Body() {
  return (
    <div className='mx-auto'>
      <Intro/>
      <Offers/>
      <Benefits />
      <Testimonials />
      <GetAccess />
      <Footer/>
    </div>
  )
}

export default Body