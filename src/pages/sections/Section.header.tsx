import {Container, Row, Col, Button} from 'react-bootstrap'
import Video from '../components/Video'

import { Player} from '@lottiefiles/react-lottie-player';
import { ReactNode } from 'react';
import Botao from '../components/Button';

interface HeaderProps {
  texto: ReactNode
  subtexto: string
}

export default function SectionHeader({texto, subtexto}:HeaderProps) {

    return (
        <header className='header-section'>
          <Container>
            <Row>
              <Col className='text-center'>
                <div className='wraper'>

                  <Player
                      autoplay
                      loop
                      src="https://lottie.host/82ef64f3-5b29-4471-b459-613f5652560e/Rcaqt2zcm6.json"
                      style={{ height: '300px', width: '300px' }}
                      className='flag'
                    >
                    </Player>

                  {texto}
                  <h2>{subtexto}</h2>
                  <Video />
                 <a href='#adquira-agora'>
                 <Button className='mt-5 white-bg'>Adquira agora o seu ebook</Button>
                 </a>
                </div>
              </Col>
            </Row>
          </Container>
        </header>
    )
}