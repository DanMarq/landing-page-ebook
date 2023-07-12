import { Button, Col, Row } from "react-bootstrap";

export default function SectionAtalhos() {
    return (
        <section className='py-3 py-lg-5 atalhos'>
         <div className='py-3 py-lg-5'>
         <Row className='px-3 px-lg-5 py-5 mx-0'>

         <Col lg={{span: 4, offset: 2}} className=''>
                <h2 className='pb-4'>
                  Sim, existem atalhos legais que vão te <span className='title-bold'>fazer chegar onde quer!</span>
                </h2>

                <p>
                Não estou falando em <b>jeitinho</b> não, pois depois de anos correndo atrás do sonho da minha família, pude entender cada passo dado e descobrir os caminhos mais curtos para morar legalmente nos EUA.</p>
                
                <p>
                Além disso, descobri os caminhos certos que me fizeram economizar (além de muito tempo) muito dinheiro para conquistar o Green Card!
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
    )
}