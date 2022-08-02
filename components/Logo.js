import Link from "next/link";
import Image from "next/image";

import { Text, useColorModeValue } from "@chakra-ui/react";

import styled from "@emotion/styled";

const LogoBox = styled.span`
  display: flex;
  align-itmes: center;
  height: 40px;
  line-height: 20px;

  img {
    transition: 200ms ease;
  }
  img {
    transform: translate(2px, 2px);
  }
  &:hover img {
    transform: translate(-4px, -2px);
  }
`;
const Logo = () => {
  const logoImg = `/images/drone-logo${useColorModeValue("", "-dark")}.png`;
  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={logoImg} width={40} height={40} alt="logo" />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            ml={5}
            mt={2}
          >
            Nigel Munro
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
