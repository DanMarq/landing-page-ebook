import Image from 'next/image'

import {Container, Row, Col} from 'react-bootstrap'

export default function SectionGarantia() {

    return (
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
              <Row className='mt-3'>
                <Col lg={4} className='d-flex justify-content-md-center align-items-center'>
                    <div><Image src={'/assets/icon-verified.svg'} width={40} height={20} alt='' className='img-fluid' /></div>
                    <div className='ms-3 d-flex flex-column'>
                        <span>Compra</span>
                        <span className='fw-bold'>Segura</span>
                    </div>
                </Col>
                
                <Col lg={4} className='d-flex justify-content-md-center align-items-center'>
                    <div><Image src={'/assets/icon-buy.svg'} width={40} height={20} alt='' className='img-fluid' /></div>
                    <div className='ms-3 d-flex flex-column'>
                        <span>Satisfação</span>
                        <span className='fw-bold'>Garantida</span>
                    </div>
                </Col>

                <Col lg={4} className='d-flex justify-content-md-center align-items-center'>
                    <div><Image src={'/assets/icon-privacy.svg'} width={40} height={20} alt='' className='img-fluid' /></div>
                    <div className='ms-3 d-flex flex-column'>
                        <span>Privacidade</span>
                        <span className='fw-bold'>Protegida</span>
                    </div>
                </Col>
              </Row>
            </Container>
        </section>

    )
}