import { IoLogoGithub } from "react-icons/io5";
import styled from "@emotion/styled";
import NextLink from "next/link";
import Image from "next/image";

let FooterStyle = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}`;

export default function Footer() {
  return (
    <>
      <footer style={{ marginTop: "60px", borderTop: "1px solid #eaeaea" }}>
        <FooterStyle style={{ marginTop: "30px" }}>
          Built with NextJS + Chakra
        </FooterStyle>
        <FooterStyle>
          <a href="https://github.com/munro98/nextjs-blog-portfolio">
            {" "}
            <span style={{ textDecoration: "underline" }}>
              Source Code
            </span>{" "}
          </a>{" "}
          &nbsp; <IoLogoGithub /> &nbsp; | &nbsp;Hosted on Netlify &nbsp;{" "}
          <Image
            src="/images/netliheart.svg"
            alt="Netlify Logo"
            width="17"
            height="17"
          />
        </FooterStyle>
      </footer>
    </>
  );
}
