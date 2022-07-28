import fs from "fs";
import path from "path";
import matter from "gray-matter";
import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

import { sortByDate } from "../utils";

import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Post from "../components/Post";
import Section from "../components/Section";
import Paragraph from "../components/Paragraph";

export default function Home({ posts }) {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.600", "whiteAlpha.200")}
        p={4}
        mt={10}
        mb={6}
        align="center"
      >
        I&apos;m a full stack developer
      </Box>

      <Box display={{ md: "flex" }}></Box>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Nigel Munro
        </Heading>
        <p> ( Coder / 3D Artist / FPV Pilot ) </p>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100"
            display="inline-block"
            borderTopLeftRadius="10"
            borderTopRightRadius="10"
            borderBottomRightRadius="10"
            borderBottomLeftRadius="10"
            src="/images/favicon.png"
            alt="profile picture"
          />
        </Box>
        <Section>
          <Paragraph>
            Nigel grew up facinated with computers an loved playing video games.
            In high school he taught himself Java so he could code his own games
            and this interest lead him to enrol at Victoria University of
            Welington.
          </Paragraph>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            This is some paragraph text
            <NextLink href="/works/coolproject"> Cool Project</NextLink>
          </Paragraph>
        </Section>
      </Box>
    </Container>
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
      posts: posts.sort(sortByDate).filter((p, i) => {
        i > 1;
      }),
    },
  };
}
