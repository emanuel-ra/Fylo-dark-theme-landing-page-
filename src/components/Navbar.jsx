import logo from '../assets/logo.svg';

function Navbar() {
  return (
    <header>        
        <picture>
            <img src={logo} alt="Logo" className='w-1/2 lg:w-full' />
        </picture>

        <div>
            <ul className='flex space-x-2 lg:space-x-3'>
                <li className='hover:underline'>
                    <a href="#Features">Features</a>
                </li>
                <li className='hover:underline'>
                    <a href="#Team">Team</a>
                </li>
                <li className='hover:underline'>
                    <a href="#Sign In">Sign In</a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar