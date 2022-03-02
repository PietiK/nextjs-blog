import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'


const Footer = (props) => {
  return (
    <footer className={styles.footer}>      
      <div className={styles.footerContainer}>
        <div className={styles.footerPosts}>
          <h3>Blogipostaukset</h3>
          <ul className={styles.footerList}>
            {props.footerContent.map(({ id, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
          
        </div>
        <div className={styles.footerRight}>
          <h1>Alaotsikko</h1>
          <p>Lorem ipsum</p>
        </div>
      </div>
    </footer>
  )
  
}

export default Footer;
