import { Autocomplete, Box, Button, Checkbox, Container, FormControl, FormControlLabel, FormGroup, Grid, Select, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";

const genero=[
    {label: 'Masculino'},
    {label: 'Femenino'},
    {label: 'Otros'},
]
const FormularioPersonalLandingPage = () => { 
    const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState(0);
  const [sexo, setSexo] = useState("");
  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");
    return (
        <Box sx={{ 
        bgcolor:"#EFEFEF",
        p:4,
        borderRadius:10,
        
        }}>
        <form>
         <br />   
         <FormGroup>
         <TextField sx={{ bgcolor:"white"}} id="name" label="Nombre " variant="outlined" />
         <br />
         <TextField sx={{ bgcolor:"white"}} id="n" label="Apellido" variant="outlined" />
         <br />
         <TextField sx={{ bgcolor:"white"}} id="name" label="email" variant="outlined" />
        <br/>
        {/* <Autocomplete

            disablePortal
            id="genero"
        options={genero}
        sx={{ bgcolor:"white" }}
        renderInput={(params) => <TextField {...params} label="Genero"/>}
        />
        <br /> */}
         <TextField sx={{ bgcolor:"white"}} id="fono" label="Telefono" variant="outlined" />        
        <FormControlLabel control={<Checkbox />} label={<a href="/terminos" target="_blank">Terminos condiciones</a>} />
        <br />
        <Button type="submit" variant="contained" >Aceptar</Button>
        </FormGroup>
        </form>   
        </Box>  
    )
}
export default FormularioPersonalLandingPage;