import React from 'react'

import PropTypes from 'prop-types'

import Social from './social'

const Footer = (props) => {
  return (
    <>
      <div className={`footer-footer ${props.rootClassName} `}>
        <div className="footer-content">
          <div className="footer-information">
            <div className="footer-heading">
              <img
                alt={props.pastedImage_alt}
                src={props.pastedImage_src}
                className="footer-pasted-image"
              />
              <span className="footer-text">{props.text1}</span>
            </div>
            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/in/oprimojunior/"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link"
              >
                <Social
                  rootClassName="social-root-class-name"
                  className="footer-component"
                ></Social>
              </a>
              <a
                href="https://www.instagram.com/oprimojunior/"
                className="footer-link01"
              >
                <Social
                  Insider_src="/playground_assets/pastedimage-k0l6.svg"
                  rootClassName="social-root-class-name1"
                  className="footer-component1"
                ></Social>
              </a>
              <Social
                Insider_src="/playground_assets/pastedimage-ld65.svg"
                rootClassName="social-root-class-name2"
              ></Social>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <span className="footer-header">{props.Header}</span>
              <a href="https://blog.startpee.site/" className="footer-link02">
                {props.Link}
              </a>
              <span className="footer-link03">{props.Link1}</span>
              <span className="footer-link04">{props.Link2}</span>
              <span className="footer-link05">{props.Link4}</span>
            </div>
            <div className="footer-column1">
              <span className="footer-header1">{props.Header1}</span>
              <span className="footer-link06">{props.Link5}</span>
              <span className="footer-link07">{props.Link6}</span>
              <span className="footer-link08">{props.Link7}</span>
              <span className="footer-link09">{props.Link10}</span>
            </div>
          </div>
        </div>
        <span className="footer-text1">{props.text}</span>
      </div>
      <style jsx>
        {`
          .footer-footer {
            gap: var(--dl-space-space-threeunits);
            color: white;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: #000000;
          }
          .footer-content {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-information {
            gap: var(--dl-space-space-unit);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .footer-heading {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 265px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-pasted-image {
            width: 150px;
          }
          .footer-text {
            font-size: 14px;
            font-family: Poppins;
            line-height: 21px;
          }
          .footer-socials {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 265px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .footer-link {
            display: contents;
          }
          .footer-component {
            text-decoration: none;
          }
          .footer-link01 {
            display: contents;
          }
          .footer-component1 {
            text-decoration: none;
          }
          .footer-links {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            z-index: 15;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .footer-column {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .footer-header {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 30px;
          }
          .footer-link02 {
            color: #c4c4c4;
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
            text-decoration: none;
          }
          .footer-link02:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link03 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link03:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link04 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link04:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link05 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link05:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-column1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .footer-header1 {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 30px;
          }
          .footer-link06 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link06:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link07 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link07:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link08 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            text-align: center;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link08:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link09 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link09:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-text1 {
            color: #c4c4c4;
            width: 100%;
            font-size: 14px;
            max-width: 1200px;
            line-height: 21px;
          }
          .footer-root-class-name {
            background-color: #231d23;
          }
          @media (max-width: 991px) {
            .footer-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .footer-footer {
              gap: var(--dl-space-space-twounits);
            }
            .footer-content {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .footer-information {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .footer-heading {
              gap: var(--dl-space-space-halfunit);
            }
            .footer-pasted-image {
              width: 100px;
            }
            .footer-text {
              font-size: 12px;
              line-height: 18px;
            }
            .footer-socials {
              gap: var(--dl-space-space-halfunit);
            }
            .footer-links {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
              flex-direction: column;
            }
            .footer-header {
              font-size: 16px;
              line-height: 24px;
            }
            .footer-header1 {
              font-size: 16px;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .footer-links {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  Link1: 'Projetos',
  rootClassName: '',
  Link: 'blog',
  Link10: 'Portfólio',
  text1: 'Seja uma pessoa ilimitada',
  Header1: 'Serviços',
  pastedImage_src: '/playground_assets/primojunior%20%5B1%5D-200h.png',
  pastedImage_alt: 'pastedImage',
  Link7: 'Loja',
  Link2: 'Patrocinar',
  Link5: 'Criação de site',
  text: '© 2022 Oprimojunior. todos os direitos reservados.',
  Header: 'Links importante',
  Link6: 'Criação de conteúdo',
  Link4: 'Assessória',
}

Footer.propTypes = {
  Link1: PropTypes.string,
  rootClassName: PropTypes.string,
  Link: PropTypes.string,
  Link10: PropTypes.string,
  text1: PropTypes.string,
  Header1: PropTypes.string,
  pastedImage_src: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  Link7: PropTypes.string,
  Link2: PropTypes.string,
  Link5: PropTypes.string,
  text: PropTypes.string,
  Header: PropTypes.string,
  Link6: PropTypes.string,
  Link4: PropTypes.string,
}

export default Footer
