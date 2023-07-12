import { Col, Container, Row } from "react-bootstrap";

import prices from "../constants/prices";

export default function SectionDesconto() {
    return (
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
            <Col xs={3} lg={2} className='d-flex align-self-end'><p>R$ {prices.ebookPrincipal.toFixed(2).replace('.', ',')}</p></Col>
          </Row>

          <Row className='bonus-price mb-4'>
            <Col xs={6} lg={4}><h6>Ebook EB-2 NIW O caminho para a Residência Permanente nos EUA</h6></Col>
            <Col xs={3} lg={6} className='d-flex align-self-center'><div className='dotted-line'></div></Col>
            <Col xs={3} lg={2} className='d-flex align-self-end'><p>R$ {prices.ebookEb2Niw.toFixed(2).replace('.', ',')}</p></Col>
          </Row>

          <Row className='bonus-price mb-4'>
            <Col xs={6} lg={4}><h6>Ebook Green Card - O Passaporte para o Sonho Americano</h6></Col>
            <Col xs={3} lg={6} className='d-flex align-self-center'><div className='dotted-line'></div></Col>
            <Col xs={3} lg={2} className='d-flex align-self-end'><p>R$ {prices.ebookBonus.toFixed(2).replace('.', ',')}</p></Col>
          </Row>

          <Row className='bonus-price mb-4'>
            <Col xs={6} lg={4}><h6>Template de Currículo - Estrutura completa e atualizada</h6></Col>
            <Col xs={3} lg={6} className='d-flex align-self-center'><div className='dotted-line'></div></Col>
            <Col xs={3} lg={2} className='d-flex align-self-end'><p>R$ {prices.templateCurriculo.toFixed(2).replace('.', ',')}</p></Col>
          </Row>

          <Row className='bonus-price mb-4'>
            <Col xs={6} lg={4}><h6>Página de Informações - Consulta com Especialista em Imigração</h6></Col>
            <Col xs={3} lg={6} className='d-flex align-self-center'><div className='dotted-line'></div></Col>
            <Col xs={3} lg={2} className='d-flex align-self-end'><p>R$ {prices.paginaMigration.toFixed(2).replace('.', ',')}</p></Col>
          </Row>

          <Row className='bonus-price'>
            <Col xs={6} lg={4}><h4>Total</h4></Col>
            <Col xs={3} lg={6} className='d-flex align-self-center'><div className='dotted-line'></div></Col>
            <Col xs={3} lg={2} className='d-flex align-self-end'><p className='total'>R$ {prices.totalValor.toFixed(2).replace('.', ',')}</p></Col>
          </Row>

        </Container>
      </section>
    )
}