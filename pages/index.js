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
  SimpleGrid,
  Button,
} from "@chakra-ui/react";

import { IoArrowForward } from "react-icons/io5";

import { sortByDate } from "../utils";

import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Post from "../components/Post";
import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import { GridItem } from "../components/GridItem";

export default function Home({ posts }) {
  const logoImg = `/images/drone-logo${useColorModeValue("", "-dark")}.png`;
  const buttonColor = useColorModeValue("#3182ce", "#FBD38D");
  const buttonTextColor = "gray200";//useColorModeValue("gray200", "whiteAlpha.900");
  const buttonScheme = useColorModeValue("blue", "orange");
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
        I&apos;m a full stack developer!
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nigel Munro
          </Heading>
          <p> ( Coder / 3D Artist / FPV Pilot ) </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
          justifyContent="right"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            align="right"
            maxWidth="100"
            display="inline-block"
            borderTopLeftRadius="10"
            borderTopRightRadius="10"
            borderBottomRightRadius="10"
            borderBottomLeftRadius="10"
            src={logoImg}
            alt="monochrome drone picture"
          />
        </Box>
      </Box>

      <Box>
        <Section>
          <Paragraph>
            Nigel grew up facinated with computers and video games and taught
            himself Java so he could create his own. He has a wide range of
            experience from C++ programming with OpenGL to Mobile app
            development using Flutter and Full Stack Web Development with
            Nodejs, Expressjs and React.
          </Paragraph>
          <Paragraph>
            In his own time he enjoys 3D modeling, 3D printing and flying
            Quadcopters
          </Paragraph>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Works
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <GridItem
                id="music-discovery"
                title="Music Discovery"
                thumbnail="/images/music-discovery.jpg"
                href="/works/musicdiscovery"
                objectFit="scale-down"
              >
                Full-stack Web App for finding new music based on your familiar
                artists
                <br></br>
                <a href="https://github.com/munro98/music-discovery">
                  {" "}
                  <span style={{ textDecoration: "underline" }}>Code</span>
                </a>{" "}
              </GridItem>
            </Section>
            <Section>
              <GridItem
                id="thaicountrycafe"
                title="Thai Country Cafe"
                thumbnail="/images/thai-country-cafe-screenshot.jpg"
                objectFit="cover"
                objectPosition="top"
                href="/works/thaicountrycafe"
              >
                Created a Website for a restaurant located in Tawa, Wellington,
                NZ
                <a href="http://www.thaicountrycafe.co.nz/">
                  {" "}
                  <span style={{ textDecoration: "underline" }}>
                    thaicountrycafe.co.nz
                  </span>{" "}
                </a>
              </GridItem>
            </Section>
            <Section>
              <GridItem
                id="whale-music"
                title="Whale Music"
                thumbnail="/images/whale-music.jpg"
                objectFit="scale-down"
                href="/works/whalemusic"
              >
                Multi-platform music streaming App built with Flutter App
                Framework
                <br></br>
                <a href="https://github.com/munro98/flutter_music_streaming">
                  {" "}
                  <span style={{ textDecoration: "underline" }}>Code</span>
                </a>
              </GridItem>
            </Section>
            <Section>
              <GridItem
                id="materialbakery"
                title="Material Bakery"
                thumbnail="https://raw.githubusercontent.com/munro98/MaterialBakery/master/example1.jpg"
                objectFit="scale-down"
                href="/works/materialbakery"
              >
                Extension for the Blender 3D modeling software for baking
                material node shader graphs
                <br></br>
                <a href="https://github.com/munro98/MaterialBakery">
                  {" "}
                  <span style={{ textDecoration: "underline" }}>Code</span>
                </a>
              </GridItem>
            </Section>
          </SimpleGrid>
          <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<IoArrowForward />} colorScheme={buttonScheme}>
            See More
            </Button>
          </NextLink>
        </Box>

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
