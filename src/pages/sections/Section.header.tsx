import Image from 'next/image'

import {Container, Row, Col, Button} from 'react-bootstrap'
import Video from '../components/Video'

interface HeaderProps {
  texto: string
}

export default function SectionHeader({texto}:HeaderProps) {

    return (
        <header className='header-section'>
          <Container>
            <Row>
              <Col className='text-center'>
                <div className='wraper'>
                  <Image src={'/assets/logo-white.svg'} width={500} height={90} alt='' className='img-fluid mb-5' />
                  <h1>{texto}</h1>
                  <Video />
                  <Button className='mt-3 white-bg' size='lg'>Adquira agora o seu ebook</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </header>
    )
}