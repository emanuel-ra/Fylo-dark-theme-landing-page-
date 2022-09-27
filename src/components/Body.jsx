import Intro from './body/Intro'
import Offers from './body/Offers'
import Benefits from './body/Benefits'
import Testimonials from './body/Testimonials'

function Body() {
  return (
    <div className='mx-auto'>
      <Intro/>
      <Offers/>
      <Benefits />
      <Testimonials />
    </div>
  )
}

export default Body