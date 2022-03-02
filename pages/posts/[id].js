import Layout from "../../components/layout";
import { getAllPostIds, getPostData, getSortedPostsData } from "../../lib/posts";
import Head from "next/head";
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Image from "next/image";
import Link from "next/link";
import Cards from "../../components/Cards";
import layoutStyles from '../../styles/layout.module.css'

export async function getStaticProps({params}) {
  const postData = await getPostData(params.id);
  const allPostsData = getSortedPostsData();
  return {
    props: {
      postData,
      allPostsData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  }
}

export default function Post({postData, allPostsData}) {
  return ( 
    <Layout footerContent={allPostsData} 
      postdescription={postData.description} 
      posttitle={postData.title} 
      postid={postData.id} 
      postimg={postData.imagesrc}
    >
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <div className={layoutStyles.authordiv}>
          <Image 
            src={postData.authorimg} 
            width={40} height={40} 
            className={utilStyles.borderCircle}
          />
          <div className={utilStyles.headingMd}>{postData.author}</div>
          <Date dateString={postData.date}/>
        </div>
        <Image src={postData.imagesrc} width={650} height={200}/>
        <div className={layoutStyles.homeLink}>
          <Link href="/" >
            <a>← Back to home</a>
          </Link>
        </div>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.headingMd} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <Cards cardsData={allPostsData} cardsTitle={"Muut postaukset:"}/>
    </Layout>
  )
}

