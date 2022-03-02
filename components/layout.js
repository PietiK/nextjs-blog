import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Footer from './Footer'

const name = 'Pieti Kinnunen'
export const siteTitle = 'Pieti Kinnunen'

export default function Layout( props ) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <meta name="description" content={props.postdescription}/>
          <meta name='title' content={props.posttitle}/>
          <meta name="og:title" content={props.posttitle} />
          <meta name='og:type' content='article' />
          <meta name='og:url' content={`https://nextjs-blog-pietik.vercel.app/${props.postid}`}/>
          <meta name='og:image' content={props.postimg}/>

          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "blogPost",
          "name": `${props.posttitle}`,
          "author": "Pieti Kinnunen",
          "image": `${props.postimg}`,
          "description": `${props.postdescription}`
          })}} />

        </Head>
        <header className={styles.header}>
          {props.home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
            </>
          )}
        </header>
        <main>{props.children}</main>
      </div>
      <Footer footerContent={props.footerContent} />
    </>
    
  )
}
