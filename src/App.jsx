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
} from "@radix-ui/themes";
import CardDescription from "./Components/CardDescription";
import SocialMediaCards from "./Components/SocialMediaCards";
import ContactTab from "./Components/ContactTab";

function App() {
  return (
    <>
      <TabNav.Root>
        <TabNav.Link href="#" active>
          Me
        </TabNav.Link>
        <TabNav.Link href="#">Projects</TabNav.Link>
        <TabNav.Link href="#">Contact</TabNav.Link>
      </TabNav.Root>

      <Box
        style={{
          background: "var(--gray-a2)",
          borderRadius: "var(--radius-3)",
        }}
      >
        <Container size="4" align="center">
          <Flex align="center" direction="column" top="2" gap="2">
            <Avatar
              size="8"
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              fallback="A"
            ></Avatar>
            <Heading as="h1" size="7" align="center">
              Level 1
            </Heading>
          </Flex>
        </Container>
      </Box>

      <Heading as="h2">About me</Heading>

      <CardDescription />

      <Heading as="h2">Projects</Heading>
      <CardDescription />
      <Heading as="h2">Contact me</Heading>
      <SocialMediaCards />
      <SocialMediaCards />
      <SocialMediaCards />
      <ContactTab />
    </>
  );
}

export default App;
