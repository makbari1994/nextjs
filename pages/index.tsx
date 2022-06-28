import type { NextPage } from 'next'
import Head from 'next/head'

import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { IPosts } from '../types/posts'
// for ES6 modules
import { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import themeAction from '../store/actions/theme.action'
import { IReduxProps } from '../types/redux-props';
import ToggleComponent from './../components/toggle';


type Props = {
  posts: [IPosts],
}

const Home: NextPage<Props> = ({ posts }) => {

  const [items, setItems] = useState<[IPosts]>(posts)

  useEffect(() => {
    const data = posts.sort((a: IPosts, b: IPosts) => b.id - a.id);
    setItems([...data]);
  }, [posts])

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

      <div className={styles.person}>
        <div className={styles.image}>
          <img src='./images/logo.jpg' />
        </div>
        <div className={styles.text}>
          Personal blog by <a href='https://mobile.twitter.com/dan_abramov' >Dan Abramov.</a>
          <div> I explain with words and code.</div>
        </div>
      </div>



      <div className={styles.posts}>
        {items.map(item => {
          return (
            <a href={`/posts/${item.id}`} key={item.id} className={styles.post}>
              <>
                <div className={styles.title}>
                  <h3>
                    {item.title}
                  </h3>
                </div>
                {/* <div className={styles.date}>
              <span>
                July 7, 2021 •
              </span>
              <span>☕️☕️☕️</span>
              <span>
                14 min read
              </span>
            </div> */}

                <div className={styles.text}>
                  {item.body}
                </div>
              </>
            </a>
          )
        })}

      </div>


      <footer className={styles.footer}>
        <div className={styles.left} >
          <a href='https://mobile.twitter.com/dan_abramov' className={styles.item}>twitter</a> •
          <a href='https://github.com/gaearon' className={styles.item}>github</a> •
          <a href='https://stackoverflow.com/users/458193/dan-abramov' className={styles.item}>stack overflow</a>
        </div>
        <div className={styles.right} >
          <a href='https://overreacted.io/rss.xml' className={styles.item}>rss</a>
        </div>
      </footer>

    </div>


  )
}





const mapStateToProps = (state: IReduxProps) => {
  return {
    theme: state.theme
  }
}


export default connect(mapStateToProps, {})(Home);


export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  return {
    props: {
      posts
    }
  }
}


