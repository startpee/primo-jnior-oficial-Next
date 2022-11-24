import React from 'react'
import Link from 'next/link'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar-navbar ${props.rootClassName} `}>
        <div className="navbar-desktop">
          <div className="navbar-main">
            <div className="navbar-branding">
              <Link href="/">
                <a className="navbar-link">
                  <img
                    alt={props.Branding_alt}
                    src={props.Branding_src}
                    className="navbar-finbest"
                  />
                </a>
              </Link>
            </div>
            <div className="navbar-links">
              <a href="https://primojunior.com/" className="navbar-link01 link">
                {props.Link_1}
              </a>
              <a href="https://primojunior.com/" className="navbar-link02 link">
                {props.Link_2}
              </a>
              <a href="https://primojunior.com/" className="navbar-link03 link">
                {props.Link_3}
              </a>
            </div>
          </div>
          <div className="navbar-quick-actions">
            <a
              href="https://chatting.page/u4sq7jfo91vvwmcnblgfvwwq9wshhxi1"
              className="navbar-log-in link"
            >
              Contato
            </a>
            <a
              href="https://chatting.page/u4sq7jfo91vvwmcnblgfvwwq9wshhxi1"
              className="navbar-link04"
            >
              <div className="navbar-sign-up-btn">
                <span className="navbar-sign-up">Patrocinar</span>
              </div>
            </a>
            <img
              id="open-mobile-menu"
              alt={props.pastedImage_alt}
              src={props.pastedImage_src}
              className="navbar-hamburger-menu"
            />
          </div>
        </div>
        <div id="mobile-menu" className="navbar-mobile">
          <div className="navbar-top">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="navbar-image"
            />
            <svg
              id="close-mobile-menu"
              viewBox="0 0 1024 1024"
              className="navbar-icon"
            >
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
          <div className="navbar-links1">
            <Link href="/">
              <a className="navbar-link05">{props.text1}</a>
            </Link>
            <Link href="/">
              <a className="navbar-link06">{props.text11}</a>
            </Link>
            <Link href="/">
              <a className="navbar-link07">{props.text12}</a>
            </Link>
            <a
              href="https://chatting.page/u4sq7jfo91vvwmcnblgfvwwq9wshhxi1"
              target="_blank"
              rel="noreferrer noopener"
              className="navbar-link08"
            >
              {props.text13}
            </a>
            <div className="navbar-buttons">
              <Link href="/">
                <a className="navbar-link09">
                  <div className="navbar-btn">
                    <span className="navbar-text">{props.text131}</span>
                  </div>
                </a>
              </Link>
              <a
                href="https://chatting.page/u4sq7jfo91vvwmcnblgfvwwq9wshhxi1"
                className="navbar-link10"
              >
                <div className="navbar-btn1">
                  <span className="navbar-text1">{props.text1311}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
          ></DangerousHTML>
        </div>
      </nav>
      <style jsx>
        {`
          .navbar-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .navbar-desktop {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-main {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-branding {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-link {
            display: contents;
          }
          .navbar-finbest {
            width: 148px;
            height: 37px;
            text-decoration: none;
          }
          .navbar-links {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            padding-top: 12px;
            border-radius: 6px;
            flex-direction: row;
            padding-bottom: 12px;
            justify-content: center;
          }
          .navbar-link01 {
            text-decoration: none;
          }
          .navbar-link02 {
            text-decoration: none;
          }
          .navbar-link03 {
            text-decoration: none;
          }
          .navbar-quick-actions {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-log-in {
            text-decoration: none;
          }
          .navbar-link04 {
            display: contents;
          }
          .navbar-sign-up-btn {
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            text-decoration: none;
            background-color: #ffaf00;
          }
          .navbar-sign-up-btn:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .navbar-sign-up {
            font-style: normal;
            font-weight: 500;
          }
          .navbar-hamburger-menu {
            width: 20px;
            height: 12px;
            display: none;
          }
          .navbar-mobile {
            gap: var(--dl-space-space-fourunits);
            top: 0px;
            left: 0px;
            width: 100vw;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-threeunits);
            z-index: 200;
            position: fixed;
            transform: translateX(100%);
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: column;
            background-color: #ffffff;
          }
          .navbar-top {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-image {
            width: 150px;
            object-fit: cover;
          }
          .navbar-icon {
            width: 28px;
            height: 28px;
          }
          .navbar-links1 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .navbar-link05 {
            text-decoration: none;
          }
          .navbar-link06 {
            text-decoration: none;
          }
          .navbar-link07 {
            text-decoration: none;
          }
          .navbar-link08 {
            text-decoration: none;
          }
          .navbar-buttons {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .navbar-link09 {
            display: contents;
          }
          .navbar-btn {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .navbar-text {
            font-style: normal;
            font-weight: 500;
          }
          .navbar-link10 {
            display: contents;
          }
          .navbar-btn1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .navbar-text1 {
            font-style: normal;
            font-weight: 500;
          }

          @media (max-width: 991px) {
            .navbar-navbar {
              align-items: center;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .navbar-links {
              display: none;
            }
            .navbar-log-in {
              display: none;
            }
            .navbar-sign-up-btn {
              display: none;
            }
            .navbar-hamburger-menu {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .navbar-navbar {
              align-items: center;
            }
            .navbar-mobile {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .navbar-mobile {
              width: 410px;
              display: flex;
              padding-right: var(--dl-space-space-unit);
            }
            .navbar-links1 {
              align-items: center;
            }
            .navbar-btn {
              background-color: #231d23;
            }
            .navbar-text {
              color: #ffffff;
            }
            .navbar-btn1 {
              background-color: #ffaf00;
            }
            .navbar-root-class-name {
              margin-bottom: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  Link_3: 'Projetos',
  text1: 'Projetos',
  text12: 'Serviços',
  Branding_src: '/playground_assets/novo%20projeto%20%5B3%5D-1500h.png',
  rootClassName: '',
  Link_1: 'inicio',
  text131: 'Contratar',
  image_alt: 'image',
  pastedImage_src: '/playground_assets/pastedimage-8o98.svg',
  text1311: 'Patrocinar',
  text13: 'Contato',
  Link_2: 'Sobre',
  pastedImage_alt: 'pastedImage',
  image_src: '/playground_assets/novo%20projeto%20%5B3%5D-1500h.png',
  Branding_alt: 'pastedImage',
  text11: 'Rede social',
}

Navbar.propTypes = {
  Link_3: PropTypes.string,
  text1: PropTypes.string,
  text12: PropTypes.string,
  Branding_src: PropTypes.string,
  rootClassName: PropTypes.string,
  Link_1: PropTypes.string,
  text131: PropTypes.string,
  image_alt: PropTypes.string,
  pastedImage_src: PropTypes.string,
  text1311: PropTypes.string,
  text13: PropTypes.string,
  Link_2: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  image_src: PropTypes.string,
  Branding_alt: PropTypes.string,
  text11: PropTypes.string,
}

export default Navbar
