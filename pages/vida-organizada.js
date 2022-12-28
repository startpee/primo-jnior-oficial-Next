import React from 'react'
import Head from 'next/head'

const VidaOrganizada = (props) => {
  return (
    <>
      <div className="vida-organizada-container">
        <Head>
          <title>vida-organizada - O Primo Júnior | Sabedoria jovem</title>
          <meta
            name="description"
            content="meus vídeos pode te ajudar a despertar o seu potencial como pessoa.\n\n"
          />
          <meta
            property="og:title"
            content="vida-organizada - O Primo Júnior | Sabedoria jovem"
          />
          <meta
            property="og:description"
            content="meus vídeos pode te ajudar a despertar o seu potencial como pessoa.\n\n"
          />
        </Head>
        <div className="vida-organizada-content">
          <iframe
            src="https://www.youtube.com/embed/_Z4u2gjMdUY"
            allowFullScreen
            className="vida-organizada-iframe"
          ></iframe>
          <div className="vida-organizada-video-container">
            <div className="vida-organizada-heading-container">
              <div className="vida-organizada-heading"></div>
              <div className="vida-organizada-explore"></div>
            </div>
          </div>
        </div>
        <a
          href="https://meet.sendinblue.com/startpee?t=0&amp;l=ajuda-no-e-commerce"
          className="vida-organizada-link button"
        >
          Agendar agora
        </a>
      </div>
      <style jsx>
        {`
          .vida-organizada-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #0a0a0a;
          }
          .vida-organizada-content {
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
          .vida-organizada-iframe {
            width: 681px;
            height: 514px;
          }
          .vida-organizada-video-container {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .vida-organizada-heading-container {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .vida-organizada-heading {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .vida-organizada-explore {
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
          .vida-organizada-explore:hover {
            color: rgba(255, 255, 255, 0.5);
            border-color: rgba(255, 255, 255, 0.3);
          }
          .vida-organizada-link {
            color: var(--dl-color-gray-white);
            width: 215px;
            height: 58px;
            font-size: 24px;
            border-color: #ffffff;
            border-width: 3px;
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            background-color: rgb(23, 22, 32);
          }
          @media (max-width: 991px) {
            .vida-organizada-content {
              gap: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .vida-organizada-content {
              width: 100%;
            }
            .vida-organizada-iframe {
              width: 766px;
              height: 627px;
            }
            .vida-organizada-video-container {
              gap: var(--dl-space-space-threeunits);
            }
            .vida-organizada-heading {
              gap: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 479px) {
            .vida-organizada-content {
              width: 384px;
              height: 312px;
              margin-top: var(--dl-space-space-twounits);
              margin-right: 0px;
            }
            .vida-organizada-iframe {
              width: 389px;
              height: 284px;
            }
          }
        `}
      </style>
    </>
  )
}

export default VidaOrganizada
