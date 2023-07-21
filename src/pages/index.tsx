import Head from 'next/head'
import Image from 'next/image';

import { Barlow } from 'next/font/google'
import Footer from './components/Footer'
import SectionHeader from './sections/Section.header';
import SectionAtalhos from './sections/Section.atalhos';
import SectionDicas from './sections/Section.dicas';
import SectionGuia from './sections/Section.guia';
import SectionBonus from './sections/Section.bonus'
import SectionDesconto from './sections/Section.desconto'
import SectionProduto from './sections/Section.produto'
import SectionGarantia from './sections/Section.garantia'
import SectionOportunidade from './sections/Section.oportunidade'
import SectionFaq from './sections/Section.faq'

const barlow = Barlow({
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Você morando legalmente nos estados Unidos</title>
        <meta name="description" content="Descubra os segredos dos vistos para residência nos EUA. Ebook completo + 3 bônus! Aprenda como viver legalmente nos Estados Unidos, em família ou sozinho. Entrevistas grátis com especialistas em migração. Green Card e visto EB2-NIW. Prepare-se para a vida dos seus sonhos!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png" />
        <noscript><Image height="1" width="1" alt='' style={{ display: 'none' }} src="https://www.facebook.com/tr?id=851288690163546&ev=PageView&noscript=1"/></noscript>
      </Head>
      <main className={barlow.className}>
          <SectionHeader
            texto={<h1>Você <span className='title-bold'>morando legalmente</span> nos estados unidos</h1>}
            subtexto='Saiba mais sobre os vistos EB-2 NIW, EB-2, EB-5 e muitos outros procurados por Brasileiros que querem morar legalmente nos Estados Unidos.'
          />
          <SectionAtalhos />
          <SectionDicas />
          <SectionGuia />
          <SectionBonus />
          <SectionProduto />
          <SectionGarantia />
          <SectionOportunidade />
          <SectionFaq />
      </main>
      <Footer />
    </>
  )
}
