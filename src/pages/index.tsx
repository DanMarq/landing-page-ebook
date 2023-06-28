import Head from 'next/head'
import Image from 'next/image'

import {Container, Row, Col, Button} from 'react-bootstrap'

import { Barlow } from 'next/font/google'
import Video from './components/Video'
import Slider from './components/Slider'
import Footer from './components/Footer'

const barlow = Barlow({
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

/* Conteudo */
const tituloPrincipal:string = 'Descubra o caminho para morar nos Estados Unidos legalmente'

/* Valores Ebook */
const ebookPrincipal:number = 59.90
const ebookBonus:number = 59.90
const templateCurriculo:number = 28.90
const paginaMigration:number = 0.00
const totalValor:number = ebookPrincipal + ebookBonus + templateCurriculo + paginaMigration


export default function Home() {
  return (
    <>
      <Head>
        <title>Você morando legalmente nos estados Unidos</title>
        <meta name="description" content="Descubra os segredos dos vistos para residência nos EUA. Ebook completo + 3 bônus! Aprenda como viver legalmente nos Estados Unidos, em família ou sozinho. Entrevistas grátis com especialistas em migração. Green Card e visto EB2-NIW. Prepare-se para a vida dos seus sonhos!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={barlow.className}>

        <header className='header-section'>
          <Container>
            <Row>
              <Col className='text-center'>
                <div className='wraper'>
                  <Image src={'/assets/logo-white.svg'} width={350} height={90} alt='' className='img-fluid mb-5' />
                  <h1>{tituloPrincipal}</h1>
                  <Video />
                  <Button className='mt-3 white-bg' size='lg'>Adiquira agora o seu ebook</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </header>

        <section className='py-5 lg:px-5 testimonial'>
            <Row className='px-5 py-5 mx-0'>

              <Col lg={8}>
                <h2>
                  <span className='title-bold'>Histórias inspiradoras de quem já transformou o sonho em realidade,</span>
                   enfrentando desafios e superando obstáculos com o conhecimento correto.
                   </h2>

                   <Slider />

                   <div className='text-center mt-2'>
                   <Button size='lg' className='white-bg'>Quero adquirar agora!</Button>
                   </div>
              </Col>

              <Col lg={4} className='text-center mt-5'>
                <Image src={'/assets/ebook-morando-legalmente-usa.png'} width={500} height={500} className='img-fluid' alt='' />
              </Col>

            </Row>
        </section>

        <section className='py-5 lg:px-5 desafio'>
         <div className='py-5'>
         <Row className='px-5 py-5 mx-0'>
            <Col lg={6}>
                <Image src={'/assets/oportunidade-usa.png'} width={800} height={300} className='img-fluid' alt='' />
            </Col>
            <Col lg={4} className=''>
                <h2 className='pb-4'>Desafios e Incertezas de quem deseja <span className='title-bold'>morar nos Estados Unidos</span></h2>
                <p>
                Morar nos <b>Estados Unidos</b> apresenta desafios e incertezas para os brasileiros. A falta de informações confiáveis, a complexidade do <b>sistema de imigração</b> e as dificuldades em obter um Green Card são alguns dos obstáculos enfrentados.
                </p>
                <p>
                É essencial contar com fontes confiáveis, compreender os diferentes tipos de vistos e estar atualizado sobre as regulamentações. Apesar das dificuldades, há recursos e apoio disponíveis para ajudar a superar esses desafios e aumentar as chances de alcançar o sonho de morar nos Estados Unidos.
                </p>
                <Button className='mt-4'>Quero essa oportunidade</Button>
            </Col>
          </Row>
         </div>
        </section>

        <section className='py-5 lg:px-5 solucao'>
         <div className='py-5'>
         <Row className='px-5 py-5 mx-0'>
            <Col lg={{span: 4, offset: 2}}>
                <h2 className='pb-4'><span className='title-bold'>O Guia Definitivo para Morar nos EUA:</span> Descubra os Vistos Certos e Conquiste o Green Card!</h2>
                <p>
                Este guia completo oferece informações detalhadas sobre os diferentes tipos de vistos disponíveis, desde trabalho e estudo até investimento e reunião familiar, abordando critérios de elegibilidade, processos de inscrição e prazos importantes.
                </p>
                <p><b>Prepare-se para trilhar o caminho rumo ao seu sonho de morar nos EUA com este guia essencial em mãos!</b></p>
            </Col>
            <Col lg={6}>
                
            </Col>
          </Row>
         </div>
        </section>

        <section className='py-5 lg:px-5 bonus'>
            <Container className='py-5'>
              <Row className='mb-5'>
                <Col lg={12} className='text-center'>
                  <h2>
                  Quem adiquir hoje mesmo esse EBOOK,
                  <br />
                  <span className='title-bold'>levará para a casa de bônus:</span>
                  </h2>
                </Col>
              </Row>

              <Row className='mb-5'>
                <Col lg={6} className='bonus-image-left'>
                      <Image src={'/assets/ebook-morando-legalmente-usa.png'} width={300} height={396} className='img-fluid' alt='' />
                </Col>
                <Col lg={{span: 4, offset: 0}} className='d-flex flex-column justify-content-center'>
                      <h3 className='mb-4 title-medium'>Ebook Principal - Você Morando Legalmente nos Estados Unidos</h3>
                      <p>
                      descubra todos os segredos para alcançar o sonho de viver legalmente nos Estados Unidos. Este guia abrangente oferece informações valiosas sobre os diferentes tipos de vistos disponíveis.
                      </p>
                  </Col>
              </Row>

              <Row className='mb-5'>
                <Col lg={{span: 4, offset: 2}} className='d-flex flex-column justify-content-center'>
                      <h3 className='mb-4 title-medium'>Ebook Green Card - O Passaporte para o Sonho Americano</h3>
                      <p>
                      Descubra o caminho para obter esse documento essencial, desde os diferentes tipos de vistos que podem levar ao Green Card até as etapas e organizações necessárias para garantir o sucesso no processo de imigração.
                      </p>
                </Col>
                <Col lg={6} className='bonus-image-right'>
                      <Image src={'/assets/ebook-green-card.png'} width={274} height={380} className='img-fluid' alt='' />
                </Col>
              </Row>

              <Row className='mb-5'>
                <Col lg={6} className='bonus-image-left'>
                      <Image src={'/assets/resume.png'} width={630} height={396} className='img-fluid' alt='' />
                </Col>
                <Col lg={{span: 4, offset: 0}} className='d-flex flex-column justify-content-center'>
                      <h3 className='mb-4 title-medium'>Template de Currículo - Estrutura para Conquistar Oportunidades nos Estados Unidos</h3>
                      <p>
                      Com o Template de Currículo especialmente desenvolvido para conquistar oportunidades nos Estados Unidos, você terá a estrutura ideal para destacar suas habilidades e experiências relevantes.
                      </p>
                  </Col>
              </Row>

              <Row className='mb-5'>
                <Col lg={{span: 4, offset: 2}} className='d-flex flex-column justify-content-center'>
                      <h3 className='mb-4 title-medium'>Página de Informações - Consulta com Especialista em Imigração</h3>
                      <p>
                      Receba orientação personalizada e informações confiáveis através da Página de Informações, que oferece a oportunidade de conversar com um especialista em imigração. 
                      </p>
                </Col>
                <Col lg={6} className='bonus-image-right'>
                      <Image src={'/assets/site.png'} width={630} height={396} className='img-fluid' alt='' />
                </Col>
              </Row>

              <Row className=''>
                <Col lg={{ span: 6, offset: 3 }} className='text-center'>
                  <h2>
                  Tudo isso vai te ajudar a conquistar o seu <span className="title-bold">sonho de morar nos Estados Unidos.</span>
                  </h2>
                </Col>
              </Row>

            </Container>
        </section>

        <section className='py-5 lg:px-5 desconto'>
          <Container className='py-5 text-center'>
            <Row className=''>
              <Col lg={12}>
                  <h3 className='pb-4'>Adiquirindo HOJE mesmo o EBOOK, você vai levar</h3>
              </Col>
            </Row>

            <Row className='bonus-price'>
              <Col xs={6} lg={4}><h6>Ebook Principal - Você Morando Legalmente nos Estados Unidos</h6></Col>
              <Col xs={3} lg={6} className='d-flex align-self-center'><div className='dotted-line'></div></Col>
              <Col xs={3} lg={2} className='d-flex align-self-end'><p>R$ {ebookPrincipal.toFixed(2).replace('.', ',')}</p></Col>
            </Row>

            <Row className='bonus-price'>
              <Col xs={6} lg={4}><h6>Ebook Green Card - O Passaporte para o Sonho Americano</h6></Col>
              <Col xs={3} lg={6} className='d-flex align-self-center'><div className='dotted-line'></div></Col>
              <Col xs={3} lg={2} className='d-flex align-self-end'><p>R$ {ebookBonus.toFixed(2).replace('.', ',')}</p></Col>
            </Row>

            <Row className='bonus-price'>
              <Col xs={6} lg={4}><h6>Template de Currículo - Estrutura completa e atualizada</h6></Col>
              <Col xs={3} lg={6} className='d-flex align-self-center'><div className='dotted-line'></div></Col>
              <Col xs={3} lg={2} className='d-flex align-self-end'><p>R$ {templateCurriculo.toFixed(2).replace('.', ',')}</p></Col>
            </Row>

            <Row className='bonus-price'>
              <Col xs={6} lg={4}><h6>Página de Informações - Consulta com Especialista em Imigração</h6></Col>
              <Col xs={3} lg={6} className='d-flex align-self-center'><div className='dotted-line'></div></Col>
              <Col xs={3} lg={2} className='d-flex align-self-end'><p>R$ {paginaMigration.toFixed(2).replace('.', ',')}</p></Col>
            </Row>

            <Row className='bonus-price'>
              <Col xs={6} lg={4}><h4>Total</h4></Col>
              <Col xs={3} lg={6} className='d-flex align-self-center'><div className='dotted-line'></div></Col>
              <Col xs={3} lg={2} className='d-flex align-self-end'><p className='total'>R$ {totalValor.toFixed(2).replace('.', ',')}</p></Col>
            </Row>

          </Container>
        </section>

        <section className='py-5 lg:px-5 section-price'>
          <Container className='py-5'>
            <Row>
              <Col lg={6}>
                <h3 className='pb-4'>
              Quanto vale para você poder realizar <span className='title-bold'>seu sonho de morar nos Estados Unidos?</span>
                </h3>
                
               <h5>Quanto vale para você viver no país dos seus sonhos?</h5>
               <h5>Quanto vale para você sair do Brasil e experimetar nova cultura e explorar novas paisagens?</h5>
               <h5>Quanto vale para você conquistar um novo emprego e desfrutar o que esse país tem a oferecer?</h5>
               <h5><b>Que tal descobrir agora os passos necessários para alcançar a tão desejada vida nos Estados Unidos?</b></h5>
               <h5><b>E muito mais barato</b></h5>
                </Col>
              <Col lg={6} className='text-center text-section-price'>
                <Image src={'/assets/logo.svg'} width={500} height={141} alt='' className='mt-5 mb-4 img-fluid' />
                <h5>de {totalValor.toFixed(2).replace('.', ',')} por</h5>
                <div className='section-price-desconto'>
                  <h6><span>R$</span>0,00</h6>
                </div>
                <p>Isso mesmo, completamente <b>GRÁTIS!</b></p>
                <Button className='mt-3' size='lg'>Adiquira agora o seu ebook</Button>
              </Col>
            </Row>
          </Container>
        </section>

        <section className='py-5 lg:px-5 section-oportunidade'>
          <Container className='py-5'>
            <Col lg={{ span: 8, offset: 2 }} className='text-center'>
              <h2>Não deixe essa <span className='title-bold'>oportunidade passar!!</span></h2>
              <h3  className='mb-5'>A hora é agora de transformar seu sonho em realidade</h3>
              <p>
                Junte-se a outros sonhadores e torne-se parte da comunidade de sucesso dos que conquistaram seu lugar nos Estados Unidos.
              </p>
              <p>
                Não deixe que seu sonho seja apenas um desejo distante.
                <br />
                Viva a emoção de morar nos Estados Unidos e comece uma nova e incrível jornada em um dos países mais promissores do mundo.
              </p>
              <Button className='mt-5 white-bg' size='lg'>Adiquira agora o seu ebook</Button>
            </Col>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
