import {Container, Col, Button} from 'react-bootstrap'

export default function SectionOportunidade() {

    return (
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
              <Button className='mt-5 white-bg'>Adiquira agora o seu ebook</Button>
            </Col>
          </Container>
        </section>

    )
}