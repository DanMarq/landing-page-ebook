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
               Perseguindo o sonho de minha família, <b>descobri os caminhos mais curtos e econômicos para morar legalmente nos Estados Unidos.</b> Após anos de dedicação e compartilhando esse conhecimento com amigos próximos, posso afirmar com segurança que é possível construir seu próprio caminho rumo ao Sonho Americano sem perder tempo ou dinheiro nesse processo.
               </p>
               <p>
               Morar legalmente nos EUA oferece oportunidades profissionais diferenciadas, qualidade de vida para você e sua família, além de abrir portas para um futuro promissor. Um dos passos fundamentais nesse processo é a obtenção do <b>Green Card</b>, que garante a residência permanente no país.
               </p>

               <p>
               Decidi reunir todo esse conhecimento valiosíssimo em um material prático e de fácil compreensão. Nele, você encontrará orientações claras para trilhar o seu caminho até o Sonho Americano de forma segura e eficiente. Prepare-se para entender cada passo dado, economizar tempo e dinheiro, e conquistar a tão desejada moradia legal nos Estados Unidos.
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