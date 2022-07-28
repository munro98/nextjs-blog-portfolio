import fs from "fs";
import path from "path";
import matter from "gray-matter";

import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Post from "../components/Post";
import { sortByDate } from "../utils";

export default function BlogPosts({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading as="h2" variant="page-title">
          Recent Posts
        </Heading>
        <div className="posts">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
