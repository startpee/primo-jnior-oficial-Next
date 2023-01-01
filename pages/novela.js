import React from 'react'
import Head from 'next/head'

const Novela = (props) => {
  return (
    <>
      <div className="novela-container">
        <Head>
          <title>novela - O Primo Júnior | Sabedoria jovem</title>
          <meta
            name="description"
            content="meus vídeos pode te ajudar a despertar o seu potencial como pessoa.\n\n"
          />
          <meta
            property="og:title"
            content="novela - O Primo Júnior | Sabedoria jovem"
          />
          <meta
            property="og:description"
            content="meus vídeos pode te ajudar a despertar o seu potencial como pessoa.\n\n"
          />
        </Head>
        <h1 className="novela-text">cropped da brisa</h1>
        <img
          alt="image"
          src="/playground_assets/brisa-travessia-1600x900-1122-1500w.jpg"
          className="novela-image"
        />
        <h1 className="novela-text1">Foto de frente</h1>
        <img
          alt="image"
          src="/playground_assets/img_20221230_094750%20%5B1%5D-1500w.jpg"
          className="novela-image1"
        />
        <h1 className="novela-text2">Foto de trás</h1>
        <img
          alt="image"
          src="/playground_assets/img_20221230_094750-removebg-preview-1500w.png"
          className="novela-image2"
        />
        <h1 className="novela-text3">Tamanho M</h1>
        <a
          href="https://api.whatsapp.com/send?phone=5511967272695"
          className="novela-link button"
        >
          Comprar agora
        </a>
      </div>
      <style jsx>
        {`
          .novela-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .novela-text {
            font-size: 44px;
            margin-top: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-unit);
          }
          .novela-image {
            width: 968px;
            height: 470px;
            object-fit: cover;
          }
          .novela-text1 {
            font-size: 44px;
            margin-top: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-unit);
          }
          .novela-image1 {
            width: 788px;
            height: 1082px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .novela-text2 {
            font-size: 44px;
            margin-top: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-unit);
          }
          .novela-image2 {
            width: 920px;
            height: 1192px;
            object-fit: cover;
          }
          .novela-text3 {
            font-size: 44px;
            margin-top: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-unit);
          }
          .novela-link {
            color: var(--dl-color-gray-white);
            width: 289px;
            height: 85px;
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
          @media (max-width: 767px) {
            .novela-image {
              width: 100%;
              height: 448px;
            }
            .novela-link {
              color: var(--dl-color-gray-white);
              font-size: 24px;
              text-align: center;
              text-decoration: none;
              background-color: rgb(23, 22, 32);
            }
          }
          @media (max-width: 479px) {
            .novela-text {
              font-size: 33px;
              text-align: center;
            }
            .novela-image {
              width: 100%;
              height: 366px;
            }
            .novela-image1 {
              width: 100%;
              height: 684px;
            }
            .novela-image2 {
              width: 100%;
              height: 616px;
            }
            .novela-text3 {
              font-size: 44px;
            }
            .novela-link {
              color: var(--dl-color-gray-white);
              font-size: 24px;
              margin-top: var(--dl-space-space-sixunits);
              line-height: 2;
              margin-bottom: var(--dl-space-space-sixunits);
              text-decoration: none;
              background-color: rgb(23, 22, 32);
            }
          }
        `}
      </style>
    </>
  )
}

export default Novela
