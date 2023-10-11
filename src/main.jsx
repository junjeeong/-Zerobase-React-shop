import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import './main.css'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <input type='checkbox' id='side-menu' className='drawer-toggle'></input>
    <section className='drawer-content'>
      {/* Do Something!! */}
      <Nav className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content"></Nav>
      <Main className='main pt-16'></Main>
      <Footer className='p-10 footer bg-base-200 text-base-content footer-center'></Footer>
    </section>
    <div className='drawer-side'>
      <label htmlFor="side-menu" className="drawer-overlay"></label>
      <ul className="menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100">
        <li>
          <a className="!text-gray-700 active:!text-white dark:!text-white" href="/fashion">패션</a>
        </li>
        <li>
          <a className="!text-gray-700 active:!text-white dark:!text-white" href="/accessory">액세서리</a>
        </li>
        <li>
          <a className="!text-gray-700 active:!text-white dark:!text-white" href="/digital">디지털</a>
        </li>
      </ul>
    </div>
  </React.StrictMode>,
)
