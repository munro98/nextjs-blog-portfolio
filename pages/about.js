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

import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Section from "../components/Section";
import Paragraph from "../components/Paragraph";

export default function Home({ posts }) {
  return (
    <Container>
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
          <Paragraph>
            My hobbies include building Quadcopters, 3D Printing, 3D modeling,
            Electronics and soldering
          </Paragraph>
        </Section>
      </Box>
    </Container>
  );
}
