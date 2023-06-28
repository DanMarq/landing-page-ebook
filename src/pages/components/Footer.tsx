import { Container } from "react-bootstrap"
import Image from "next/image"
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const ano = new Date().getFullYear()

export default function Footer() {
    return(
       <Container>
         <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
                    <Image src={'/assets/simbolo-sociedade-coletiva.svg'} width={34} height={24} alt="" />
                </a>
                <span className="mb-3 mb-md-0 text-muted">© {ano} Sociedade Coletiva</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                    <a className="text-muted" href="">
                        <BsFacebook />
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-muted" href="">
                        <BsInstagram />
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-muted" href="">
                        <BsLinkedin />
                    </a>
                </li>
            </ul>
        </footer>
       </Container>
    )
}