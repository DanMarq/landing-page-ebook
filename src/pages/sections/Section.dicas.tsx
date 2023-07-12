import { BsCheckCircle, BsXCircle, } from "react-icons/bs";

import {Row, Col} from 'react-bootstrap'

export default function SectionDicas() {

    const naoFaria = [
        'Não tentaria fazer o processo sem ter nenhum conhecimento sobre o assunto, não há espaço para aventureiros por aqui, e uma porta fechada pode não se abrir novamente',
        'Puxar informações desorganizadas e seguir tentando sem conhecer cada passo, pois isso pode te fazer voltar alguns passos, gastando mais tempo e dinheiro',
        'Se aventurar com vistos de estudante ou turismo e acreditar que uma vez chegando aqui, irá se “virar”. Esse pode ser um erro bem grave e pode colocar tudo a perder'
      ]
      
      const faria = [
        'Usaria todo o conteúdo que separei após anos de estudo e prática nesse processo de Morar Legalmente nos Estados Unidos',
        'Organizaria cada passo para saber que documentos devo ter, quais competências podem me ajudar e com isso economizaria ainda mais tempo e dinheiro no processo',
        'E havendo a vontade de acelerar ainda mais, usaria um dos bônus que separei para você, uma assessoria personalizada por profissionais gabaritados especialistas nesse processo de Imigração com a finalidade de Moradia Legal e também aplicação para o Green Card'
      ]

    return (
        <section className='py-5 dicas'>
        <div className='py-5'>
        <Row className='px-3 px-lg-5 mx-0'>
           
           <Col lg={{span: 6, offset: 3}}>
               <h2 className='pb-4'>
               Vou começar já <span className='title-bold'>te ajudando com essas dicas!</span>
               </h2>
               
                 <h4 className='mb-3'>O que eu <b className='text-uppercase text-danger'>não faria</b> em seu lugar:</h4>
                     <ul className='list-group mb-4'>
                      {naoFaria.map((conteudo, i)=>(
                        <li key={i} className='list-group-item list-group-item-danger text-white bg-transparent p-4'>
                        <BsXCircle className='me-2 fs-4 text-danger' />
                        {conteudo}
                        </li>
                      ))}
                   </ul>  

                   <h4 className='mb-3'>O que <b className='text-uppercase text-info'>eu faria</b> em seu lugar</h4>
                     <ul className='list-group'>
                      {faria.map((conteudo, i)=>(
                        <li key={i} className='list-group-item list-group-item-info text-white bg-transparent p-4'>
                        <BsCheckCircle className='me-2 fs-4 text-info'/>
                        {conteudo}
                        </li>
                      ))}
                     </ul>  
               
           </Col>

         </Row>
        </div>
       </section>
    )
}