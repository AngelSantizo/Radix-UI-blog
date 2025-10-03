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

export default function CardDescription({ 
  src = "",
  Description = "",
  DescriptionStrong = "",
  redirect = "",
  showButton = true
}) {
  return (
    <Box maxWidth="100%">
      <Card size="4" variant="classic">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src={src}
            alt="Bold typography"
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: 140,
              backgroundColor: "var(--gray-5)",
            }}
          />
        </Inset>
        <Text as="p" size="3">
          <Strong>{DescriptionStrong}</Strong> {Description}
        </Text>
        {showButton && redirect && (
          <Button asChild style={{top: "1rem"}}>
            <a href={redirect} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
          </Button>
        )}
      </Card>
    </Box>
  );
}
