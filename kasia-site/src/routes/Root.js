import logo from '/Users/emilydaniels/Development/code/post-grad/kasia-site/src/images/logo-white.png'
import { Outlet, Link, NavLink, useNavigation } from 'react-router-dom';


function Root() {
const navigation = useNavigation();

  return (
    <div id="topbar">
        <img src={logo} alt="dinner play and knife logo with K L"/>
    <nav>
        <NavLink>
            <Link to={'about'}>ABOUT</Link>
        </NavLink>
        <NavLink>
            <Link to={'gallery'}>GALLERY</Link>
        </NavLink>
        <NavLink>
            <Link to={'menus'}>MENUS</Link>
        </NavLink>
        <NavLink>
            <Link to={'contact'}>CONTACT</Link>
        </NavLink>
    </nav>
    <div id="outlet" className={
        navigation.state === 'loading' ? 'loading' : ''
    }>
        <Outlet />

    </div>
    

     {/* <a href="/landing"><img src= {logo} alt="dinner plate and knife logo with K L"></img></a>
      <nav>
      <button>
        <a href="/contact">contact</a>
        </button>
        <button>
        <a href="/about">about</a>
        </button>
        <button>
        <a href="/gallery">gallery</a>
        </button>
        <button>
        <a href="/menus">menus</a>
        </button>
      </nav> */}
    </div>
  );
}

export default Root;
