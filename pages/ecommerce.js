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
        <iframe
          src="https://pay.kiwify.com.br/A5PqHh1"
          className="ecommerce-iframe"
        ></iframe>
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
          .ecommerce-iframe {
            width: 100%;
            height: var(--dl-size-size-maxwidth);
          }
        `}
      </style>
    </>
  )
}

export default Ecommerce
