import Image from 'next/image'

import {Container, Row, Col, Button} from 'react-bootstrap'
import Video from '../components/Video'

export default function SectionHeader() {

    const tituloPrincipal:string = 'Você legalmente morando nos EUA'

    return (
        <header className='header-section'>
          <Container>
            <Row>
              <Col className='text-center'>
                <div className='wraper'>
                  <Image src={'/assets/logo-white.svg'} width={350} height={90} alt='' className='img-fluid mb-5' />
                  <h1>{tituloPrincipal}</h1>
                  <Video />
                  <Button className='mt-3 white-bg' size='lg'>Adiquira agora o seu ebook</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </header>
    )
}