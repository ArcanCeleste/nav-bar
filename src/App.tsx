import { useState } from 'react'
import './App.css'
import { fbConfig } from './firebase/firebase'

function App() {
  fbConfig
  const [mobile, setMobile] = useState(false)
  const openMobileMenu = ()=> {
    setMobile(!mobile)
  }
  const bodyElement = document.querySelector('body') as HTMLBodyElement;
  window.addEventListener('resize', (e)=> {
    let windowElement = e.target as Window
    if (windowElement.innerWidth > 590 ) {
      setMobile(false)
    }
  })
  return (
    <div className='container'>
      <header className='headerSite'>
        <div className='headerContent'>
          <h1 className='titleSite'><a href="/">NavBar</a></h1>
          <nav className='menuArea'>
            <ul className='menu'>
              <li className='menuOption'><a href="/">Home</a></li>
              <li className='menuOption'><a href="/">Projects</a></li>
              <li className='menuOption'><a href="/">About Me</a></li>
            </ul>
          </nav>
          <div className="socialMediaArea">
            <a href="https://www.facebook.com/guilherme.depaula.969/" className='socialMediaItem'>
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            </a>
            <a href="https://github.com/ArcanCeleste?tab=repositories" className='socialMediaItem'>
              <img src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/guilherme-de-paula-96947a251/" className='socialMediaItem'>
              <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIn" />
            </a>
          </div>        
          <div className='mobileMenuIcon'>
            <button onClick={openMobileMenu}><img src="https://cdn-icons-png.flaticon.com/512/56/56763.png" alt="Menu" /></button>
          </div>
        </div>
        {mobile && 
        <nav className='menuMobileArea'>
          <ul className='menuMobile'>
            <li className='menuMobileOption'><a href="/">Home</a></li>
            <li className='menuMobileOption'><a href="/">Projects</a></li>
            <li className='menuMobileOption'><a href="/">About Me</a></li>
          </ul>
          <div className="socialMediaAreaMobile">
            <a href="https://www.facebook.com/guilherme.depaula.969/" className='socialMediaItem'>
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            </a>
            <a href="https://github.com/ArcanCeleste?tab=repositories" className='socialMediaItem'>
              <img src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/guilherme-de-paula-96947a251/" className='socialMediaItem'>
              <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIn" />
            </a>
          </div>
        </nav>
        }
      </header>
      <main className='mainContent'>
        <h1>Example Title</h1>
        <p>Example simple text.</p>
      </main>
      <footer className='footerSite'>
        <small>Created By Guilherme de Paula da Silva</small>
      </footer>
    </div>
  )
}

export default App
