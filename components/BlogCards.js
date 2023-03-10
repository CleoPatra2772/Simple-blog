import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/BlogCard.module.css';


export const BlogCards =({ title, author, coverPhoto, slug }) =>{
    return (
      <div className={styles.card}>
        <Link href={`/posts/${slug}`}>
          <div className={styles.imgContainer}>
            <Image layout="fill" src={coverPhoto.url} alt="" />
          </div>
        </Link>
        <div className={styles.text}>
          <h2>{title}</h2>
          <div className={styles.details}>
            <div className={styles.author}>
              <img src={author.avatar.url} alt={author.name} />
              <h3>{author.name}</h3>
            </div>
            <div className={styles.date}>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  {
    /* <div dangerouslySetInnerHTML={{ __html: content.html }}></div> */
  }


// export const BlogCards = ({title, author, coverPhoto, datePublished, key, slug}) =>{
//     return(
//         <div className={styles.cards}>
//             <Link href={`/posts/${slug}`}>
            
//                 <div className={styles.imgContainer}>
//                     <img 
//                     src={coverPhoto.url}
//                     alt='coverPhoto'
//                     layout='fill'
//                     />
                    
//                 </div>
//             </Link>

//             <div className={styles.text}>
//             <h2>{title}</h2>
//             <div className={styles.details}>
//                 <div className={styles.author}>
//                 <img src={author.avatar.url}
//                 alt='author avatar'
//                 />
//                 <h3>{author.name}</h3>
//                 </div>
//                 <div className={styles.date}>
//                     <h3>{datePublished}</h3>
//                 </div>

//                 </div>
//             </div>
//         </div>
//     )
// }

