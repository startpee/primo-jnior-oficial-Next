import React from 'react'
import Head from 'next/head'

import Footer from '../components/footer'

const Patrocinio = (props) => {
  return (
    <>
      <div className="patrocinio-container">
        <Head>
          <title>patrocinio - O Primo Júnior | Sabedoria jovem</title>
          <meta
            name="description"
            content="meus vídeos pode te ajudar a despertar o seu potencial como pessoa.\n\n"
          />
          <meta
            property="og:title"
            content="patrocinio - O Primo Júnior | Sabedoria jovem"
          />
          <meta
            property="og:description"
            content="meus vídeos pode te ajudar a despertar o seu potencial como pessoa.\n\n"
          />
        </Head>
        <div className="patrocinio-content">
          <iframe
            src="https://www.youtube.com/embed/tk6ZiAca-8Y"
            allowFullScreen
            className="patrocinio-iframe"
          ></iframe>
          <div className="patrocinio-video-container">
            <div className="patrocinio-heading-container">
              <div className="patrocinio-explore"></div>
            </div>
          </div>
        </div>
        <a
          href="https://chatting.page/u4sq7jfo91vvwmcnblgfvwwq9wshhxi1"
          className="patrocinio-link button"
        >
          Patrocinar
        </a>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .patrocinio-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #0a0a0a;
          }
          .patrocinio-content {
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
          .patrocinio-iframe {
            width: 681px;
            height: 514px;
            margin-top: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .patrocinio-video-container {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .patrocinio-heading-container {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .patrocinio-explore {
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
          .patrocinio-explore:hover {
            color: rgba(255, 255, 255, 0.5);
            border-color: rgba(255, 255, 255, 0.3);
          }
          .patrocinio-link {
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
            .patrocinio-content {
              gap: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .patrocinio-content {
              width: 100%;
            }
            .patrocinio-iframe {
              width: 713px;
              height: 545px;
            }
            .patrocinio-video-container {
              gap: var(--dl-space-space-threeunits);
            }
            .patrocinio-link {
              color: var(--dl-color-gray-white);
              font-size: 24px;
              text-align: center;
              text-decoration: none;
              background-color: rgb(23, 22, 32);
            }
          }
          @media (max-width: 479px) {
            .patrocinio-content {
              width: 384px;
              height: 312px;
              margin-top: var(--dl-space-space-twounits);
              margin-right: 0px;
            }
            .patrocinio-iframe {
              width: 363px;
              height: 230px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Patrocinio
