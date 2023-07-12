import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import * as prices from '../../utils/prices'

export default function SectionBonus() {
    return (
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
                <Col lg={6} className='bonus-image-left order-2 order-lg-1'>
                      <Image src={'/assets/ebook-eb2-niw.png'} width={300} height={396} className='img-fluid' alt='' />
                </Col>

                <Col lg={{span: 4, offset: 0}} className='d-flex flex-column justify-content-center order-1 order-lg-2'>
                      <h3 className='mb-4 title-medium'>Ebook EB-2 NIW O caminho para a Residência Permanente nos EUA </h3>
                      <p>
                      Com todas as informações sobre um dos vistos mais desejados por profissionais de diversas áreas, mostrando os pontos de atenção e caminhos específicos para a conquista deste visto.
                      </p>

                      <p className='fs-4 fw-bold'>
                      <span className='text-decoration-line-through fs-6 fw-normal'>
                        de R$ {prices.ebookEb2Niw.toFixed(2).replace('.', ',')}</span> por R$ 0,00
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
                        de R$ {prices.ebookBonus.toFixed(2).replace('.', ',')}</span> por R$ 0,00
                      </p>
                </Col>
                <Col lg={6} className='bonus-image-right'>
                      <Image src={'/assets/ebook-green-card.png'} width={300} height={380} className='img-fluid' alt='' />
                </Col>
              </Row>

              <Row className='mb-5'>
                <Col lg={6} className='bonus-image-left order-2 order-lg-1'>
                      <Image src={'/assets/resume.png'} width={380} height={396} className='img-fluid' alt='' />
                </Col>
                <Col lg={{span: 4, offset: 0}} className='d-flex flex-column justify-content-center order-1 order-lg-2'>
                      <h3 className='mb-4 title-medium'>
                        Template de Currículo - Estrutura para Conquistar Oportunidades nos Estados Unidos
                      </h3>
                      <p>
                      Template de modelo de Currículo com estrutura e explicação, para que possa adiantar um processo importante em sua jornada para a conquista do visto desejado
                      </p>
                      <p className='fs-4 fw-bold'>
                      <span className='text-decoration-line-through fs-6 fw-normal'>
                        de R$ {prices.templateCurriculo.toFixed(2).replace('.', ',')}</span> por R$ 0,00
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
                        de R$ {prices.paginaMigration.toFixed(2).replace('.', ',')}</span> por R$ 0,00
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
    )
}