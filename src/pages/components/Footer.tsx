import { Container } from "react-bootstrap"
import Image from "next/image"

const ano = new Date().getFullYear()

export default function Footer() {
    return(
       <Container>
         <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
                    <Image src={'/assets/bandeirinha.png'} width={34} height={24} alt="" />
                </a>
                <span className="mb-3 mb-md-0 text-muted copyright">© {ano} Você Morando Legalmente nos Estados Unidos</span>
            </div>
        </footer>
       </Container>
    )
}