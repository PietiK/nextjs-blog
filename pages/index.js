import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'
import Cards from '../components/Cards'
import { useRouter } from 'next/router'

export default function Home({allPostsData}) {
  const router = useRouter();
  return (
    <Layout home footerContent={allPostsData}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="The front page of a blog"/>
        <meta name='title' content="Pieti Kinnunen"/>
        <meta name='og:title' content="Pieti Kinnunen"/>
        <meta name='og:type' content='profile' />
        <meta name='og:image' content='/images/profile.jpg' />
        <meta name='og:url' content='https://nextjs-blog-pietik.vercel.app/'/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Blog",
          "name": "Pieti Kinnunen",
          "author": "Pieti Kinnunen",
          "image": "/images/profile.jpg",
          "description": "The front page of a blog"
        })}} />
        
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Minä olen Pieti Kinnunen.</p>
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