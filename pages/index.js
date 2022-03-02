import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'
import Cards from '../components/Cards'

export default function Home({allPostsData}) {
  return (
    <Layout home footerContent={allPostsData}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="The front page of the blog"/>
        <meta name='title' content="Pieti Kinnunen"/>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Minä olen Pieti Kinnunen</p>
        <p>Olen 22-vuotias tietojenkäsittelytieteen opiskelija Kuopiosta. Opiskelen tietojenkäsittelytiedettä Itä-Suomen Yliopistossa. 
          Suoritan tällä hetkellä opintojeni kolmatta vuotta. </p>
        <br />
        <p>Tämä sivusto on rekrytointitehtävä, joka on toteutettu käyttäen Next.js.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Cards cardsData={allPostsData} cardsTitle={"Blogi"}/>
      </section> 
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}