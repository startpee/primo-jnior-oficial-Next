import React from 'react'
import Head from 'next/head'

import Footer from '../components/footer'

const Ecommerce = (props) => {
  return (
    <>
      <div className="ecommerce-container">
        <Head>
          <title>Ecommerce - O Primo Júnior | Sabedoria jovem</title>
          <meta
            name="description"
            content="meus vídeos pode te ajudar a despertar o seu potencial como pessoa.\n\n"
          />
          <meta
            property="og:title"
            content="Ecommerce - O Primo Júnior | Sabedoria jovem"
          />
          <meta
            property="og:description"
            content="meus vídeos pode te ajudar a despertar o seu potencial como pessoa.\n\n"
          />
        </Head>
        <div className="ecommerce-content">
          <iframe
            src="https://www.youtube.com/embed/tk6ZiAca-8Y"
            allowFullScreen
            className="ecommerce-iframe"
          ></iframe>
          <div className="ecommerce-video-container">
            <div className="ecommerce-heading-container">
              <div className="ecommerce-explore"></div>
            </div>
          </div>
        </div>
        <a
          href="https://meet.sendinblue.com/startpee?t=0&amp;l=ajuda-no-e-commerce"
          className="ecommerce-link button"
        >
          Agendar agora
        </a>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .ecommerce-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #0a0a0a;
          }
          .ecommerce-content {
            gap: var(--dl-space-space-fiveunits);
            width: 688px;
            height: 688px;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            background-color: #0a0a0a;
          }
          .ecommerce-iframe {
            width: 681px;
            height: 514px;
            margin-top: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .ecommerce-video-container {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .ecommerce-heading-container {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .ecommerce-explore {
            color: #fff;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            cursor: pointer;
            display: none;
            transition: 0.3s;
            align-items: flex-start;
            border-color: #ffffff;
            border-width: 0px;
            flex-direction: column;
            padding-bottom: 4px;
            border-bottom-width: 1px;
          }
          .ecommerce-explore:hover {
            color: rgba(255, 255, 255, 0.5);
            border-color: rgba(255, 255, 255, 0.3);
          }
          .ecommerce-link {
            color: var(--dl-color-gray-white);
            width: 215px;
            height: 58px;
            font-size: 24px;
            margin-top: var(--dl-space-space-threeunits);
            border-color: #ffffff;
            border-width: 3px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-threeunits);
            text-decoration: none;
            background-color: rgb(23, 22, 32);
          }
          @media (max-width: 991px) {
            .ecommerce-content {
              gap: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .ecommerce-content {
              width: 100%;
            }
            .ecommerce-iframe {
              width: 0px;
              height: 50%;
            }
            .ecommerce-video-container {
              gap: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .ecommerce-content {
              width: 384px;
              height: 312px;
              margin-top: var(--dl-space-space-twounits);
              margin-right: 0px;
            }
            .ecommerce-iframe {
              width: 363px;
              height: 230px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Ecommerce
