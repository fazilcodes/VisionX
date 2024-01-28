import './navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="pattern">
            <div className="circle white"></div>
            <div className="circle gray"></div>
            <div className="circle primary"></div>
        </div>

        <p className='logo'><span>V</span>ision<span>X</span></p>

        <a className='github' href="https://github.com/fazilcodes" >GITHUB</a>
    </nav>
  )
}

export default Navbar