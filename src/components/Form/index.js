import { Container, TextField, Button } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { FormHelperText } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = ({ setFormData, apiRequest }) => {
  const formSchema = yup.object().shape({
    username: yup.string().required("Nome de usuário obrigatorio"),
    password: yup.string().required("Senha Obrigatoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    setFormData(data);
  };
  return (
    <Container
      maxWidth="xs"
      sx={{
        border: "black solid 1px",
        height: "400px",
        backdropFilter: "blur( 4px )",
      }}
      color="primary"
    >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Requisição POST na API
        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            label="Usuário"
            type="name"
            {...register("username")}
          />
          <FormHelperText>{errors.username?.message}</FormHelperText>
          <TextField
            variant="outlined"
            margin="normal"
            label="Senha"
            type="password"
            {...register("password")}
          />
          <FormHelperText>{errors.password?.message}</FormHelperText>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              color="secondary"
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Form;
