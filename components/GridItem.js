import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  useColorMode,
  useColorModeValue,
  AspectRatio,
  Link,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const GridItem = ({
  children,
  href,
  title,
  thumbnail,
  zoom,
  objectPosition,
  objectFit,
}) => (
  <Box
    w="100%"
    textAlign="center"
    bg={useColorModeValue("#ffffff", "#06060680")}
    borderTopLeftRadius="6"
    borderTopRightRadius="6"
    borderBottomRightRadius="6"
    borderBottomLeftRadius="6"
  >
    <NextLink href={href} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <AspectRatio maxW="116%" ratio={16 / 9}>
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            loading="lazy"
            layout="fill"
            objectFit={objectFit ? objectFit : "cover"}
            objectPosition={objectPosition ? objectPosition : ""}
            width={zoom ? "100%" : "150%"}
            style={{ borderRadius: "8px" }}
          />
        </AspectRatio>
        <Text mt={2}>{title}</Text>
      </LinkBox>
    </NextLink>
    <Text fontSize={14}>{children} </Text>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
