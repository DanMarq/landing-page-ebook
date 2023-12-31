import Image from 'next/image'

import {Container, Row, Col} from 'react-bootstrap'

import * as prices from '../../utils/prices'
import Botao from '../components/Button'

export default function SectionProduto() {

    return (
        <section className='py-5 px-3 lg:px-5 section-price' id="adquira-agora">
        <Container className='py-5'>
          <Row>
            <Col lg={6} className='d-flex flex-column justify-content-center'>
              <h3 className='pb-2'>
              <span className='title-bold'>Quanto vale tudo isso?</span>
              </h3>
              <h4 className='fs-2'>
                Quanto vale <b>saber os caminhos que te farão economizar tempo e dinheiro</b> em sua jornada para conquistar a residência legal nos Estados Unidos?
                </h4>
              </Col>
            <Col lg={6} className='text-center text-section-price'>
              <Image src={'/assets/logo.svg'} width={500} height={141} alt='' className='mb-2 img-fluid' />
              <p>Por tempo limitado <b>Ebook + os 4 bônus de:</b></p>
              <h5>de {prices.totalValor.toFixed(2).replace('.', ',')} por</h5>
              <div className='section-price-desconto'>
                <h6><span>R$</span>{prices.valorComDesconto.toFixed(2).replace('.', ',')}</h6>
              </div>
              <Botao classStyle='mt-3' text='Adquira agora o seu ebook' />
            </Col>
          </Row>
        </Container>
      </section>
    )
}