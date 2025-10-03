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

import { Linkedin, Github, Instagram } from "lucide-react";

export default function SocialMediaCards({ 
  title = "Social Media", 
  subtitle = "Connect with me", 
  bgColor = "var(--gray-a2)", 
  avatarSrc = "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop",
  fallback = "?",
  link = "#",
  platform = null,
}) {
  return (
    <>
      <Box
        style={{
          background: "var(--gray-a2)",
          borderRadius: "var(--radius-3)",
        }}
      >
        <Container size="1">
          <Flex align="center" direction="column" top="2" gap="2">
            <Card style={{ backgroundColor: bgColor, cursor: "pointer", width: "280px" }} asChild>
              <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                <Flex gap="3" align="center">
                  {platform ? (
                    <Box
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(0,0,0,0.15)",
                      }}
                    >
                      {platform === "linkedin" && <Linkedin size={20} color="#000000" />}
                      {platform === "github" && <Github size={20} color="#000000" />}
                      {platform === "instagram" && <Instagram size={20} color="#000000" />}
                    </Box>
                  ) : (
                    <Avatar
                      size="3"
                      src={avatarSrc}
                      radius="full"
                      fallback={fallback}
                    />
                  )}
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {title}
                    </Text>
                    <Text as="div" size="2" color="gray">
                      {subtitle}
                    </Text>
                  </Box>
                </Flex>
              </a>
            </Card>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
