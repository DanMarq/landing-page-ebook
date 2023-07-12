import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";

import * as prices from '../../utils/prices'

export default function SectionGuia() {

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

    return (
        <section className='py-lg-5 py-3 guia'>
         <div className='py-lg-5 py-3'>
          <Row className='px-3 px-lg-5 mx-0'>

            <Col lg={{span: 4, offset: 2}} className='mt-5'>
                  <h2 className='mb-4'>
                  Pensando em todos esses pontos eu criei o <span className='title-bold'>E-book: Você Morando Legalmente nos Estados Unidos</span>
                  </h2>
                  <p>
                  Um Guia Prático, fácil de ler em qualquer lugar e recheado de informações que farão você enxergar o seu caminho, informações sobre os tipos de vistos indicados, elegibilidade e mais.
                  </p>
                  <p>
                  Saiba mais sobre os vistos EB2-NIW, E2 e EB5, os mais procurados pelos brasileiros que querem viver legalmente nos EUA.
                  </p>

                  <p>
                    E veja também quais os outros vistos disponíveis e muitos outros temas relevantes como:
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
                 <div className='text-end ajudar'>
                      <h3 className=''>E como forma de ajudar você, <span className='title-bold'>este ebook custa menos do que um <span className="text-decoration-underline"><IoFastFoodOutline className='me-2' />Big Mac!</span></span>
                        </h3>
                        <p className='mt-4'>de <span className='text-decoration-line-through'>R$ {prices.ebookPrincipal.toFixed(2).replace('.', ',')}</span> por 
                        <span className='fs-1 text-bold'> R$ 19,90</span>
                        </p>
                 </div>
            </Col>

          </Row>
        </div>
        </section>
    )
}