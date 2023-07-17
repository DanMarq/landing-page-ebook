import {Container, Row, Col, Accordion} from 'react-bootstrap'

export default function SectionFaq() {

    return (
        <section className='px-3 px-lg-5'>
            <Container className='py-5'>
              <Row>
                <Col lg={{ span: 8, offset: 2 }} className=''>
                <h2 className='text-center mb-5'>Perguntas <span className='title-bold'>e Respostas</span></h2>
                  <Accordion defaultActiveKey="0" flush>

                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Quando recebo os bônus?</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. 
                            </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>O que preciso para ter acesso a entrevista com empresa especializada em imigração?</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                            </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Minha compra é segura? Depois de comprar em quanto tempo recebo o Ebook Você Morando Legamente nos Estados Unidos?</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                            </Accordion.Body>
                    </Accordion.Item>

                    </Accordion>
                  
                </Col>
              </Row>
            </Container>
        </section>

    )
}