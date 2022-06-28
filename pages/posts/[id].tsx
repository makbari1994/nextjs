import Head from 'next/head'
import styles from '../../styles/post.module.scss'
import { IPosts } from '../../types/posts'
import { NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import ToggleComponent from './../../components/toggle';


type Props = {
    post: IPosts
}

const Post: NextPage<Props> = ({ post }) => {
    return (
        <div className={styles.center}>
            <Head>
                <title></title>
            </Head>

            <header className={styles.header}>
                <div className={styles.left}>
                    <h1>
                        Overreacted
                    </h1>
                </div>
                <div className={styles.right}>
                    <ToggleComponent />
                </div>
            </header>

            <div className={styles.title}>
                <h1 >
                    {post?.title}
                </h1>
            </div>

            <div className={styles.body}>
                {post?.body}
            </div>

        </div>
    )
}




export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true
    }
    // ...
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`);
    const post = await res.json();
    return {
        props: {
            post
        }
    }
}


export default Post;
