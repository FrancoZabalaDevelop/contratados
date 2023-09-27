import { FormControl } from "@mui/base";
import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Navigate } from "react-router-dom"
import FormularioPersonalLandingPage from "../components/FormularioPersonalLnadingpage";

const Landing = () => {
    
    return(
        <>
            <h1>Landing</h1>
            <Container maxWidth="xl">
                <Grid>
                    <Grid container spacing={2}>
                        <Grid xs={7}>
                        
                        <br/>
                        <br/>
                        <h1>Desbloquea Tu Futuro Profesional en 4 Semanas</h1>
                        <h2>Encuentra Empleo en Menos de 1 Mes con Nuestro Curso de Empleabilidad</h2>
                        <h3>¿Te sientes atrapado en la búsqueda de empleo? ¿Cansado de enviar currículums sin recibir respuesta? ¡No estás solo! Sabemos que la búsqueda de empleo puede ser desafiante, pero estamos aquí para ayudarte a superar esos obstáculos y alcanzar tus metas profesionales.
                        </h3>                     
                        
                        </Grid>
                        <Grid xs={4}>
                        <Box  >
                            <FormularioPersonalLandingPage/>
                        </Box>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid>

                        </Grid>
                        <Grid>
                            
                        </Grid>
                    </Grid>
                    <Grid>
                    
                    </Grid>
                    <Grid>
                    
                    </Grid>
                </Grid>
            </Container>
        </>
    )
 }

 export default Landing;