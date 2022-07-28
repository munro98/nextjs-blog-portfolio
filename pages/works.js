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
      <Box display={{ md: "flex" }}></Box>
      <Box flexGrow={1}>
        <Section>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            This is some paragraph text
            <NextLink href="/works/coolproject"> Cool Project</NextLink>
          </Paragraph>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Old Stuff
          </Heading>
        </Section>
      </Box>
    </Container>
  );
}
