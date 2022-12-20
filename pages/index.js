import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Announcement from '../components/announcement'
import Navbar from '../components/navbar'
import Highlight from '../components/highlight'
import Point from '../components/point'
import Accordion from '../components/accordion'
import Check from '../components/check'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>O Primo Júnior | sabedoria para jovens</title>
          <meta
            name="description"
            content="meus vídeos pode te ajudar a despertar o seu potencial como pessoa.\ndesenvolvimento pessoal &amp; empreendedorismo  \n"
          />
          <meta
            property="og:title"
            content="O Primo Júnior | sabedoria para jovens "
          />
          <meta
            property="og:description"
            content="meus vídeos pode te ajudar a despertar o seu potencial como pessoa.\ndesenvolvimento pessoal &amp; empreendedorismo  \n"
          />
        </Head>
        <div className="home-header">
          <div className="home-heading">
            <div id="notifcation" className="home-notification">
              <a href="#meuservi">
                <Announcement
                  rootClassName="announcement-root-class-name"
                  className="home-component"
                ></Announcement>
              </a>
            </div>
            <Navbar rootClassName="navbar-root-class-name"></Navbar>
          </div>
          <div className="home-hero">
            <div className="home-content">
              <h1 className="home-title">@oprimojunior</h1>
              <span className="home-caption">
                Os meus vídeos pode despertar a sua sabedoria
              </span>
              <div className="home-hero-buttons">
                <div className="home-android-btn">
                  <a
                    href="https://www.instagram.com/oprimojunior/"
                    className="home-link01"
                  >
                    <img
                      alt="image"
                      src="/playground_assets/instagram-300h.png"
                      className="home-image"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCJm1tVBdjFofO3cNz1g6pxQ/"
                    className="home-link02"
                  >
                    <img
                      alt="image"
                      src="/playground_assets/youtube-300h.png"
                      className="home-image01"
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@oprimojunior"
                    className="home-link03"
                  >
                    <img
                      alt="image"
                      src="/playground_assets/tik-tok-300h.png"
                      className="home-image02"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="home-images">
              <div className="home-column">
                <img
                  alt="pastedImage"
                  src="/playground_assets/1234-600h.png"
                  className="home-pasted-image"
                />
              </div>
              <div className="home-column1">
                <img
                  alt="pastedImage"
                  src="/playground_assets/vvvv-600h.png"
                  className="home-pasted-image1"
                />
                <img
                  alt="pastedImage"
                  src="/playground_assets/332221-600h.png"
                  className="home-pasted-image2"
                />
              </div>
              <div className="home-column2">
                <img
                  alt="pastedImage"
                  src="/playground_assets/vii-600h.png"
                  className="home-pasted-image3"
                />
                <img
                  alt="pastedImage"
                  src="/playground_assets/dssassse-600h.png"
                  className="home-pasted-image4"
                />
              </div>
            </div>
          </div>
        </div>
        <span className="home-caption1">
          meus vídeos pode te ajudar a despertar o seu potencial como pessoa.
        </span>
        <div className="home-div">
          <DangerousHTML
            html={`<storifyme-collection url="https://stories.storifyme.com/widgets/g-francisco-junior-49065/widget/custom/6949"></storifyme-collection>`}
          ></DangerousHTML>
        </div>
        <div className="home-video">
          <div className="home-content1">
            <div className="home-header1">
              <h2 className="home-text">Aperte o play</h2>
            </div>
            <iframe
              src="https://www.youtube.com/embed/_Z4u2gjMdUY"
              allowFullScreen
              className="home-iframe"
            ></iframe>
            <div className="home-video-container">
              <div className="home-heading-container">
                <div className="home-heading1"></div>
                <div className="home-explore">
                  <a
                    href="https://www.youtube.com/channel/UCJm1tVBdjFofO3cNz1g6pxQ/"
                    className="home-link04"
                  >
                    Me acompanha  no youtube -&gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-sections">
          <div className="home-section">
            <div className="home-image03">
              <div className="home-image-highlight">
                <span className="home-text01">
                  <span>
                    always know your in and out
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-content2">
              <h2 className="home-text04">Everything you get with Finbest</h2>
              <Highlight
                Title="Lorem ipsum dolor sit amet, consectetur "
                Description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud"
              ></Highlight>
              <Highlight
                Title="Lorem ipsum dolor sit amet, consectetur "
                Description="Sed do eiusmod tempor incididunt ut labore et dolore"
              ></Highlight>
              <div className="home-explore1">
                <span>Explore pricing plans -&gt;</span>
              </div>
            </div>
          </div>
          <div className="home-section1">
            <div className="home-content3">
              <div className="home-heading2">
                <h2 className="home-text06">
                  Keep track with all transactions
                </h2>
                <span className="home-text07">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="home-content4">
                <div className="home-points">
                  <Point></Point>
                  <Point text="Quis nostrud exercitation ullamco"></Point>
                  <Point text="Reprehenderit qui in ea voluptate velit"></Point>
                </div>
                <Link href="/">
                  <a className="home-link05">
                    <div className="home-get-started">
                      <span className="home-sign-up">Get started now</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="home-image04"></div>
          </div>
          <div className="home-section2">
            <div className="home-image05">
              <div className="home-image-overlay"></div>
            </div>
            <div className="home-content5">
              <h2 className="home-text08">
                <span>Create milestones</span>
                <br></br>
              </h2>
              <Accordion></Accordion>
            </div>
          </div>
        </div>
        <div className="home-banner-container">
          <div className="home-banner">
            <div className="home-overlay">
              <div className="home-div1">
                <DangerousHTML
                  html={`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/64G21G59ouRGSrckXtKy3K?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`}
                ></DangerousHTML>
              </div>
              <a
                href="https://open.spotify.com/show/0LzVGwtBYHnWAByDNLNn3b"
                className="home-link06"
              >
                <div className="home-book-btn">
                  <span className="home-text11">Aperta aqui-&gt;</span>
                </div>
              </a>
            </div>
            <img
              alt="pastedImage"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="home-pasted-image5"
            />
          </div>
        </div>
        <div className="home-pricing">
          <div id="meuservi" className="home-content6">
            <div className="home-header2">
              <div className="home-tag">
                <span className="home-text12">
                  tabela de Preço
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="home-heading3">
                <h2 className="home-text13">Meu principal serviço</h2>
                <div className="home-plan">
                  <div className="home-top">
                    <div className="home-heading4">
                      <span className="home-text14">infoprodutor</span>
                      <span className="home-text15">
                        Ajudo a criar o seu produto digital e lançar na internet
                      </span>
                      <img
                        alt="image"
                        src="/playground_assets/2541715-700h.png"
                        className="home-image06"
                      />
                    </div>
                    <div className="home-cost"></div>
                  </div>
                  <div className="home-bottom">
                    <div className="home-check-list">
                      <Check Feature="estrutura digital"></Check>
                      <Check Feature="estratégia de marketing"></Check>
                      <Check Feature=" plano de negócios"></Check>
                    </div>
                    <a
                      href="https://chatting.page/u4sq7jfo91vvwmcnblgfvwwq9wshhxi1"
                      className="home-link07"
                    >
                      <div className="home-button">
                        <span className="home-text16">Saiba mais</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-help">
            <span className="home-text17">precisa de ajuda?</span>
            <div className="home-explore2">
              <a
                href="https://chatting.page/u4sq7jfo91vvwmcnblgfvwwq9wshhxi1"
                className="home-link08"
              >
                Entre em contato agora mesmo -&gt;
              </a>
            </div>
          </div>
        </div>
        <div className="home-f-a-q">
          <div className="home-content7">
            <div className="home-header3">
              <div className="home-tag1">
                <span className="home-text18">
                  <span>FAQ</span>
                  <br></br>
                </span>
              </div>
              <div className="home-heading5">
                <h2 className="home-text21">perguntas que as pessoas me faz</h2>
              </div>
            </div>
            <div className="home-rows">
              <div className="home-column3">
                <div className="home-question Question">
                  <span className="home-title1">
                    Você é muito inteligente porque não  faz um concurso 
                    público?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description">
                    <span>
                      nunca tive vontade, porque sou empreendedor nato, meu pai
                      dizia: &quot; eu que não vou trabalhar para os
                      outros&quot; então aprendi com ele.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Só que não recomendo montar um negócio sem conhecimento, o
                      caminho que escolhi foi oque me fez aprender errando e ser
                      essa pessoa inteligente.
                    </span>
                  </span>
                </div>
                <div className="home-question1 Question">
                  <span className="home-title2">
                    Você tem namorada?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description1">
                    <span>
                      Não tenho, eu nunca me envolvi em nenhum relacionamento,
                      por achar que mulher só dar problemas.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Acabei mudando de ideia  no caso se eu encontrar uma
                      mulher que seja esforçada e que tenha objetivos de crescer
                      na vida nunca que seria problema, seria um apoio.  
                    </span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div className="home-question2 Question">
                  <span className="home-title3">
                    você tem moradia próprio?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description2">
                    No momento não, comecei minha jornada na internet apartir do
                    meu site que lancei em novembro de 2022 em julho de 2023 já
                    quero está morando no meu apê .
                  </span>
                </div>
              </div>
              <div className="home-column4">
                <div className="Question">
                  <span className="home-title4">
                    Quando você vai ficar rico?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description3">
                    eu acredito que já sou, sobre a questão financeiro pra mim
                    eu tenho uma previsão que lá para final do ano de 2023
                    esteja com abundancia e realizando um dos meus sonhos de
                    conquistar o meu primeiro milhão. 
                  </span>
                </div>
                <div className="home-question4 Question">
                  <span className="home-title5">
                    Qual sua profissão?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description4">
                    em tempo integral atualmente me dedico na minha carreira
                    como Bizdev &quot; sou especialista em desenvolver novos
                    negócios&quot; 
                  </span>
                </div>
                <div className="home-question5 Question">
                  <span className="home-title6">
                    Qual o seu sonho?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description5">
                    <span>
                      antes eu dizia que tinha muitos Sonhos, mas hoje eu me
                      vejo com objetivo.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      tive que pegar um dos meus sonhos e organizar para tornar
                      um objetivo na minha vida.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-get-started1">
          <div className="home-content8">
            <div className="home-heading6">
              <h2 className="home-text37"> acompanhe o primo!</h2>
              <span className="home-text38">em uma das nossas redes</span>
            </div>
            <div className="home-hero-buttons1">
              <div className="home-i-o-s-btn">
                <a
                  href="https://www.youtube.com/channel/UCJm1tVBdjFofO3cNz1g6pxQ"
                  className="home-link09"
                >
                  <img
                    alt="image"
                    src="/playground_assets/youtube-300h.png"
                    className="home-image07"
                  />
                </a>
              </div>
              <div className="home-i-o-s-btn1">
                <a
                  href="https://www.tiktok.com/@oprimojunior"
                  className="home-link10"
                >
                  <img
                    alt="image"
                    src="/playground_assets/tik-tok-300h.png"
                    className="home-image08"
                  />
                </a>
              </div>
              <div className="home-android-btn1">
                <a
                  href="https://www.instagram.com/oprimojunior/"
                  className="home-link11"
                >
                  <img
                    alt="image"
                    src="/playground_assets/instagram-300h.png"
                    className="home-image09"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-notification {
            width: 100%;
          }
          .home-component {
            text-decoration: none;
          }
          .home-hero {
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0.5;
            display: flex;
            z-index: 20;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-title {
            font-size: 64px;
            align-self: center;
            font-style: normal;
            font-family: Source Sans Pro;
            font-weight: 700;
            line-height: 76px;
          }
          .home-caption {
            font-size: 26px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 400;
            line-height: 35px;
          }
          .home-hero-buttons {
            gap: var(--dl-space-space-unit);
            display: flex;
            z-index: 15;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-android-btn {
            gap: var(--dl-space-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: #ffffff;
          }
          .home-link01 {
            display: contents;
          }
          .home-image {
            width: var(--dl-size-size-medium);
            object-fit: cover;
            margin-left: 10px;
            margin-right: 10px;
            text-decoration: none;
          }
          .home-link02 {
            display: contents;
          }
          .home-image01 {
            width: 100px;
            object-fit: cover;
            margin-left: 10px;
            margin-right: 10px;
            text-decoration: none;
          }
          .home-link03 {
            display: contents;
          }
          .home-image02 {
            width: 100px;
            object-fit: cover;
            text-decoration: none;
          }
          .home-images {
            gap: var(--dl-space-space-oneandhalfunits);
            right: -210px;
            bottom: -300px;
            margin: var(--dl-space-space-threeunits);
            display: flex;
            overflow: hidden;
            position: absolute;
            transform: rotate(-30deg);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-column {
            gap: var(--dl-space-space-oneandhalfunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-pasted-image {
            width: 240px;
          }
          .home-column1 {
            gap: var(--dl-space-space-oneandhalfunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-pasted-image1 {
            width: 240px;
          }
          .home-pasted-image2 {
            width: 240px;
          }
          .home-column2 {
            gap: var(--dl-space-space-oneandhalfunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-pasted-image3 {
            width: 240px;
          }
          .home-pasted-image4 {
            width: 240px;
          }
          .home-caption1 {
            color: rgba(140, 97, 97, 0);
            font-size: 26px;
            align-self: center;
            font-style: normal;
            margin-top: 199px;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
            line-height: 33px;
            margin-left: 145px;
            margin-right: 145px;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: inherit;
          }
          .home-div {
            width: 100%;
            height: var(--dl-size-size-medium);
            margin-top: 30px;
            margin-bottom: var(--dl-space-space-sixunits);
          }
          .home-video {
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
          .home-content1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 909px;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
          }
          .home-header1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text {
            color: #ffaf00;
            width: 640px;
            font-size: 40px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-iframe {
            width: 668px;
            height: 741px;
          }
          .home-video-container {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading-container {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading1 {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-explore {
            color: #fff;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            border-color: #ffffff;
            border-width: 0px;
            flex-direction: column;
            padding-bottom: 4px;
            border-bottom-width: 1px;
          }
          .home-explore:hover {
            color: rgba(255, 255, 255, 0.5);
            border-color: rgba(255, 255, 255, 0.3);
          }
          .home-link04 {
            width: Size-XSmall;
            text-decoration: none;
          }
          .home-sections {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-section {
            gap: var(--dl-space-space-sixunits);
            width: 100%;
            display: none;
            z-index: 10;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-image03 {
            width: 400px;
            height: 540px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            background-size: contain;
            justify-content: flex-end;
            background-image: url('/playground_assets/group%201277.svg');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-image-highlight {
            top: 0px;
            right: 0px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: #375ee0;
          }
          .home-text01 {
            color: rgb(193, 255, 252);
            width: 100%;
            max-width: 90px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-content2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text04 {
            font-size: 40px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-explore1 {
            cursor: pointer;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            align-items: flex-start;
            border-width: 0px;
            flex-direction: column;
            padding-bottom: 4px;
            border-bottom-width: 1px;
          }
          .home-explore1:hover {
            color: rgba(0, 0, 0, 0.5);
            border-color: rgba(0, 0, 0, 0.3);
          }
          .home-section1 {
            gap: var(--dl-space-space-sixunits);
            width: 100%;
            display: none;
            z-index: 10;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-content3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text06 {
            font-size: 40px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-text07 {
            font-size: 18px;
            max-width: 535px;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-content4 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-points {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-link05 {
            display: contents;
          }
          .home-get-started {
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .home-get-started:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-sign-up {
            font-style: normal;
            font-weight: 500;
          }
          .home-image04 {
            width: 370px;
            height: 600px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/playground_assets/group%201309.svg');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-section2 {
            gap: var(--dl-space-space-sixunits);
            width: 100%;
            display: none;
            z-index: 10;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-image05 {
            width: 400px;
            height: 590px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/group%201281.svg');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-image-overlay {
            right: 0px;
            width: 180px;
            bottom: 0px;
            height: 320px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: row;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/pastedimage-5cga-400h.png');
          }
          .home-content5 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text08 {
            font-size: 40px;
            max-width: 640px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-banner-container {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-banner {
            width: 100%;
            height: 667px;
            display: flex;
            overflow: hidden;
            max-width: 1200px;
            margin-top: 50px;
            align-items: center;
            border-radius: 16px;
            flex-direction: column;
            justify-content: center;
            background-color: #1a1b29;
          }
          .home-overlay {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: 739px;
            display: flex;
            align-items: flex-start;
            padding-top: 100px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
            background-color: #c97707;
          }
          .home-link06 {
            display: contents;
          }
          .home-book-btn {
            cursor: pointer;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: var(--dl-color-gray-black);
            border-width: 3px;
            padding-left: var(--dl-space-space-threeunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            text-decoration: none;
            background-color: #ffaf00;
          }
          .home-text11 {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 22px;
            max-width: 490px;
            font-style: normal;
            font-family: Roboto Condensed;
            font-weight: 700;
          }
          .home-pasted-image5 {
            display: none;
          }
          .home-pricing {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 16px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: #f3f5fa;
          }
          .home-content6 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 768px;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
          }
          .home-header2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-tag {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            background-color: #d6f1f0;
          }
          .home-text12 {
            font-style: normal;
            font-weight: 500;
          }
          .home-heading3 {
            gap: var(--dl-space-space-unit);
            width: 505px;
            height: 705px;
            display: flex;
            align-items: flex-start;
            border-color: rgba(0, 0, 0, 0.34);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text13 {
            width: 100%;
            font-size: 40px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-plan {
            width: 418px;
            height: 602px;
            display: flex;
            max-width: 300px;
            align-self: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            border-color: #dbdbdb;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
            border-right-width: 1px;
          }
          .home-top {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            border-color: #dbdbdb;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text14 {
            font-size: 30px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text15 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-image06 {
            width: 114px;
            align-self: center;
            object-fit: cover;
          }
          .home-cost {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-bottom {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-check-list {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
          }
          .home-link07 {
            display: contents;
          }
          .home-button {
            width: 100%;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: var(--dl-color-gray-black);
            border-width: 3px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            text-decoration: none;
            background-color: #ffaf00;
          }
          .home-button:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text16 {
            font-style: normal;
            font-weight: 500;
          }
          .home-help {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: row;
          }
          .home-text17 {
            font-family: Poppins;
          }
          .home-explore2 {
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            border-width: 0px;
            flex-direction: column;
            padding-bottom: 4px;
            border-bottom-width: 1px;
          }
          .home-explore2:hover {
            color: rgba(0, 0, 0, 0.5);
            border-color: rgba(0, 0, 0, 0.3);
          }
          .home-link08 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-f-a-q {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 16px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: #f3f5fa;
          }
          .home-content7 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
          }
          .home-header3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-tag1 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            background-color: #d6f1f0;
          }
          .home-text18 {
            font-style: normal;
            font-weight: 500;
          }
          .home-heading5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text21 {
            width: 100%;
            font-size: 40px;
            max-width: 500px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-rows {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-column3 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-question {
            border-right-width: 0px;
          }
          .home-title1 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
          }
          .home-description {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-question1 {
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-title2 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
          }
          .home-description1 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-question2 {
            border-bottom-width: 0px;
          }
          .home-title3 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
          }
          .home-description2 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-column4 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-title4 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
          }
          .home-description3 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-question4 {
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-title5 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
          }
          .home-description4 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-question5 {
            border-right-width: 0px;
          }
          .home-title6 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
          }
          .home-description5 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-get-started1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: #000000;
          }
          .home-content8 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .home-heading6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text37 {
            color: var(--dl-color-gray-white);
            font-size: 64px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text38 {
            color: var(--dl-color-gray-black);
            font-size: 20px;
            text-align: center;
            font-family: Poppins;
            line-height: 30px;
          }
          .home-hero-buttons1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            z-index: 15;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-i-o-s-btn {
            gap: var(--dl-space-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-round);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .home-link09 {
            display: contents;
          }
          .home-image07 {
            width: 100px;
            object-fit: cover;
            text-decoration: none;
          }
          .home-i-o-s-btn1 {
            gap: var(--dl-space-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-round);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .home-link10 {
            display: contents;
          }
          .home-image08 {
            width: 100px;
            object-fit: cover;
            text-decoration: none;
          }
          .home-android-btn1 {
            gap: var(--dl-space-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-round);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: #ffffff;
          }
          .home-link11 {
            display: contents;
          }
          .home-image09 {
            width: 100px;
            object-fit: cover;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column;
            }
            .home-content {
              gap: var(--dl-space-space-unit);
              flex: 0 0 auto;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .home-title {
              font-size: 50px;
              text-align: left;
              line-height: 58px;
            }
            .home-caption {
              font-size: 16px;
            }
            .home-hero-buttons {
              width: 100%;
            }
            .home-android-btn {
              flex: 1;
            }
            .home-images {
              left: 0px;
              right: -100px;
              bottom: -325px;
              margin: auto;
            }
            .home-pasted-image {
              width: 200px;
            }
            .home-pasted-image1 {
              width: 200px;
            }
            .home-pasted-image2 {
              width: 200px;
            }
            .home-pasted-image3 {
              width: 200px;
            }
            .home-pasted-image4 {
              width: 200px;
            }
            .home-caption1 {
              text-align: center;
              line-height: 32px;
            }
            .home-content1 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-section {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-fourunits);
              flex-direction: column-reverse;
            }
            .home-content2 {
              gap: var(--dl-space-space-unit);
            }
            .home-explore1 {
              margin-top: var(--dl-space-space-halfunit);
            }
            .home-section1 {
              padding-top: var(--dl-space-space-fourunits);
              border-color: #dbdbdb;
              flex-direction: column;
              border-top-width: 1px;
            }
            .home-content3 {
              gap: var(--dl-space-space-unit);
            }
            .home-content4 {
              gap: var(--dl-space-space-twounits);
            }
            .home-section2 {
              align-items: center;
              padding-top: var(--dl-space-space-fourunits);
              border-color: #dbdbdb;
              flex-direction: column-reverse;
              padding-bottom: var(--dl-space-space-fourunits);
              border-top-width: 1px;
            }
            .home-content5 {
              margin-top: 0px;
            }
            .home-pasted-image5 {
              align-self: center;
            }
            .home-pricing {
              padding-top: var(--dl-space-space-fourunits);
              padding-right: 5px;
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content6 {
              gap: var(--dl-space-space-threeunits);
              width: 911px;
            }
            .home-header2 {
              gap: var(--dl-space-space-unit);
            }
            .home-heading3 {
              width: 588px;
            }
            .home-text15 {
              font-family: Poppins;
              line-height: 24px;
            }
            .home-get-started1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content8 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading6 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text37 {
              font-size: 40px;
            }
            .home-text38 {
              font-size: 18px;
            }
          }
          @media (max-width: 767px) {
            .home-title {
              font-size: 40px;
              line-height: 48px;
            }
            .home-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .home-images {
              bottom: -250px;
            }
            .home-caption1 {
              font-size: 32px;
            }
            .home-text {
              width: 100%;
              font-size: 32px;
              max-width: 640px;
            }
            .home-video-container {
              gap: var(--dl-space-space-threeunits);
            }
            .home-heading1 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text04 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text06 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text07 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-get-started {
              display: none;
            }
            .home-section2 {
              gap: var(--dl-space-space-twounits);
            }
            .home-banner {
              height: 520px;
              position: relative;
            }
            .home-overlay {
              gap: var(--dl-space-space-oneandhalfunits);
              flex: 1;
              z-index: 50;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
              justify-content: flex-start;
              background-image: none;
            }
            .home-pasted-image5 {
              right: 0px;
              bottom: 0px;
              height: 300px;
              display: flex;
              position: absolute;
              align-self: flex-end;
            }
            .home-content6 {
              width: 531px;
              height: 733px;
            }
            .home-text13 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-f-a-q {
              width: 100%;
            }
            .home-content7 {
              gap: var(--dl-space-space-twounits);
            }
            .home-text18 {
              font-size: 14px;
            }
            .home-text21 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-rows {
              flex-direction: column;
            }
            .home-title1 {
              font-size: 16px;
            }
            .home-get-started1 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              height: 510px;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: 275px;
            }
            .home-content {
              width: 269px;
              height: 272px;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-title {
              font-size: 40px;
              align-self: center;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 48px;
            }
            .home-caption {
              font-size: 16px;
              align-self: center;
              font-style: normal;
              text-align: center;
              font-family: Poppins;
              font-weight: 400;
              line-height: 22px;
            }
            .home-hero-buttons {
              width: 100%;
              flex-direction: column;
            }
            .home-android-btn {
              width: 330px;
              padding-top: 20px;
              padding-right: 137px;
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-image {
              width: 60px;
            }
            .home-image01 {
              width: 60px;
            }
            .home-image02 {
              width: 60px;
            }
            .home-images {
              bottom: -300px;
              margin: var(--dl-space-space-oneandhalfunits);
            }
            .home-pasted-image {
              width: 150px;
            }
            .home-pasted-image1 {
              width: 150px;
            }
            .home-pasted-image2 {
              width: 150px;
            }
            .home-pasted-image3 {
              width: 150px;
            }
            .home-pasted-image4 {
              width: 150px;
            }
            .home-caption1 {
              font-size: 18px;
              align-self: center;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 18px;
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-div {
              height: var(--dl-size-size-large);
            }
            .home-video {
              background-color: #0a0a0a;
            }
            .home-iframe {
              width: 325px;
              height: 545px;
            }
            .home-link04 {
              text-decoration: none;
            }
            .home-image03 {
              width: 100%;
              max-width: 400px;
            }
            .home-image05 {
              width: 100%;
              max-width: 400px;
            }
            .home-banner-container {
              height: 652px;
            }
            .home-banner {
              height: 100%;
              background-color: #c97707;
            }
            .home-overlay {
              width: 333px;
              height: 646px;
              padding-top: var(--dl-space-space-twounits);
              margin-bottom: 110px;
              padding-bottom: 0px;
            }
            .home-div1 {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-book-btn {
              align-self: center;
            }
            .home-text11 {
              color: var(--dl-color-gray-black);
              font-size: 22px;
              font-style: normal;
              font-family: Roboto Condensed;
              font-weight: 700;
            }
            .home-pasted-image5 {
              width: auto;
              height: 181px;
              display: none;
            }
            .home-content6 {
              width: 435px;
              height: 783px;
            }
            .home-heading3 {
              width: 441px;
            }
            .home-text13 {
              width: 320px;
              height: 63px;
              font-size: 25px;
              align-self: center;
            }
            .home-text14 {
              font-size: 30px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
            }
            .home-text15 {
              font-family: Poppins;
              line-height: 24px;
            }
            .home-help {
              align-items: center;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-text21 {
              font-size: 32px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 44px;
            }
            .home-description {
              font-family: Poppins;
              line-height: 24px;
            }
            .home-description1 {
              font-family: Poppins;
              line-height: 24px;
            }
            .home-description3 {
              font-family: Poppins;
              line-height: 24px;
            }
            .home-description5 {
              line-height: 24px;
            }
            .home-hero-buttons1 {
              width: 100%;
              flex-direction: column;
            }
            .home-i-o-s-btn {
              width: 100%;
            }
            .home-i-o-s-btn1 {
              width: 100%;
            }
            .home-android-btn1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
