import logo from '../assets/logo.svg';

function Navbar() {
  return (
    <header>        
        <picture>
            <img src={logo} alt="Logo" />
        </picture>

        <div>
            <ul className='flex space-x-3'>
                <li>
                    <a href="">Features</a>
                </li>
                <li>
                    <a href="">Team</a>
                </li>
                <li>
                    <a href="">Sign In</a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar