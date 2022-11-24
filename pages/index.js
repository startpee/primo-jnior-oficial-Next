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
          <title>Primo júnior influenciador digital</title>
          <meta
            name="description"
            content="criador de conteúdos na internet de desenvolvimento pessoal e negócios.\nfundador da startpee uma startup desenvolvedora de novos negócios "
          />
          <meta
            property="og:title"
            content="Primo júnior influenciador digital "
          />
          <meta
            property="og:description"
            content="criador de conteúdos na internet de desenvolvimento pessoal e negócios.\nfundador da startpee uma startup desenvolvedora de novos negócios "
          />
        </Head>
        <div className="home-header">
          <div className="home-heading">
            <div id="notifcation" className="home-notification">
              <a href="https://chatting.page/u4sq7jfo91vvwmcnblgfvwwq9wshhxi1">
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
                Comecei minha jornada como influenciador  
              </span>
              <div className="home-hero-buttons">
                <div className="home-android-btn">
                  <a
                    href="https://www.instagram.com/oprimojunior/"
                    className="home-link01"
                  >
                    <img
                      alt="image"
                      src="/playground_assets/instagram-1500h.png"
                      className="home-image"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCJm1tVBdjFofO3cNz1g6pxQ/"
                    className="home-link02"
                  >
                    <img
                      alt="image"
                      src="/playground_assets/youtube-1500h.png"
                      className="home-image01"
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@oprimojunior"
                    className="home-link03"
                  >
                    <img
                      alt="image"
                      src="/playground_assets/tik-tok-1500h.png"
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
                  src="/playground_assets/1234-1500h.png"
                  className="home-pasted-image"
                />
              </div>
              <div className="home-column1">
                <img
                  alt="pastedImage"
                  src="/playground_assets/vvvv-1500h.png"
                  className="home-pasted-image1"
                />
                <img
                  alt="pastedImage"
                  src="/playground_assets/332221-1500h.png"
                  className="home-pasted-image2"
                />
              </div>
              <div className="home-column2">
                <img
                  alt="pastedImage"
                  src="/playground_assets/vii-1500h.png"
                  className="home-pasted-image3"
                />
                <img
                  alt="pastedImage"
                  src="/playground_assets/dssassse-1500h.png"
                  className="home-pasted-image4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="home-stats">
          <div className="home-stat">
            <span className="home-caption1">R$1M</span>
            <span className="home-description">
              Meu objetivo em 12 meses na internet
            </span>
          </div>
          <div className="home-container1">
            <div className="home-stat1">
              <span className="home-caption2">R$100k</span>
              <span className="home-description1">
                Que vou doar para um dos meus seguidores após bater meu primeiro
                milhão
              </span>
            </div>
          </div>
          <div className="home-stat2">
            <span className="home-caption3">10.000 +</span>
            <span className="home-description2">
              impactada pelo meus conteúdos é meu objetivo
            </span>
          </div>
        </div>
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
              src="https://www.youtube.com/embed/mXaApFFrCC0"
              allowFullScreen
              className="home-iframe"
            ></iframe>
            <div className="home-video-container">
              <div className="home-heading-container">
                <div className="home-heading01">
                  <span className="home-text01">Assista esse video </span>
                </div>
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
                <span className="home-text02">
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
              <h2 className="home-text05">Everything you get with Finbest</h2>
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
              <div className="home-heading02">
                <h2 className="home-text07">
                  Keep track with all transactions
                </h2>
                <span className="home-text08">
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
              <h2 className="home-text09">
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
              <span className="home-text12">Esse é o meu podcast</span>
              <a
                href="https://open.spotify.com/show/0LzVGwtBYHnWAByDNLNn3b"
                className="home-link06"
              >
                <div className="home-book-btn">
                  <span className="home-text13">Aperta aqui</span>
                </div>
              </a>
              <div className="home-div1">
                <DangerousHTML
                  html={`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/0LzVGwtBYHnWAByDNLNn3b?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`}
                ></DangerousHTML>
              </div>
            </div>
            <img
              alt="pastedImage"
              src="/playground_assets/2333277-ai%20%5B3%5D%20%5B3%5D-1200w.png"
              className="home-pasted-image5"
            />
          </div>
        </div>
        <div className="home-pricing">
          <div className="home-content6">
            <div className="home-header2">
              <div className="home-tag">
                <span className="home-text14">
                  tabela de Preço
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="home-heading03">
                <h2 className="home-text15">Meus serviços</h2>
              </div>
            </div>
            <div className="home-pricing-plans">
              <div className="home-plans">
                <div className="home-plan">
                  <div className="home-top">
                    <div className="home-heading04">
                      <span className="home-text16">Dicas para empreender</span>
                      <span className="home-text17">
                        em breve vou lançar um app  
                      </span>
                    </div>
                    <div className="home-cost">
                      <span className="home-text18">Grátis</span>
                    </div>
                  </div>
                  <div className="home-bottom">
                    <div className="home-check-list">
                      <Check></Check>
                      <Check Feature="Ideias de negócios"></Check>
                    </div>
                    <a
                      href="https://chatting.page/u4sq7jfo91vvwmcnblgfvwwq9wshhxi1"
                      className="home-link07"
                    >
                      <div className="home-button">
                        <span className="home-text19">Eu quero</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="home-plan1">
                  <div className="home-top1">
                    <div className="home-heading05">
                      <span className="home-text20">Criação de site</span>
                      <span className="home-text21">
                        Faço paginas profissionais 
                      </span>
                    </div>
                    <div className="home-cost1">
                      <span className="home-text22">Apartir R$250</span>
                    </div>
                  </div>
                  <div className="home-bottom1">
                    <div className="home-check-list1">
                      <Check Feature="seu negócio fica mais profissional"></Check>
                      <Check Feature="Só paga uma vez"></Check>
                      <Check Feature="Sem mensalidade "></Check>
                      <Check Feature="Chat de atendimento Grátis"></Check>
                    </div>
                    <a
                      href="https://chatting.page/u4sq7jfo91vvwmcnblgfvwwq9wshhxi1"
                      className="home-link08"
                    >
                      <div className="home-button1">
                        <span className="home-text23">Eu quero</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="home-expand">
                <div className="home-overlay1">
                  <img
                    alt="image"
                    src="/playground_assets/advertising-200h.png"
                    className="home-image06"
                  />
                  <div className="home-header3">
                    <div className="home-heading06">
                      <span className="home-text24">
                        Criação de conteúdo Criativo
                      </span>
                      <span className="home-text25">
                        Faço conteúdos para seu negócio se destacar e chamar
                        atenção
                      </span>
                    </div>
                    <div className="home-check-list2">
                      <div className="home-check">
                        <svg viewBox="0 0 1024 1024" className="home-icon">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text26">
                          instagram,tik tok, youtube
                        </span>
                      </div>
                      <div className="home-check1">
                        <svg viewBox="0 0 1024 1024" className="home-icon02">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text27">
                          criação de estratégia 
                        </span>
                      </div>
                      <div className="home-check2">
                        <svg viewBox="0 0 1024 1024" className="home-icon04">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text28">
                          Anuncios patrocinado
                        </span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://chatting.page/u4sq7jfo91vvwmcnblgfvwwq9wshhxi1"
                    className="home-link09"
                  >
                    <div className="home-button2">
                      <span className="home-text29">
                        <span>sob consulta</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="home-plans1">
              <div className="home-plan2">
                <div className="home-top2">
                  <div className="home-heading07">
                    <span className="home-text32">Dicas para empreender</span>
                    <span className="home-text33">
                      em breve vou lançar um serie de videos 
                    </span>
                  </div>
                  <div className="home-cost2">
                    <span className="home-text34">Grátis</span>
                  </div>
                  <div className="home-check-list3">
                    <Check></Check>
                    <Check Feature="Ideias de negócios"></Check>
                  </div>
                </div>
                <div className="home-bottom2">
                  <div className="home-button3">
                    <span className="home-text35">Eu quero</span>
                  </div>
                </div>
              </div>
              <div className="home-plan3">
                <div className="home-top3">
                  <div className="home-heading08">
                    <span className="home-text36">Criação de site</span>
                    <span className="home-text37">
                      Faço paginas profissionais 
                    </span>
                  </div>
                  <div className="home-cost3">
                    <span className="home-text38">Apartir R$250</span>
                  </div>
                  <div className="home-check-list4">
                    <Check Feature="seu negócio fica mais profissional"></Check>
                    <Check Feature="Só paga uma vez"></Check>
                    <Check Feature="Sem mensalidade "></Check>
                    <Check Feature="Chat de atendimento Grátis"></Check>
                  </div>
                </div>
                <div className="home-bottom3">
                  <a
                    href="https://chatting.page/u4sq7jfo91vvwmcnblgfvwwq9wshhxi1"
                    className="home-link10"
                  >
                    <div className="home-button4">
                      <span className="home-text39">Eu quero</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="home-expand1">
                <div className="home-overlay2">
                  <div className="home-header4">
                    <div className="home-heading09">
                      <span className="home-text40">
                        Criação de conteúdo Criativo
                      </span>
                      <span className="home-text41">
                        Faço conteúdos para seu negócio se destacar e chamar
                        atenção
                      </span>
                    </div>
                    <div className="home-check-list5">
                      <div className="home-check3"></div>
                      <div className="home-check4"></div>
                      <div className="home-check5"></div>
                      <div className="home-check-list6">
                        <div className="home-check6">
                          <svg viewBox="0 0 1024 1024" className="home-icon06">
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="home-text42">
                            instagram,tik tok, youtube
                          </span>
                        </div>
                        <div className="home-check7">
                          <svg viewBox="0 0 1024 1024" className="home-icon08">
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="home-text43">
                            criação de estratégia 
                          </span>
                        </div>
                        <div className="home-check8">
                          <svg viewBox="0 0 1024 1024" className="home-icon10">
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="home-text44">
                            Anuncios patrocinado
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://chatting.page/u4sq7jfo91vvwmcnblgfvwwq9wshhxi1"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link11"
                  >
                    <div className="home-button5">
                      <span className="home-text45">
                        <span>Sob consulta</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="home-help">
            <span className="home-text48">precisa de ajuda?</span>
            <div className="home-explore2">
              <a
                href="https://chatting.page/u4sq7jfo91vvwmcnblgfvwwq9wshhxi1"
                className="home-link12"
              >
                Entre em contato agora mesmo -&gt;
              </a>
            </div>
          </div>
        </div>
        <div className="home-f-a-q">
          <div className="home-content7">
            <div className="home-header5">
              <div className="home-tag1">
                <span className="home-text49">
                  <span>FAQ</span>
                  <br></br>
                </span>
              </div>
              <div className="home-heading10">
                <h2 className="home-text52">perguntas que as pessoas me faz</h2>
              </div>
            </div>
            <div className="home-rows">
              <div className="home-column3">
                <div className="Question">
                  <span className="home-title1">
                    Você é muito inteligente porque não  faz um concurso 
                    público?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description3">
                    <span>
                      nunca tive vontade, porque sou empreendedor nato, meu pai
                      dizia: &quot; eu que não vou trabalhar para os
                      outros&quot; então aprendi com ele.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Só que não recomendo montar um negócio sem conhecimento, o
                      caminho que escolhi foi oque fez aprender errando e ser
                      essa pessoa inteligente.
                    </span>
                  </span>
                </div>
                <div className="Question">
                  <span className="home-title2">
                    Você tem namorada?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description4">
                    <span>
                      Não, eu nunca me envolvi em nenhum relacionamento, por
                      conta de um crença que tinha de quer mulher só dar
                      problemas.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      isso não é verdade tirei essa crença da cabeça, no caso se
                      eu encontrar uma mulher que seja esforçada e que tenha
                      objetivos de crescer na vida nunca que seria problema
                      seria um apoio.  
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
                  <span className="home-description5">
                    No momento não, comecei minha jornada na internet apartir do
                    meu site que lancei em novembro de 2022 em ferveriro de 2023
                    já quero está morando no meu apê .
                  </span>
                </div>
              </div>
              <div className="home-column4">
                <div className="home-question3 Question">
                  <span className="home-title4">
                    Quando você vai ficar rico?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description6">
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
                  <span className="home-description7">
                    <span>
                      antes eu dizia que era empreendedor, por ter apenas o
                      ensino médio, mas eu quero me tornar o maior Business
                      Development Manager do brasil .
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      vou lançar uma startup de educação empreendedora que vai
                      ser conhecida em alguns anos.
                    </span>
                    <br></br>
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
                  <span className="home-description8">
                    <span>
                      antes eu dizia que tinha muitos Sonhos,mas hoje eu me vejo
                      com objetivo.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      o sonho é algo distante mais que levou tempo para
                      organizar e se tornar um objetivo para minha vida.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      eu já até realizei um dos meus sonhos, antes dizia que
                      seria um sonho morar em são Paulo e hoje aqui estou.
                    </span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-get-started1">
          <div className="home-content8">
            <div className="home-heading11">
              <h2 className="home-text77"> acompanhe o primo!</h2>
              <span className="home-text78">em uma das nossas redes</span>
            </div>
            <div className="home-hero-buttons1">
              <div className="home-i-o-s-btn">
                <a
                  href="https://www.youtube.com/channel/UCJm1tVBdjFofO3cNz1g6pxQ"
                  className="home-link13"
                >
                  <img
                    alt="image"
                    src="/playground_assets/youtube-1500h.png"
                    className="home-image07"
                  />
                </a>
              </div>
              <div className="home-i-o-s-btn1">
                <a
                  href="https://www.tiktok.com/@oprimojunior"
                  className="home-link14"
                >
                  <img
                    alt="image"
                    src="/playground_assets/tik-tok-1500h.png"
                    className="home-image08"
                  />
                </a>
              </div>
              <div className="home-android-btn1">
                <a
                  href="https://www.instagram.com/oprimojunior/"
                  className="home-link15"
                >
                  <img
                    alt="image"
                    src="/playground_assets/instagram-1500h.png"
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
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-title {
            font-size: 64px;
            font-style: normal;
            font-family: Source Sans Pro;
            font-weight: 700;
            line-height: 76px;
          }
          .home-caption {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 400;
            line-height: 27px;
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
            margin: auto;
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
          .home-stats {
            width: 100%;
            height: 505px;
            display: flex;
            z-index: 10;
            max-width: 1200px;
            margin-top: 100px;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: 10px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-stat {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-caption1 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-description {
            width: 100%;
            font-size: 18px;
            max-width: 350px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 700;
            line-height: 27px;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-stat1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-caption2 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-description1 {
            width: 100%;
            font-size: 18px;
            max-width: 350px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 700;
            line-height: 27px;
          }
          .home-stat2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-caption3 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-description2 {
            width: 100%;
            font-size: 18px;
            max-width: 350px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 700;
            line-height: 27px;
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
            background-color: #000000;
          }
          .home-content1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
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
          .home-heading01 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text01 {
            font-size: 24px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
            line-height: 36px;
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
          .home-text02 {
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
          .home-text05 {
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
          .home-heading02 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text07 {
            font-size: 40px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-text08 {
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
          .home-text09 {
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
            height: 555px;
            display: flex;
            overflow: hidden;
            max-width: 1200px;
            margin-top: 50px;
            align-items: center;
            border-radius: 16px;
            flex-direction: column;
            justify-content: center;
            background-color: #231d23;
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
            padding-bottom: 103px;
            background-size: auto;
            justify-content: center;
            background-image: url('/playground_assets/2333277-ai%20%5B3%5D%20%5B3%5D-1200w.png');
            background-repeat: repeat-y;
            background-position: top;
          }
          .home-text12 {
            color: var(--dl-color-gray-900);
            width: 100%;
            font-size: 40px;
            max-width: 490px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-link06 {
            display: contents;
          }
          .home-book-btn {
            cursor: pointer;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            text-decoration: none;
            background-color: #ffaf00;
          }
          .home-text13 {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 22px;
            max-width: 490px;
            font-style: normal;
            font-family: Roboto Condensed;
            font-weight: 700;
          }
          .home-div1 {
            width: 668px;
            height: 345px;
            align-self: center;
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
          .home-text14 {
            font-style: normal;
            font-weight: 500;
          }
          .home-heading03 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text15 {
            width: 100%;
            font-size: 40px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-pricing-plans {
            flex: 1;
            width: 100%;
            display: grid;
            overflow: hidden;
            align-items: flex-start;
            border-color: #dbdbdb;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #231d23;
            grid-template-columns: auto auto;
          }
          .home-plans {
            flex: 1;
            height: 100%;
            display: grid;
            padding-top: var(--dl-space-space-twounits);
            padding-left: TwoUnits;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: #ffffff;
            grid-template-columns: auto auto auto;
          }
          .home-plan {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            border-color: #dbdbdb;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
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
          .home-heading04 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text16 {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text17 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text18 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
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
          .home-text19 {
            font-style: normal;
            font-weight: 500;
          }
          .home-plan1 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            border-color: #dbdbdb;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
            border-right-width: 1px;
          }
          .home-top1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            border-color: #dbdbdb;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading05 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text20 {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text21 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost1 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text22 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-bottom1 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-check-list1 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
          }
          .home-link08 {
            display: contents;
          }
          .home-button1 {
            width: 100%;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            text-decoration: none;
            background-color: #ffaf00;
          }
          .home-button1:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text23 {
            font-style: normal;
            font-weight: 500;
          }
          .home-expand {
            flex: 0.3;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-overlay1 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-image06 {
            width: 100px;
            object-fit: cover;
          }
          .home-header3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading06 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 256px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text24 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text25 {
            color: #ffaf00;
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 31px;
          }
          .home-check-list2 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-check {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text26 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-check1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon02 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text27 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-check2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon04 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text28 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-link09 {
            display: contents;
          }
          .home-button2 {
            width: 100%;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-gray-900);
          }
          .home-button2:hover {
            background-color: rgba(0, 0, 0, 0.5);
          }
          .home-text29 {
            color: var(--dl-color-gray-black);
            font-size: 22px;
            font-style: normal;
            font-family: Roboto Condensed;
            font-weight: 700;
          }
          .home-plans1 {
            width: 100%;
            height: 100%;
            display: none;
            align-items: center;
            flex-direction: column;
          }
          .home-plan2 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            border-color: #dbdbdb;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
            border-right-width: 1px;
          }
          .home-top2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            border-color: #dbdbdb;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading07 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text32 {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text33 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text34 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-check-list3 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
          }
          .home-bottom2 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-button3 {
            width: 100%;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: #ade2df;
          }
          .home-button3:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text35 {
            font-style: normal;
            font-weight: 500;
          }
          .home-plan3 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            border-color: #dbdbdb;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
            border-right-width: 1px;
          }
          .home-top3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            border-color: #dbdbdb;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading08 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text36 {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text37 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost3 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text38 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-check-list4 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
          }
          .home-bottom3 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-link10 {
            display: contents;
          }
          .home-button4 {
            width: 100%;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .home-button4:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text39 {
            font-style: normal;
            font-weight: 500;
          }
          .home-expand1 {
            flex: 0.3;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-overlay2 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/playground_assets/planbackground.svg');
          }
          .home-header4 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading09 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 256px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text40 {
            color: #ffffff;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
          }
          .home-text41 {
            color: rgb(193, 255, 252);
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 26px;
          }
          .home-check-list5 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-check3 {
            gap: var(--dl-space-space-halfunit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-check4 {
            gap: var(--dl-space-space-halfunit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-check5 {
            gap: var(--dl-space-space-halfunit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-check-list6 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-check6 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon06 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text42 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-check7 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon08 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text43 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-check8 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon10 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text44 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-link11 {
            display: contents;
          }
          .home-button5 {
            width: 100%;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            text-decoration: none;
            background-color: #000000;
          }
          .home-button5:hover {
            background-color: rgba(0, 0, 0, 0.5);
          }
          .home-text45 {
            color: rgb(255, 255, 255);
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
          .home-text48 {
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
          .home-link12 {
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
          .home-header5 {
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
          .home-text49 {
            font-style: normal;
            font-weight: 500;
          }
          .home-heading10 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text52 {
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
          .home-title1 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
          }
          .home-description3 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-title2 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
          }
          .home-description4 {
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
          .home-description5 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-column4 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-question3 {
            border-right-width: 0px;
          }
          .home-title4 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
          }
          .home-description6 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-question4 {
            border-right-width: 0px;
          }
          .home-title5 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
          }
          .home-description7 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-question5 {
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-title6 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
          }
          .home-description8 {
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
            background-color: #ffaf00;
          }
          .home-content8 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .home-heading11 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text77 {
            color: var(--dl-color-gray-black);
            font-size: 64px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text78 {
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
          .home-link13 {
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
          .home-link14 {
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
          .home-link15 {
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
            .home-stats {
              height: 834px;
              padding-top: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-stat {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-bottom: var(--dl-space-space-threeunits);
              border-right-width: 0px;
            }
            .home-caption1 {
              text-align: center;
              line-height: 32px;
            }
            .home-stat1 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-caption2 {
              text-align: center;
              line-height: 32px;
            }
            .home-stat2 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
              border-left-width: 0px;
            }
            .home-caption3 {
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
            .home-pricing {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content6 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-header2 {
              gap: var(--dl-space-space-unit);
            }
            .home-pricing-plans {
              grid-template-columns: none;
            }
            .home-plans {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-overlay1 {
              width: 100%;
              align-self: center;
              align-items: center;
              background-size: contain;
              justify-content: space-between;
              background-repeat: no-repeat;
              background-position: right;
            }
            .home-header3 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading06 {
              gap: var(--dl-space-space-halfunit);
              max-width: 600px;
            }
            .home-text24 {
              font-size: 18px;
            }
            .home-text25 {
              font-size: 20px;
              line-height: 26px;
            }
            .home-text26 {
              line-height: 21px;
            }
            .home-text27 {
              line-height: 21px;
            }
            .home-text28 {
              line-height: 21px;
            }
            .home-button2 {
              margin-top: var(--dl-space-space-threeunits);
            }
            .home-overlay2 {
              width: 100%;
              justify-content: space-between;
            }
            .home-header4 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading09 {
              gap: var(--dl-space-space-halfunit);
              max-width: 600px;
            }
            .home-text40 {
              font-size: 18px;
            }
            .home-text41 {
              font-size: 20px;
              line-height: 26px;
            }
            .home-text42 {
              line-height: 21px;
            }
            .home-text43 {
              line-height: 21px;
            }
            .home-text44 {
              line-height: 21px;
            }
            .home-button5 {
              margin-top: var(--dl-space-space-threeunits);
            }
            .home-get-started1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content8 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading11 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text77 {
              font-size: 40px;
            }
            .home-text78 {
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
            .home-description {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption2 {
              font-size: 32px;
            }
            .home-description1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption3 {
              font-size: 32px;
            }
            .home-description2 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text {
              width: 100%;
              font-size: 32px;
              max-width: 640px;
            }
            .home-video-container {
              gap: var(--dl-space-space-threeunits);
            }
            .home-heading01 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text01 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-text05 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text07 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text08 {
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
            .home-text12 {
              font-size: 32px;
            }
            .home-pasted-image5 {
              right: 0px;
              bottom: 0px;
              height: 300px;
              display: flex;
              position: absolute;
              align-self: flex-end;
            }
            .home-text15 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-pricing-plans {
              display: none;
            }
            .home-plans1 {
              gap: var(--dl-space-space-oneandhalfunits);
              display: flex;
            }
            .home-plan2 {
              max-width: 100%;
              padding-top: var(--dl-space-space-threeunits);
              border-width: 1px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              border-radius: 16px;
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
              background-color: #ffffff;
            }
            .home-top2 {
              width: 100%;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading07 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text32 {
              font-size: 18px;
            }
            .home-text34 {
              font-size: 32px;
              line-height: 32px;
            }
            .home-button3 {
              background-color: #ffaf00;
            }
            .home-plan3 {
              max-width: 100%;
              padding-top: var(--dl-space-space-threeunits);
              border-width: 1px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              border-radius: 16px;
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
              background-color: #ffffff;
              border-right-width: 1px;
            }
            .home-top3 {
              width: 100%;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading08 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text36 {
              font-size: 18px;
            }
            .home-text38 {
              font-size: 32px;
              line-height: 32px;
            }
            .home-button4 {
              background-color: #ffaf00;
            }
            .home-text39 {
              font-weight: 500;
            }
            .home-expand1 {
              flex: 0 0 auto;
              width: 100%;
              border-radius: 16px;
              background-color: #375ee0;
            }
            .home-overlay2 {
              align-items: center;
              background-size: contain;
              justify-content: center;
              background-repeat: no-repeat;
              background-position: top right;
            }
            .home-f-a-q {
              width: 100%;
            }
            .home-content7 {
              gap: var(--dl-space-space-twounits);
            }
            .home-text49 {
              font-size: 14px;
            }
            .home-text52 {
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
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
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
              font-size: 14px;
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
              width: 100%;
            }
            .home-images {
              bottom: -300px;
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
            .home-iframe {
              width: 325px;
              height: 545px;
            }
            .home-image03 {
              width: 100%;
              max-width: 400px;
            }
            .home-image05 {
              width: 100%;
              max-width: 400px;
            }
            .home-overlay {
              padding-top: 135px;
            }
            .home-text12 {
              text-align: center;
            }
            .home-book-btn {
              align-self: center;
            }
            .home-div1 {
              width: 320px;
              height: 362px;
            }
            .home-pasted-image5 {
              height: 225px;
            }
            .home-text16 {
              font-size: 20px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
            }
            .home-text17 {
              font-family: Poppins;
              line-height: 24px;
            }
            .home-text20 {
              font-size: 20px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
            }
            .home-text21 {
              font-family: Poppins;
              line-height: 24px;
            }
            .home-text24 {
              color: rgb(255, 255, 255);
              font-size: 20px;
              font-style: normal;
              font-weight: 600;
            }
            .home-text25 {
              color: rgb(255, 175, 0);
              font-size: 24px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 31px;
            }
            .home-text32 {
              font-size: 18px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
            }
            .home-text33 {
              font-family: Poppins;
              line-height: 24px;
            }
            .home-text34 {
              font-size: 32px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 32px;
            }
            .home-button3 {
              background-color: #ffaf00;
            }
            .home-text35 {
              font-weight: 500;
            }
            .home-text36 {
              font-size: 18px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
            }
            .home-text37 {
              font-family: Poppins;
              line-height: 24px;
            }
            .home-text38 {
              font-size: 32px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 32px;
            }
            .home-button4 {
              background-color: #ffaf00;
            }
            .home-text39 {
              font-style: normal;
              font-weight: 500;
            }
            .home-text40 {
              color: #ffaf00;
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .home-text41 {
              color: #ffffff;
              font-size: 20px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 26px;
            }
            .home-text45 {
              color: rgb(255, 255, 255);
              font-style: normal;
              font-weight: 500;
            }
            .home-help {
              align-items: center;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
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
