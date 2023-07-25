
import { Button } from "react-bootstrap"
import Link from 'next/link'

interface ButtonContent {
    text: string
    classStyle: string
}

export default function Botao ({text, classStyle}:ButtonContent) {
    return (
       <Link href={'https://bit.ly/3Dt85q7'}>
         <Button className={classStyle}>{text}</Button>
       </Link>
    )
}