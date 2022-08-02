import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Image,
  SimpleGrid,
  Divider,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

import { sortByDate } from "../utils";

import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Post from "../components/Post";
import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import { GridItem } from "../components/GridItem";

export default function Home({ posts }) {
  return (
    <Container>
      <Section>
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
              |{" "}
              <a href="http://music-discovery.nigelmunro.xyz/">
                {" "}
                <span style={{ textDecoration: "underline" }}>Demo</span>
              </a>{" "}
              &nbsp;{" "}
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
              Created a Website for a restaurant located in Tawa, Wellington, NZ
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
              thumbnail={{}}
              href="/works/whalemusic"
            >
              Multi-platform music streaming App built with Flutter App Framework
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
              Extension for the Blender 3D modeling software for baking material
              node shader graphs
              <br></br>
              <a href="https://github.com/munro98/MaterialBakery">
                {" "}
                <span style={{ textDecoration: "underline" }}>Code</span>
              </a>
            </GridItem>
          </Section>
        </SimpleGrid>
      </Section>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Old Stuff
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <GridItem
            id="redditonflutter"
            title="Reddit Flutter App"
            href="/works/redditonflutter"
            objectFit="scale-down"
            objectPosition="top"
            thumbnail="https://raw.githubusercontent.com/munro98/RedditOnFlutter/master/redditAppScreenshot.png"
          >
            Mobile app I created to browse Reddit as an excercise in learning
            Flutter
            <br></br>
            <a href="https://github.com/munro98/RedditOnFlutter">
              {" "}
              <span style={{ textDecoration: "underline" }}>Code</span>
            </a>
          </GridItem>
        </Section>
        <Section>
          <GridItem
            id="ninedays"
            title="9Days"
            href="/works/ninedays"
            thumbnail="https://raw.githubusercontent.com/munro98/9days/master/screenshot.jpg"
          >
            Top Down Zombie Shoot-em up game in pure HTML Canvas, Javascript and
            zero Libraries
            <br></br>
            <a href="https://github.com/munro98/9Days">
              {" "}
              <span style={{ textDecoration: "underline" }}>Code</span>
            </a>{" "}
            |{" "}
            <a href="https://munro98.github.io/9Days/">
              {" "}
              <span style={{ textDecoration: "underline" }}>Play</span>
            </a>{" "}
            &nbsp;{" "}
          </GridItem>
        </Section>
        <Section>
          <GridItem
            id="minigolf"
            title="Minigolf"
            href="/works/minigolf"
            thumbnail="https://raw.githubusercontent.com/munro98/munro98.github.io/master/images/golf.jpg"
          >
            A multiplayer minigolf game made in Unity3D
          </GridItem>
        </Section>
        <Section>
          <GridItem
            id="simplecraft"
            title="Simple Craft"
            href="/works/simplecraft"
            thumbnail="http://i.imgur.com/sGc1QOb.png"
          >
            A simple Minecraft Clone made with C++ and OpenGL
            <br></br>
            <a href="https://github.com/munro98/SimpleCraftCpp">
              {" "}
              <span style={{ textDecoration: "underline" }}>Code</span>
            </a>
          </GridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
}
