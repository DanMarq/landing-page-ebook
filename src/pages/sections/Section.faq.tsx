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
                        <Accordion.Header>
                            O que preciso para ter acesso a entrevista com empresa especializada em imigração?
                        </Accordion.Header>
                            <Accordion.Body>
                            Para ter acesso a entrevista com a empresa especializada em imigração, falando em português, você precisa submeter o seu currículo (seguindo dicas do template que disponibilizaremos para você) para que avaliem previamente a sua possibilidade de êxito ao submeter para qualquer um dos vistos que dão direito a Morar Legalmente nos Estados Unidos. Após essa avaliação, a empresa entrará em contato para agendar a sua entrevista. Nós da Sociedade Coletiva não nos responsabilizamos pela entrevista, conduta das empresas envolvidas ou processos necessários, faremos a ponte entre as pessoas que adquirirem o nosso material e os parceiros que julgamos serem os melhores em cada ocasião.
                            </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                        Quando recebo os bônus?
                        </Accordion.Header>
                            <Accordion.Body>
                            Após feita a compra do ebook principal, em 7 dias enviaremos todos os demais materiais listados acima como bônus, sem custo adicional. Todos os materiais são Copyrights da Sociedade Coletiva.
                            </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                        Minha compra é segura? Depois de comprar, em quanto tempo recebo o Ebook “Você Morando Legalmente nos Estados Unidos”?
                        </Accordion.Header>
                            <Accordion.Body>
                            A compra é totalmente segura e utilizamos plataformas certificadas pelo mercado, com a possibilidade de pagamento via Pix, Boleto e Cartão de Crédito. Após a confirmação do pagamento, você receberá em minutos o Ebook “Você Morando Legalmente nos Estados Unidos” e em até 7 dias todos os demais bônus que listamos aqui nesta página.
                            </Accordion.Body>
                    </Accordion.Item>

                    </Accordion>
                  
                </Col>
              </Row>
            </Container>
        </section>

    )
}