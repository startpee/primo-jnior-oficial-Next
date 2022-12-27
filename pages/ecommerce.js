import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

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
        <div className="ecommerce-div">
          <DangerousHTML
            html={`<!-- static button start -->
<link href="https://meetings.sendinblue.com/assets/styles/popup.css" rel="stylesheet" />
<script src="https://meetings.sendinblue.com/assets/libs/popup.min.js" type="text/javascript"></script>
<a href="" onclick="SendinblueBookingPage.initStaticButton({ url: 'https://meet.sendinblue.com/startpee/borderless?l=e-commerce-ajuda' });return false;" style="cursor: pointer; font-family: Roboto; font-weight: 500; background-color: #1d1b29; color: white; padding: 0.8rem 2rem; border: 0px; box-shadow: rgba(0, 0, 0, 0.15) 0px -2px 0px inset; border-radius: 4px; text-decoration: none; display: inline-block;">Agendar agora</a>
<!-- static button end -->`}
          ></DangerousHTML>
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
            background-color: #0a0a0a;
          }
          .ecommerce-content {
            gap: var(--dl-space-space-fiveunits);
            width: 688px;
            height: 688px;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            background-color: #0a0a0a;
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
          .ecommerce-div {
            width: 214px;
            height: 57px;
            margin-top: var(--dl-space-space-twounits);
          }
          @media (max-width: 991px) {
            .ecommerce-content {
              gap: var(--dl-space-space-threeunits);
            }
            .ecommerce-div {
              width: 221px;
              height: 53px;
              margin-top: var(--dl-space-space-threeunits);
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .ecommerce-content {
              width: 100%;
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
            .ecommerce-content {
              width: 434px;
              height: 327px;
              margin-top: var(--dl-space-space-twounits);
              margin-right: 0px;
            }
            .ecommerce-iframe {
              width: 389px;
              height: 284px;
            }
            .ecommerce-div {
              width: 176px;
              height: 50px;
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Ecommerce
