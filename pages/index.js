import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Post from '../components/Post'
import { sortByDate } from '../utils'

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Testing changes <code>pages/index.js</code>
        </p>
        <div className='posts'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate).filter((p, i) => {i > 1}),
    },
  }
}