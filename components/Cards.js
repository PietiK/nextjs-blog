import Link from "next/link";
import cardStyles from '../styles/cardstyles.module.css'
import Image from "next/image";
import Date from './date';

const Cards = (props) => {
  return (
    <>
      <hr className={cardStyles.line}/>
      <h2>{props.cardsTitle}</h2>
      <div className={cardStyles.cardcontainer}>
        {props.cardsData.map((post) => (
          <Link href={`/posts/${post.id}`}>
          <div className={cardStyles.card}>
            <Image src={post.imagesrc} width={200} height={136} className={cardStyles.cardImg}/>
            <p className={cardStyles.cardTitle}>{post.title}</p>
            <br />
            <small className={cardStyles.cardDate}>
              <Date dateString={post.date} />
            </small>
          </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Cards;