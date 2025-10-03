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
  Callout,
  Separator
} from "@radix-ui/themes";
import CardDescription from "./Components/CardDescription";
import SocialMediaCards from "./Components/SocialMediaCards";
import ContactTab from "./Components/ContactTab";

function App() {
  const [activeTab, setActiveTab] = useState("me");

  return (
    <>
      <TabNav.Root 
        justify="center" 
        wrap="nowrap" 
        highContrast="false" 
        size="2" 
        style={{
          height: "4rem",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "var(--color-background)",
          backdropFilter: "blur(8px)",
          marginTop: "-5px"
        }}
      >
        <TabNav.Link 
          href="#me" 
          active={activeTab === "me"}
          onClick={() => setActiveTab("me")}
          style={{fontSize: "1.2rem"}}
        >
          Me
        </TabNav.Link>
        <TabNav.Link 
          href="#projects" 
          active={activeTab === "projects"}
          onClick={() => setActiveTab("projects")}
          style={{fontSize: "1.2rem"}}
        >
          Proyectos
        </TabNav.Link>
        <TabNav.Link 
          href="#contact" 
          active={activeTab === "contact"}
          onClick={() => setActiveTab("contact")}
          style={{fontSize: "1.2rem"}}
        >
          Contacto
        </TabNav.Link>
      </TabNav.Root>

      <Box
        style={{
          background: "var(--gray-a2)",
          borderRadius: "var(--radius-3)",
        }}
      >
        <Container size="4" align="center" style={{ marginTop: "2rem", paddingBottom: "2rem", paddingTop: "2rem" }}>
          <Flex align="center" direction="column" top="2" gap="2">
            <Avatar
              size="8"
              src="/Radix-UI-blog/assets/angel-foto.jpeg"
              fallback="A"
            ></Avatar>
            <Heading as="h1" size="7" align="center">
              Angel Santizo
            </Heading>
            <Text id="me">FrontEnd Dev Junior</Text>
          </Flex>
        </Container>
      </Box>

      <Separator my="3" size="4" />
      <Heading as="h2" style={{margin: "3rem", textAlign: "center"}}>Sobre mi</Heading>
      <Flex align="center" direction="column" top="2" gap="2">
      <CardDescription src="/Radix-UI-blog/assets/angel setup.png"
      DescriptionStrong="Aprendiz"
      Description="constante y disciplinado, en busqueda de nuevos conocimientos y experiencia que me permitan crecer y mejorar en el campo de la programación y desarrollo frontend. Proveniente de Guatemala, con un fuerte deseo de aprender y crecer."
      showButton={false}
      />
      </Flex>

      <Separator my="3" size="4" />
      <Heading id="projects" as="h2" style={{margin: "3rem", textAlign: "center", scrollMarginTop: "4.5rem"}}>Proyectos</Heading>
      <Container size="4">
        <Grid columns="2" gap="4" width="auto">
          <CardDescription
          src="/Radix-UI-blog/assets/Choris page.png"
          DescriptionStrong="Choris"
          Description="Un proyecto hecho con la libreria Bootstrap, hecho dedicado a mi padre. (Negocio real)"
          redirect="https://angelsantizo.github.io/Choris-page-/"
          type="Responsive"
          typeColor="green"
          />
          <CardDescription 
          src="/Radix-UI-blog/assets/Proyecto relojeria.png"
          DescriptionStrong="Relojeria"
          Description="Un proyecto hecho con HTML y CSS nativo que incluye animaciones Javascript. Universidad"
          redirect="https://app.netlify.com/projects/proyectoindividualangel/overview"
          type="No responsive"
          typeColor="red"
          />
          <CardDescription 
          src="/Radix-UI-blog/assets/Proyecto cafe.png"
          DescriptionStrong="Blog de Cafe"
          Description="Uno de mis inicios en este mundo, un blog hecho con HTML y CSS nativo. Udemy"
          redirect="https://tiendacafeteriaycursos.netlify.app/"
          type="No responsive"
          typeColor="green"
          />
          <CardDescription 
          src="/Radix-UI-blog/assets/Proyecto react.png"
          DescriptionStrong="Este proyecto."
          Description="Un avance en mi aprendizaje, hecho con React y la libreria de diseño Radix UI"
          type="Responsive"
          typeColor="green"
          />
        </Grid>
      </Container>
      <Separator my="3" size="4" />
      <Heading id="contact" as="h2" style={{margin: "3rem", textAlign: "center", scrollMarginTop: "4.5rem"}}>Contáctame</Heading>

      <Flex align="center" direction="column" gap="4" style={{marginBottom: "3rem"}}>
      <SocialMediaCards
        platform="linkedin"
        title="LinkedIn"
        subtitle="Conecta conmigo"
        bgColor="#0077B5"
        link="https://www.linkedin.com/in/angel-santizo-309745299/"
      />

      <SocialMediaCards
        platform="github"
        title="GitHub"
        subtitle="Mira mis proyectos"
        bgColor="#24292e"
        link="https://github.com/AngelSantizo"
      />

      <SocialMediaCards
        platform="instagram"
        title="Instagram"
        subtitle="Sígueme"
        bgColor="#940ee8"
        link="https://www.instagram.com/angel___sp/"
      />
      </Flex>
      <Callout.Root variant="surface" size="2" color="blue" style={{ textAlign: "center", bottom: "0", width: "100%"}}>
        <Callout.Text>
          Derechos reservados Angel Santizo 2025.
        </Callout.Text>
      </Callout.Root>
    </>
  );
}

export default App;
