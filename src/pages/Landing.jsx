import { FormControl } from "@mui/base";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { Box, Container } from "@mui/system";
import FormularioPersonalLandingPage from "../components/FormularioPersonalLnadingpage";
import styled from "styled-components";

const backgroundImageStyle = {
  backgroundImage: 'url("src/assets/entrevista-trabajo-oficina.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "55vh",
  width: "100%",
  filter: "opacity(0.8)"
};
const backgroundImageStyleMujer = {
  backgroundImage: 'url("src/assets/mujer-feliz-joven-que-tiene-entrevista-trabajo-oficina.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "55vh",
  width: "100%",
  color: "white",
  filter: "opacity(0.8)"
};
const whiteTextStyle = {
  color: "white", // Establece el color del texto en blanco
};
const centeredTextStyle = {
  color: "white",
  textAlign: "center", // Centra horizontalmente el texto
  position: "absolute",
  top: "50%", // Mueve el elemento hacia el centro vertical
  left: "50%", // Mueve el elemento hacia el centro horizontal
  transform: "translate(-50%, -50%)", // Centra el elemento en el medio de su contenedor
};

const whriteStyle={
  textAlign:"center"
}
const scrollToForm = () => {
  const formularioElement = document.getElementById("formulario");
  if (formularioElement) {
    formularioElement.scrollIntoView({ behavior: "smooth" });
  }
};
const Landing = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const adjustedTextStyle = {
    // ...centeredTextStyle,
    // fontSize: isSmallScreen ? "18px" : "26px", // Ajusta el tamaño del texto según la pantalla
  };
  
  return (
    <>
      <h1>Landing</h1>
      <Container maxWidth="xl">
        <Grid>
          <Grid container spacing={2} style={backgroundImageStyle}>
            <Grid xs={7} style={whiteTextStyle}>
              <br />
              <br />
              <div style={{ padding: 20 }} >
                <h1>Desbloquea Tu Futuro Profesional en 4 Semanas</h1>
                <h2>
                  Encuentra Empleo en Menos de 1 Mes con Nuestro Curso de
                  Empleabilidad
                </h2>
                <h3>
                  ¿Te sientes atrapado en la búsqueda de empleo? ¿Cansado de
                  enviar currículums sin recibir respuesta? ¡No estás solo!
                  Sabemos que la búsqueda de empleo puede ser desafiante, pero
                  estamos aquí para ayudarte a superar esos obstáculos y
                  alcanzar tus metas profesionales.
                </h3>
              </div>
            </Grid>
            <Grid xs={4}>
              <Box>
                <br />
                <FormularioPersonalLandingPage id="formulario" />
              </Box>
            </Grid>
          </Grid>
          <Grid>
            <Grid>
              <h3>¿Qué Obtendrás?</h3>
              <ul>
                <li>
                  🚀 Resultados Rápidos: Nuestro curso de empleabilidad ha
                  ayudado a cientos de personas a conseguir empleo en menos de
                  un mes. Te daremos las herramientas y estrategias probadas
                  para acelerar tu búsqueda.
                </li>
                <li>
                  📋 Currículum Destacado: Aprenderás a crear un currículum
                  vitae que atraerá la atención de los empleadores y te
                  destacará entre la competencia.
                </li>
                <li>
                  🌐 Networking Efectivo: Descubre cómo construir relaciones
                  profesionales sólidas y utilizar tu red de contactos para
                  acceder a oportunidades ocultas.
                </li>
                <li>
                  🗣️ Entrevistas Exitosas: Domina las habilidades de entrevista
                  para causar una impresión positiva y aumentar tus
                  posibilidades de conseguir el trabajo.
                </li>
                <li>
                  💼 Negociación de Ofertas: Aprende a negociar ofertas de
                  trabajo que reflejen tu valía y te den la remuneración que
                  mereces.
                </li>
              </ul>
            </Grid>
            <Grid></Grid>
          </Grid>
          <br />
          <Grid>
            <Grid style={backgroundImageStyleMujer}>
              <Typography variant="h5" style={adjustedTextStyle}>
                ¡No puedes perder esta oportunidad! Podríamos cambiar la
                afirmación a una en positivo ¡¡Aprovecha esta oportunidad¡¡ ES
                GRATIS No dejes que la incertidumbre y la frustración de la
                búsqueda de empleo te detengan. Nuestro curso te brinda la guía
                y el apoyo que necesitas para encontrar empleo rápidamente y
                avanzar en tu carrera.
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Grid>
            <Grid>
              <h3 center>
                Descarga Nuestro Lead Magnet GRATUITO: "10 Estrategias para
                Destacar en Entrevistas"
              </h3>
              <p>
                ¿Listo para dar el primer paso hacia tu futuro profesional?
                Regístrate ahora y recibe nuestro valioso recurso GRATIS que te
                ayudará a mejorar tus habilidades de entrevista. ¡Es tu momento
                de brillar!
              </p>
             <center><Button type="submit" onClick={scrollToForm} variant="contained" color="primary">Regritrate ya</Button></center> 
              <p>
                <strong>
                  ¿Listo para dar el primer paso hacia tu futuro profesional?
                  Regístrate ahora y recibe nuestro valioso recurso GRATIS que
                  te ayudará a mejorar tus habilidades de entrevista. ¡Es tu
                  momento de brillar!
                </strong>
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Landing;
