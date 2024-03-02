import { useFormik } from "formik";
import { Button, Grid, TextField, Typography } from "@mui/material";
import * as Yup from "yup";
import "./Formulario.css";

const Formulario = () => {
  //   let valoresIniciales = {
  //     nombre: "",
  //     usuario: "",
  //     email: "",
  //     password: "",
  //   };

  //   const enviarForm = (data) => {
  //     console.log(data);
  //   };

  const { handleChange, handleSubmit, values, setFieldValue, errors } =
    useFormik({
      initialValues: {
        nombre: "",
        usuario: "",
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        nombre: Yup.string().required("Debes ingresar un nombre"),
        usuario: Yup.string().required("Debes ingresar un usuario"),
        email: Yup.string().required("Debes ingresar un email"),
        password: Yup.string().required("Debes ingresar un contraseña"),
      }),
      onSubmit: (data) => {
        console.log(data);
      },
      validateOnBlur: false,
      validateOnChange: false,
    });

  return (
    <div>
      <Typography color="primary" variant="h3" align="center">
        Formulario de Registro
      </Typography>

      <form className="form-container" onSubmit={handleSubmit}>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"space-evenly"}
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} md={5}>
            <TextField
              type="text"
              label="Ingrese su Nombre"
              variant="outlined"
              fullWidth
              //name="nombre"
              onChange={(e) => {
                setFieldValue("nombre", e.target.value);
              }}
              value={values.nombre}
              error={errors.nombre}
              helperText={errors.nombre}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              type="text"
              label="Nombre de Usuario"
              variant="outlined"
              fullWidth
              name="usuario"
              onChange={handleChange}
              value={values.usuario}
              error={errors.usuario}
              helperText={errors.usuario}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              type="email"
              label="Ingrese su E-mail"
              variant="outlined"
              fullWidth
              name="email"
              onChange={handleChange}
              value={values.email}
              error={errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              type="password"
              label="Ingrese su Contraseña"
              variant="outlined"
              fullWidth
              name="password"
              onChange={handleChange}
              value={values.password}
              error={errors.password}
              helperText={errors.password}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained">
          Registrarse
        </Button>
      </form>
    </div>
  );
};

export default Formulario;
