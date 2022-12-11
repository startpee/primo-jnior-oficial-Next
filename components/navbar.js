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
              <a href="https://primojunior.com/" className="navbar-link">
                <img
                  alt={props.Branding_alt}
                  src={props.Branding_src}
                  className="navbar-finbest"
                />
              </a>
            </div>
            <div className="navbar-links">
              <a href="https://primojunior.com/" className="navbar-link1 link">
                {props.Link_1}
              </a>
              <a href="https://primojunior.com/" className="navbar-link2 link">
                {props.Link_2}
              </a>
              <a href="https://primojunior.com/" className="navbar-link3 link">
                {props.Link_3}
              </a>
            </div>
          </div>
          <div className="navbar-quick-actions">
            <a
              href="https://chatting.page/u4sq7jfo91vvwmcnblgfvwwq9wshhxi1"
              className="navbar-link4"
            >
              <div className="navbar-sign-up-btn">
                <span className="navbar-sign-up">Desenvolvimento pessoal</span>
              </div>
            </a>
            <a
              href="https://chatting.page/u4sq7jfo91vvwmcnblgfvwwq9wshhxi1"
              className="navbar-link5"
            >
              <div className="navbar-sign-up-btn1">
                <span className="navbar-sign-up1">Negócios</span>
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
              <a className="navbar-link6">{props.text1}</a>
            </Link>
            <div className="navbar-buttons">
              <Link href="/">
                <a className="navbar-link7">
                  <div className="navbar-btn">
                    <span className="navbar-text">{props.text131}</span>
                  </div>
                </a>
              </Link>
              <a
                href="https://chatting.page/u4sq7jfo91vvwmcnblgfvwwq9wshhxi1"
                className="navbar-link8"
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
          .navbar-link1 {
            text-decoration: none;
          }
          .navbar-link2 {
            text-decoration: none;
          }
          .navbar-link3 {
            text-decoration: none;
          }
          .navbar-quick-actions {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-link4 {
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
            background-color: #000000;
          }
          .navbar-sign-up-btn:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .navbar-sign-up {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 500;
          }
          .navbar-link5 {
            display: contents;
          }
          .navbar-sign-up-btn1 {
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
          .navbar-sign-up-btn1:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .navbar-sign-up1 {
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
          .navbar-link6 {
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
          .navbar-link7 {
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
          .navbar-link8 {
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
            .navbar-sign-up-btn {
              display: none;
            }
            .navbar-sign-up-btn1 {
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
            .navbar-branding {
              margin-left: var(--dl-space-space-twounits);
              margin-right: var(--dl-space-space-twounits);
            }
            .navbar-mobile {
              width: 320px;
              display: flex;
              align-items: center;
              margin-left: 0px;
              padding-top: 9px;
              margin-right: 0px;
              padding-left: 7px;
              padding-right: 22px;
              padding-bottom: 84px;
              justify-content: center;
            }
            .navbar-top {
              margin-top: var(--dl-space-space-unit);
              margin-left: 10px;
              margin-right: 10px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-image {
              margin-left: var(--dl-space-space-threeunits);
              margin-right: var(--dl-space-space-threeunits);
            }
            .navbar-icon {
              margin-right: var(--dl-space-space-unit);
            }
            .navbar-links1 {
              align-self: center;
              align-items: center;
              margin-left: 9px;
              margin-right: 9px;
            }
            .navbar-link6 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-buttons {
              padding-left: 20px;
              padding-right: 20px;
            }
            .navbar-btn {
              padding: var(--dl-space-space-twounits);
              justify-content: center;
              background-color: #231d23;
            }
            .navbar-text {
              color: #ffffff;
            }
            .navbar-btn1 {
              padding: var(--dl-space-space-twounits);
              justify-content: center;
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
  text1: 'Portfólio',
  Branding_src: '/playground_assets/novo%20projeto%20%5B3%5D-1500h.png',
  rootClassName: '',
  Link_1: 'inicio',
  text131: 'Desenvolvimento pessoal',
  image_alt: 'image',
  pastedImage_src: '/playground_assets/pastedimage-8o98.svg',
  text1311: 'Negócios',
  Link_2: 'Sobre',
  pastedImage_alt: 'pastedImage',
  image_src: '/playground_assets/novo%20projeto%20%5B3%5D-1500h.png',
  Branding_alt: 'pastedImage',
}

Navbar.propTypes = {
  Link_3: PropTypes.string,
  text1: PropTypes.string,
  Branding_src: PropTypes.string,
  rootClassName: PropTypes.string,
  Link_1: PropTypes.string,
  text131: PropTypes.string,
  image_alt: PropTypes.string,
  pastedImage_src: PropTypes.string,
  text1311: PropTypes.string,
  Link_2: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  image_src: PropTypes.string,
  Branding_alt: PropTypes.string,
}

export default Navbar
