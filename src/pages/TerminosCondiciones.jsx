import { AppBar, Box, Container } from "@mui/material";

const TerminosCondiciones = () => {
  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const año = fecha.getFullYear();
  return (
    <>
    
    <AppBar
       sx={{
        textAlign:"center"
        }} 
    >
    <h1>Terminos y Condiciones</h1> 
    </AppBar>
    <Container maxWidth="md" sx={{ 
        p:15
     }}>
    
    <Box sx={{ 
        bgcolor:"#2222",
        p:4,
        borderRadius:10
     }}>
      <h2>
        Política de Privacidad para el Registro de Evento en Linea 
      </h2>
      <h4>Fecha de Entrada en vigencia: {dia}/{mes}/{año}</h4>
      <h3>1. Introducción</h3>
      <p>
        Gracias por registrarte para nuestro programa de orientación laboral. En
        Hired, nos tomamos la privacidad de tus datos personales en serio y
        estamos comprometidos en protegerlos de acuerdo con la legislación
        ecuatoriana de protección de datos. Esta Política de Privacidad describe
        cómo recopilamos, utilizamos, compartimos y protegemos tu información
        personal.
      </p>
      <h3>2. Información que Recopilamos</h3>
      <p>
        Cuando te registras para nuestro evento, podemos recopilar la siguiente
        información personal: Nombre completo Dirección de correo electrónico
        Información de contacto profesional (como número de teléfono o dirección
        laboral) Información de la empresa Detalles de Redes sociales
      </p>
      <h3>3. Uso de la Información Personal</h3>
      <p>
        Utilizamos la información personal que recopilamos para los siguientes
        fines: Gestionar tu registro y participación en el evento. Enviarte
        información relacionada con el evento, como confirmaciones,
        recordatorios y detalles logísticos. Compartir contenido relevante del
        evento a través de Redes sociales y otras redes sociales, si así lo autorizas.
        Analizar la efectividad de nuestro evento y realizar mejoras futuras.
      </p>
      <h3>4.Compartir la Información Personal</h3>
      <p>
        No compartiremos tu información personal con terceros sin tu
        consentimiento expreso, a menos que estemos legalmente obligados a
        hacerlo. 5. Seguridad de los Datos Tomamos medidas razonables para
        proteger tus datos personales contra accesos no autorizados o
        divulgación. Sin embargo, ten en cuenta que ninguna medida de seguridad
        en línea es completamente infalible.
      </p>
      <h3>5. Seguridad de los Datos</h3>
      <p>Tomamos medidas razonables para proteger tus datos personales contra accesos no autorizados o divulgación. Sin embargo, ten en cuenta que ninguna medida de seguridad en línea es completamente infalible.</p>
      <h3>6. Retención de Datos</h3>
      <p>
        Mantendremos tus datos personales durante el tiempo necesario para
        cumplir con los fines descritos en esta política o según lo requiera la
        legislación aplicable.
      </p>
      <h3>7. Tus Derechos</h3>
      <p>
        Tienes derechos sobre tus datos personales, incluido el derecho a
        acceder, corregir, eliminar, restringir el procesamiento y objetar el
        procesamiento de tus datos. Si deseas ejercer cualquiera de estos
        derechos, contáctanos a través de info@hired.com.
      </p>
      <h4>8. Cambios en la Política de Privacidad</h4>
      <p>
        Podemos actualizar esta política de privacidad ocasionalmente para
        reflejar cambios en nuestras prácticas o en la legislación. Te
        notificaremos de cualquier cambio significativo en esta política.
      </p>
      <h3>9. Contacto</h3>
      <p>
        Si tienes preguntas o preocupaciones sobre esta política de privacidad o
        el procesamiento de tus datos personales, por favor contáctanos a través
        de info@hired.com.
      </p>
      </Box>
    </Container>
    </>
  );
};

export default TerminosCondiciones;
