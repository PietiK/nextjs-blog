import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Footer from './Footer'

const name = 'Pieti Kinnunen'
export const siteTitle = 'Pieti Kinnunen'

export default function Layout( props ) {
  console.log(props.posttitle);
  console.log(props.footerContent);
  return (
    <>
      <div className={styles.container}>
        <Head>
          <meta name="description" content={props.postdescription}/>
          <meta name='title' content={props.posttitle}/>
          <meta name="og:title" content={props.posttitle} />
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
