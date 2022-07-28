import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

import { sortByDate } from "../../utils";

import Section from "../../components/Section";
import Paragraph from "../../components/Paragraph";

export default function CoolProject() {
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
