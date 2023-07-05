import Head from 'next/head'
import Image from 'next/image'

import {Container, Row, Col, Button} from 'react-bootstrap'

import { BsCheckCircle, BsXCircle, BsFillBookmarkCheckFill } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";

import { Barlow } from 'next/font/google'
import Video from './components/Video'
import Footer from './components/Footer'

const barlow = Barlow({
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

/* Conteudo */
const tituloPrincipal:string = 'Com a informação certa em mãos, você economiza muito tempo e dinheiro para realizar o seu sonho!'

/* Valores Ebook */
const ebookPrincipal:number = 97.00
const ebookEb2Niw:number = 49.00
const ebookBonus:number = 49.90
const templateCurriculo:number = 29.90
const paginaMigration:number = 299.00
const totalValor:number = ebookPrincipal + ebookEb2Niw + ebookBonus + templateCurriculo + paginaMigration

const naoFaria = [
  'Não tentaria fazer o processo sem ter nenhum conhecimento sobre o assunto, não há espaço para aventureiros por aqui, e uma porta fechada pode não se abrir novamente',
  'Puxar informações desorganizadas e seguir tentando sem conhecer cada passo, pois isso pode te fazer voltar alguns passos, gastando mais tempo e dinheiro',
  'Se aventurar com vistos de estudante ou turismo e acreditar que uma vez chegando aqui, irá se “virar”. Esse pode ser um erro bem grave e pode colocar tudo a perder'
]

const faria = [
  'Usaria todo o conteúdo que separei após anos de estudo e prática nesse processo de Morar Legalmente nos Estados Unidos',
  'Organizaria cada passo para saber que documentos devo ter, quais competências podem me ajudar e com isso economizaria ainda mais tempo e dinheiro no processo',
  'E havendo a vontade de acelerar ainda mais, usaria um dos bônus que separei para você, uma assessoria personalizada por profissionais gabaritados especialistas nesse processo de Imigração com a finalidade de Moradia Lega e também aplicação para o Green Card'
]

const ebookTopicos = [
  'Quem pode morar nos Estados Unidos?',
  'Qual é a diferença entre um Visto para morar, o Green Card e ser considerado um(a) cidadã(o) Americano',
  'Quais são os vistos que dão direito ao Green Card?',
  'Quais são os estados com melhor Custo x Benefício?',
  'Como arrumar emprego, legalmente, nos Estados Unidos?',
  'O que fazer para ter um processo tranquilo e sem surpresas',
  'Como funciona a questão de imposto de renda nos Estados Unidos',
  'E mais. . .'
]


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

        <section className='py-5 solucao'>
         <div className='py-5'>
         <Row className='px-3 px-lg-5 py-5 mx-0'>

         <Col lg={{span: 4, offset: 2}} className=''>
                <h2 className='pb-4'>
                  Sim, existem atalhos legais que vão te <span className='title-bold'>fazer chegar onde quer!</span>
                </h2>

                <p>
                Não estou falando em <b>jeitinho</b> não, pois depois de anos correndo atrás do sonho da minha família, pude entender cada passo dado e descobrir os
                caminhos mais curtos para chegar legalmente morando nos EUA.</p>
                
                <p>
                Além disso, descobri os caminhos certos que que fizeram economizar (além de muito
                tempo) muito dinheiro para conquistar o Green Card!
                </p>
                
                <p>
                Sim, após anos residindo nos Estados Unidos, e tendo apresentado esse
                mesmo caminho para diversos amigos próximos, tenho segurança para dizer
                que você também pode construir o seu próprio caminho sem perder tanto
                tempo ou dinheiro nesse processo.
                </p>
                
                <p>
                Se você tem a vontade de morar em um país que te abre infinitas portas, traz
                qualidade de vida para você e sua família, te coloca profissionalmente em
                posições diferenciadas, morar legalmente nos Estados Unidos deve ser o seu
                objetivo principal!
                </p>
                
                <p>
                Sendo consultado por mais e mais pessoas interessadas em fazer este
                processo de imigração, resolvi reunir esse conhecimento valiosíssimo em um
                material fácil e muito prático de ler.
                </p>
                
                <p>
                Tenho certeza que você irá enxergar de
                forma muito mais clara como trilhar o seu caminho até o Sonho Americano.
                </p>

                <Button className='mt-4'>Quero essa oportunidade</Button>
            </Col>

            <Col lg={6}>
               
            </Col>
           
          </Row>
         </div>
        </section>

        <section className='py-5 dicas'>
         <div className='py-5'>
         <Row className='px-3 px-lg-5 mx-0'>
            
            <Col lg={4}>
                
            </Col>
            
            <Col lg={{span: 4, offset: 2}}>
                <h2 className='pb-4'>
                Vou começar já <span className='title-bold'>te ajudando com essas dicas!</span>
                </h2>
                
                  <h4 className='mb-3'>O que eu <b className='text-uppercase text-danger'>não faria</b> em seu lugar:</h4>
                      <ul className='list-group mb-4'>
                       {naoFaria.map((conteudo, i)=>(
                         <li key={i} className='list-group-item list-group-item-danger'>
                         <BsXCircle className='me-2 fs-4' />
                         {conteudo}
                         </li>
                       ))}
                    </ul>  

                    <h4 className='mb-3'>O que <b className='text-uppercase text-success'>eu faria</b> em seu lugar</h4>
                      <ul className='list-group'>
                       {faria.map((conteudo, i)=>(
                         <li key={i} className='list-group-item list-group-item-success'>
                         <BsCheckCircle className='me-2 fs-4'/>
                         {conteudo}
                         </li>
                       ))}
                      </ul>  
                
            </Col>

          </Row>
         </div>
        </section>

        <section className='py-5 desafio'>
         <div className='py-5'>
          <Row className='px-3 px-lg-5 mx-0'>

            <Col lg={{span: 4, offset: 2}} className='mt-5'>
                  <h2>
                  Pensando em todos esses pontos eu criei o <span className='title-bold'>E-book: Você Morando Legalmente nos Estados Unidos</span>
                  </h2>
                  <p>
                  Um Guia Prático, fácil de ler em qualquer lugar e recheado de informações que farão você enxergar o seu caminho, informações sobre os tipos de vistos indicados <i>(EB-2, EB-3, EB-5, IR,  EB- 2 NIW, etc)</i>, elegibilidade e mais. 
                  </p>

                  <ul className='list-group'>
                   {ebookTopicos.map((conteudo, i)=> (
                    <li key={i} className='list-group-item p-3'>
                      <BsFillBookmarkCheckFill className='me-2 fs-5 text-primary' />
                      {conteudo}
                    </li>
                   ))}
                  </ul>
            </Col>

            <Col lg={6} className='text-center mt-5'>
                  <Image src={'/assets/ebook-morando-legalmente-usa.png'} width={500} height={661} className='img-fluid' alt='' />
                 <div className='text-end w-75'>
                      <h3 className=''>E como forma de ajudar você, <span className='title-bold'>este ebook custa menos do que um <span className="text-decoration-underline"><IoFastFoodOutline className='me-2' />Big Mac!</span></span>
                        </h3>
                        <p className='mt-4'>de <span className='text-decoration-line-through'>R$ {ebookPrincipal.toFixed(2).replace('.', ',')}</span> por 
                        <span className='fs-1 text-bold'> R$ 19,90</span>
                        </p>
                 </div>
            </Col>

          </Row>
        </div>
        </section>

        <section className='px-3 px-lg-5 bonus'>
            <Container className='py-5'>
              <Row className='mb-5'>
                <Col lg={12} className='text-center'>
                  <h2>
                  E pra te ajudar ainda mais, separei ainda mais alguns bônus para quem adquirir o <span className='title-bold'>Ebook: Você Morando Legalmente nos Estados Unidos</span>.
                  <br />São eles: 
                  </h2>
                </Col>
              </Row>

              <Row className='mb-5'>
                <Col lg={6} className='bonus-image-left'>
                      <Image src={'/assets/ebook-eb2-niw.png'} width={300} height={396} className='img-fluid' alt='' />
                </Col>

                <Col lg={{span: 4, offset: 0}} className='d-flex flex-column justify-content-center'>
                      <h3 className='mb-4 title-medium'>Ebook EB-2 NIW O caminho para a Residência Permanente nos EUA </h3>
                      <p>
                      Com todas as informações sobre um dos vistos mais desejados por profissionais de diversas áreas, mostrando os pontos de atenção e caminhos específicos para a conquista deste visto.
                      </p>

                      <p className='fs-4 fw-bold'>
                      <span className='text-decoration-line-through fs-6 fw-normal'>
                        de R$ {ebookEb2Niw.toFixed(2).replace('.', ',')}</span> por R$ 0,00
                      </p>
                  </Col>
              </Row>

              <Row className='mb-5'>
                <Col lg={{span: 4, offset: 2}} className='d-flex flex-column justify-content-center'>
                      <h3 className='mb-4 title-medium'>Ebook Green Card o passaporte para o SONHO AMERICANO</h3>
                      <p>
                      Com informações focadas nos tipos e características de vistos que se enquadram e facilitam o processe de aplicação para o Green Card. 
                      </p>
                      
                      <p className='fs-4 fw-bold'>
                      <span className='text-decoration-line-through fs-6 fw-normal'>
                        de R$ {ebookBonus.toFixed(2).replace('.', ',')}</span> por R$ 0,00
                      </p>
                </Col>
                <Col lg={6} className='bonus-image-right'>
                      <Image src={'/assets/ebook-green-card.png'} width={274} height={380} className='img-fluid' alt='' />
                </Col>
              </Row>

              <Row className='mb-5'>
                <Col lg={6} className='bonus-image-left'>
                      <Image src={'/assets/resume.png'} width={380} height={396} className='img-fluid' alt='' />
                </Col>
                <Col lg={{span: 4, offset: 0}} className='d-flex flex-column justify-content-center'>
                      <h3 className='mb-4 title-medium'>
                        Template de Currículo - Estrutura para Conquistar Oportunidades nos Estados Unidos
                      </h3>
                      <p>
                      Template de modelo de Currículo com estrutura e explicação, para que possa adiantar um processo importante em sua jornada para a conquista do visto desejado
                      </p>
                      <p className='fs-4 fw-bold'>
                      <span className='text-decoration-line-through fs-6 fw-normal'>
                        de R$ {templateCurriculo.toFixed(2).replace('.', ',')}</span> por R$ 0,00
                      </p>
                  </Col>
              </Row>

              <Row className='mb-5'>
                <Col lg={{span: 4, offset: 2}} className='d-flex flex-column justify-content-center'>
                      <h3 className='mb-4 title-medium'>Página de Informações - Consulta com Especialista em Imigração</h3>
                      <p>
                      Acesso a uma entrevista gratuita com uma empresa especializada em processos imigratórios para os Estados Unidos. Um escritório Americano, falando em seu idioma e que pode te ajudar a esclarecer dúvidas e encontrar os seus pontos fortes no processo de obtenção do sonhado visto.
                      </p>
                      <p className='fs-4 fw-bold'>
                      <span className='text-decoration-line-through fs-6 fw-normal'>
                        de R$ {paginaMigration.toFixed(2).replace('.', ',')}</span> por R$ 0,00
                      </p>
                </Col>
                <Col lg={6} className='bonus-image-right'>
                      <Image src={'/assets/site.png'} width={380} height={396} className='img-fluid' alt='' />
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

        <section className='px-3 px-lg-5'>
            <Container className='py-5'>
              <Row>
                <Col lg={12} className='text-center'>
                  <h2 className='title-bold mb-4'>Garantia de 7 dias!</h2>
                  <p>
                    Tenho tanta certeza de que esse <b>conteúdo vai mudar a sua trajetória</b> que se você comprar e <b>em 7 dias</b> não achar que ele valeu o investimento, <b>devolveremos o seu dinheiro sem qualquer questionamento!</b>
                  </p>
                  <p>Basta mandar um email e faço a devolução integral.</p>
                </Col>
              </Row>
            </Container>
        </section>

        <section className='py-5 lg:px-5 desconto'>
          <Container className='py-5 text-center'>
            <Row className=''>
              <Col lg={12}>
                  <h3 className='pb-4'>
                    Adiquirindo HOJE mesmo o EBOOK, você vai levar
                    </h3>
              </Col>
            </Row>

            <Row className='bonus-price mb-4'>
              <Col xs={6} lg={4}><h6>Ebook Principal - Você Morando Legalmente nos Estados Unidos</h6></Col>
              <Col xs={3} lg={6} className='d-flex align-self-center'><div className='dotted-line'></div></Col>
              <Col xs={3} lg={2} className='d-flex align-self-end'><p>R$ {ebookPrincipal.toFixed(2).replace('.', ',')}</p></Col>
            </Row>

            <Row className='bonus-price mb-4'>
              <Col xs={6} lg={4}><h6>Ebook EB-2 NIW O caminho para a Residência Permanente nos EUA</h6></Col>
              <Col xs={3} lg={6} className='d-flex align-self-center'><div className='dotted-line'></div></Col>
              <Col xs={3} lg={2} className='d-flex align-self-end'><p>R$ {ebookEb2Niw.toFixed(2).replace('.', ',')}</p></Col>
            </Row>

            <Row className='bonus-price mb-4'>
              <Col xs={6} lg={4}><h6>Ebook Green Card - O Passaporte para o Sonho Americano</h6></Col>
              <Col xs={3} lg={6} className='d-flex align-self-center'><div className='dotted-line'></div></Col>
              <Col xs={3} lg={2} className='d-flex align-self-end'><p>R$ {ebookBonus.toFixed(2).replace('.', ',')}</p></Col>
            </Row>

            <Row className='bonus-price mb-4'>
              <Col xs={6} lg={4}><h6>Template de Currículo - Estrutura completa e atualizada</h6></Col>
              <Col xs={3} lg={6} className='d-flex align-self-center'><div className='dotted-line'></div></Col>
              <Col xs={3} lg={2} className='d-flex align-self-end'><p>R$ {templateCurriculo.toFixed(2).replace('.', ',')}</p></Col>
            </Row>

            <Row className='bonus-price mb-4'>
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
                Quanto vale ter o seu caminho sem surpresas, economizando tempo e dinheiro até<span className='title-bold'> conquistar a Residência Legal nos Estados Unidos?</span>
                </h3>
                
               <h5>Quanto vale ter qualidade de vida em um país de primeiro mundo?</h5>
               <h5>Quanto vale ter oportunidades profissionais que você não encontra em nenhum outro lugar?</h5>
               <h5>Quanto vale para você conquistar um novo emprego e desfrutar o que esse país tem a oferecer?</h5>
               <h5><b>Quanto vale ter os atalhos legais que irão te fazer economizar dezenas de milhares de dólares no processo de busca pelos vistos certos?</b></h5>
                </Col>
              <Col lg={6} className='text-center text-section-price'>
                <Image src={'/assets/logo.svg'} width={500} height={141} alt='' className='mt-5 mb-4 img-fluid' />
                <p>Por tempo limitado <b>Ebook + os 4 bônus de:</b></p>
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
