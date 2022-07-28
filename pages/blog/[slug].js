import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";

import NextLink from "next/link";
import Section from "../../components/Section";
import Paragraph from "../../components/Paragraph";

import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <Container>
        <Heading as="h3" variant="section-title">
          {title}
        </Heading>
        <Box mb={10}>
          <Paragraph>Posted on {date}</Paragraph>
        </Box>
        <img src={cover_image} alt="" />
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
