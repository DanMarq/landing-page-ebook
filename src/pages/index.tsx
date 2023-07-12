import Head from 'next/head'
import Image from 'next/image'

import {Container, Row, Col, Button} from 'react-bootstrap'

import { Barlow } from 'next/font/google'
import Footer from './components/Footer'
import SectionHeader from './sections/Section.header';
import SectionAtalhos from './sections/Section.atalhos';
import SectionDicas from './sections/Section.dicas';
import SectionGuia from './sections/Section.guia';
import SectionBonus from './sections/Section.bonus'
import SectionDesconto from './sections/Section.desconto'

const barlow = Barlow({
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

/* Valores Ebook */
const ebookPrincipal:number = 97.00
const ebookEb2Niw:number = 49.00
const ebookBonus:number = 49.90
const templateCurriculo:number = 29.90
const paginaMigration:number = 299.00
const totalValor:number = ebookPrincipal + ebookEb2Niw + ebookBonus + templateCurriculo + paginaMigration

export default function Home() {
  return (
    <>
      <Head>
        <title>Você morando legalmente nos estados Unidos</title>
        <meta name="description" content="Descubra os segredos dos vistos para residência nos EUA. Ebook completo + 3 bônus! Aprenda como viver legalmente nos Estados Unidos, em família ou sozinho. Entrevistas grátis com especialistas em migração. Green Card e visto EB2-NIW. Prepare-se para a vida dos seus sonhos!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png" />
        
      </Head>
      <main className={barlow.className}>
          <SectionHeader />
          <SectionAtalhos />
          <SectionDicas />
          <SectionGuia />
          <SectionBonus />

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

        <SectionDesconto />

        <section className='py-5 px-3 lg:px-5 section-price'>
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
                  <h6><span>R$</span>29,90</h6>
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
