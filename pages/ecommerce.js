import React from 'react'
import Head from 'next/head'

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
        <div className="ecommerce-video">
          <div className="ecommerce-content">
            <div className="ecommerce-header">
              <h2 className="ecommerce-text">Aperte o play</h2>
            </div>
            <iframe
              src="https://www.youtube.com/embed/bMGz1xP2hYU"
              allowFullScreen
              className="ecommerce-iframe"
            ></iframe>
            <div className="ecommerce-video-container">
              <div className="ecommerce-heading-container">
                <div className="ecommerce-heading"></div>
                <div className="ecommerce-explore"></div>
              </div>
            </div>
          </div>
          <button className="ecommerce-button button">Quero começar</button>
        </div>
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
          }
          .ecommerce-video {
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
          .ecommerce-content {
            gap: var(--dl-space-space-fiveunits);
            width: 1089px;
            height: 833px;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
          }
          .ecommerce-header {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .ecommerce-text {
            color: #ffaf00;
            width: 640px;
            font-size: 40px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
          }
          .ecommerce-iframe {
            width: 681px;
            height: 514px;
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
          .ecommerce-heading {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
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
          .ecommerce-button {
            width: 274px;
            height: 56px;
            font-size: 30px;
            text-align: center;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: #ffaf00;
          }
          @media (max-width: 991px) {
            .ecommerce-content {
              gap: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .ecommerce-text {
              width: 100%;
              font-size: 32px;
              max-width: 640px;
            }
            .ecommerce-iframe {
              width: 766px;
              height: 627px;
            }
            .ecommerce-video-container {
              gap: var(--dl-space-space-threeunits);
            }
            .ecommerce-heading {
              gap: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 479px) {
            .ecommerce-video {
              height: 628px;
              background-color: #0a0a0a;
            }
            .ecommerce-text {
              color: rgb(255, 175, 0);
              font-size: 32px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
            }
            .ecommerce-iframe {
              width: 389px;
              height: 284px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Ecommerce
