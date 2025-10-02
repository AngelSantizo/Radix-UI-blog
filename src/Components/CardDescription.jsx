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

export default function CardDescription() {
  return (
    <Box maxWidth="100%">
      <Card size="4" variant="classic">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
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
          <Strong>Aprendiz</Strong> constante y disciplinado, en busqueda de nuevos conocimientos y experiencia que me permitan crecer y mejorar en el campo de la programación y desarrollo frontend. Proveniente de Guatemala, con un fuerte deseo de aprender y crecer.
        </Text>
      </Card>
    </Box>
  );
}
