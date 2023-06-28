import Card from 'react-bootstrap/Card'

interface cardProps {
    nome: string
    texto: string
    imagem: string
}

export default function CardSlider (props: cardProps) {
    return (
        <Card className='mb-5'>
            <Card.Img variant='top' src={props.imagem} />
            <Card.Body>
                <Card.Title>{props.nome}</Card.Title>
                <Card.Text>
                    {props.texto}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}