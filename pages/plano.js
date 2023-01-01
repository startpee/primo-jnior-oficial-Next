import React from 'react'
import Head from 'next/head'

import Footer from '../components/footer'

const Plano = (props) => {
  return (
    <>
      <div className="plano-container">
        <Head>
          <title>plano - O Primo Júnior | Sabedoria jovem</title>
          <meta
            name="description"
            content="meus vídeos pode te ajudar a despertar o seu potencial como pessoa.\n\n"
          />
          <meta
            property="og:title"
            content="plano - O Primo Júnior | Sabedoria jovem"
          />
          <meta
            property="og:description"
            content="meus vídeos pode te ajudar a despertar o seu potencial como pessoa.\n\n"
          />
        </Head>
        <h1 className="plano-text">Ativar o instagram shop</h1>
        <div className="plano-content">
          <iframe
            src="https://www.youtube.com/embed/_JxAK-KXJD8"
            allowFullScreen
            className="plano-iframe"
          ></iframe>
          <div className="plano-video-container">
            <div className="plano-heading-container">
              <div className="plano-explore"></div>
            </div>
          </div>
        </div>
        <a
          href="https://chatting.page/u4sq7jfo91vvwmcnblgfvwwq9wshhxi1"
          className="plano-link button"
        >
          Eu quero
        </a>
        <Footer rootClassName="footer-root-class-name4"></Footer>
      </div>
      <style jsx>
        {`
          .plano-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #0a0a0a;
          }
          .plano-text {
            color: rgb(255, 255, 255);
            font-size: 3em;
            margin-top: var(--dl-space-space-fourunits);
          }
          .plano-content {
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
          .plano-iframe {
            width: 681px;
            height: 514px;
            margin-top: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .plano-video-container {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .plano-heading-container {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .plano-explore {
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
          .plano-explore:hover {
            color: rgba(255, 255, 255, 0.5);
            border-color: rgba(255, 255, 255, 0.3);
          }
          .plano-link {
            color: var(--dl-color-gray-white);
            width: 255px;
            height: 76px;
            font-size: 24px;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            line-height: 2;
            border-color: #ffffff;
            border-width: 3px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: rgb(23, 22, 32);
          }
          @media (max-width: 991px) {
            .plano-content {
              gap: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .plano-content {
              width: 100%;
            }
            .plano-iframe {
              width: 713px;
              height: 545px;
            }
            .plano-video-container {
              gap: var(--dl-space-space-threeunits);
            }
            .plano-link {
              color: var(--dl-color-gray-white);
              font-size: 24px;
              text-align: center;
              text-decoration: none;
              background-color: rgb(23, 22, 32);
            }
          }
          @media (max-width: 479px) {
            .plano-text {
              font-size: 2em;
            }
            .plano-content {
              width: 384px;
              height: 312px;
              margin-top: var(--dl-space-space-twounits);
              margin-right: 0px;
            }
            .plano-iframe {
              width: 363px;
              height: 230px;
            }
            .plano-link {
              color: var(--dl-color-gray-white);
              font-size: 24px;
              line-height: 2;
              text-decoration: none;
              background-color: rgb(23, 22, 32);
            }
          }
        `}
      </style>
    </>
  )
}

export default Plano
