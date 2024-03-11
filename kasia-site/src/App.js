import logo from './images/logo-white.png'
function App() {
  return (
    <div>

     <a href="/landing"><img src= {logo} alt="dinner plate and knife logo with K L"></img></a>
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
      </nav>
    </div>
  );
}

export default App;
