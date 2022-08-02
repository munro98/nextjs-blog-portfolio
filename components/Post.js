import Link from "next/link";

import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";

//<Image layout='fill' src={post.frontmatter.cover_image} alt='' />

export default function Post({ post }) {
  return (
    <div className="card">
      <div className="post-date">Posted on {post.frontmatter.date}</div>

      <Heading as="h3">{post.frontmatter.title}</Heading>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <span style={{ textDecoration: "underline" }}>
          <a className="btn">Read More</a>
        </span>
      </Link>
    </div>
  );
}
