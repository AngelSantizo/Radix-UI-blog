import { useState } from "react";
import "./App.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import {
  Flex,
  Text,
  Button,
  TabNav,
  Avatar,
  Heading,
  Box,
  Container,
  Card,
  Inset,
  Strong,
  Grid,
} from "@radix-ui/themes";
import CardDescription from "./Components/CardDescription";
import SocialMediaCards from "./Components/SocialMediaCards";
import ContactTab from "./Components/ContactTab";

function App() {
  return (
    <>
      <TabNav.Root justify="center" wrap="nowrap" highContrast="true" size="2" style={{height: "4rem"}}>
        <TabNav.Link href="#" active style={{fontSize: "1.2rem"}}>
          Me
        </TabNav.Link>
        <TabNav.Link href="#" style={{fontSize: "1.2rem"}}>Projects</TabNav.Link>
        <TabNav.Link href="#" style={{fontSize: "1.2rem"}}>Contact</TabNav.Link>
      </TabNav.Root>

      <Box
        style={{
          background: "var(--gray-a2)",
          borderRadius: "var(--radius-3)",
        }}
      >
        <Container size="4" align="center" style={{ marginTop: "2rem", paddingBottom: "2rem" }}>
          <Flex align="center" direction="column" top="2" gap="2">
            <Avatar
              size="8"
              src="/assets/angel-foto.jpeg"
              fallback="A"
            ></Avatar>
            <Heading as="h1" size="7" align="center">
              Angel Santizo
            </Heading>
            <Text>FrontEnd Dev Junior</Text>
          </Flex>
        </Container>
      </Box>

      <Heading as="h2" style={{margin: "3rem", textAlign: "center"}}>About me</Heading>
      <Flex align="center" direction="column" top="2" gap="2">
      <CardDescription />
      </Flex>

      <Heading as="h2" style={{margin: "3rem", textAlign: "center"}}>Projects</Heading>
      <Container size="4">
        <Grid columns="2" gap="4" width="auto">
          <CardDescription />
          <CardDescription />
          <CardDescription />
          <CardDescription />
        </Grid>
      </Container>
      <Heading as="h2" style={{margin: "3rem", textAlign: "center"}}>Contact me</Heading>

      <Flex align="center" direction="column" gap="2" style={{marginBottom: "2rem"}}>
      <SocialMediaCards
        platform="linkedin"
        title="LinkedIn"
        subtitle="Conecta conmigo"
        bgColor="#0077B5"
        link="https://www.linkedin.com/in/angel-santizo"
      />

      <SocialMediaCards
        platform="github"
        title="GitHub"
        subtitle="Mira mis proyectos"
        bgColor="#24292e"
        link="https://github.com/angel-santizo"
      />

      <SocialMediaCards
        platform="instagram"
        title="Instagram"
        subtitle="Sígueme"
        bgColor="#940ee8"
        link="https://www.instagram.com/angel-santizo"
      />
      </Flex>
      <ContactTab />
    </>
  );
}

export default App;
