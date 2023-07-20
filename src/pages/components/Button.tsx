
import { Button } from "react-bootstrap"
import Link from 'next/link'

interface ButtonContent {
    text: string
    classStyle: string
}

export default function Botao ({text, classStyle}:ButtonContent) {
    return (
       <Link href={'https://bit.ly/3rBxETr'}>
         <Button className={classStyle}>{text}</Button>
       </Link>
    )
}