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
          @media (max-width: 767px) {
            .novela-image {
              width: 100%;
              height: 448px;
            }
          }
          @media (max-width: 479px) {
            .novela-image {
              width: 100%;
              height: 366px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Novela
