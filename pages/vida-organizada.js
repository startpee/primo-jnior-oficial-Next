import React from 'react'
import Head from 'next/head'

const VidaOrganizada = (props) => {
  return (
    <>
      <div className="vida-organizada-container">
        <Head>
          <title>Vida-organizada - O Primo Júnior | Sabedoria jovem</title>
          <meta
            name="description"
            content="meus vídeos pode te ajudar a despertar o seu potencial como pessoa.\n\n"
          />
          <meta
            property="og:title"
            content="Vida-organizada - O Primo Júnior | Sabedoria jovem"
          />
          <meta
            property="og:description"
            content="meus vídeos pode te ajudar a despertar o seu potencial como pessoa.\n\n"
          />
        </Head>
        <div className="vida-organizada-video">
          <div className="vida-organizada-content">
            <div className="vida-organizada-header">
              <h2 className="vida-organizada-text">Aperte o play</h2>
            </div>
            <iframe
              src="https://www.youtube.com/embed/bMGz1xP2hYU"
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
          <button className="vida-organizada-button button">
            Quero conversar
          </button>
          <button className="vida-organizada-button1 button"> Contratar</button>
        </div>
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
          }
          .vida-organizada-video {
            color: white;
            width: 100%;
            display: flex;
            z-index: 10;
            align-items: center;
            padding-top: 50px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 50px;
            background-color: #0a0a0a;
          }
          .vida-organizada-content {
            gap: var(--dl-space-space-fiveunits);
            width: 1089px;
            height: 833px;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
          }
          .vida-organizada-header {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .vida-organizada-text {
            color: #ffaf00;
            width: 640px;
            font-size: 40px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
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
          .vida-organizada-button {
            width: 274px;
            height: 56px;
            font-size: 25px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: rgb(255, 175, 0);
          }
          .vida-organizada-button1 {
            width: 274px;
            height: 56px;
            font-size: 30px;
            font-style: normal;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: center;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: rgb(255, 175, 0);
          }
          @media (max-width: 991px) {
            .vida-organizada-content {
              gap: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .vida-organizada-text {
              width: 100%;
              font-size: 32px;
              max-width: 640px;
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
            .vida-organizada-video {
              height: 628px;
              background-color: #0a0a0a;
            }
            .vida-organizada-text {
              color: rgb(255, 175, 0);
              font-size: 32px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
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
