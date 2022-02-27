import { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, TextField } from "@mui/material";
import { SubmitModal } from "../SubmitModal";

const theme = createTheme();

export const ContactMeForm = () => {
  const [showNoBackEndModal, setNoBackEndModal] = useState(false);

  const onSubmitContactMeForm = () => {
    console.log("submitted form");
    setNoBackEndModal(true);
  };

  const handleClose = () => setNoBackEndModal(false);

  const handleValidation = (event) => {
    const data = new FormData(event.currentTarget);
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const email = data.get("email");
    const description = data.get("description");

    let errors = {};
    let formIsValid = true;
    const fields = [firstName, lastName, email, description];

    //Name
    if (!firstName) {
      formIsValid = false;
      errors[firstName] = "Cannot be empty";
    }

    if (!lastName) {
      formIsValid = false;
      errors[lastName] = "Cannot be empty";
    }

    if (typeof firstName && lastName !== "undefined") {
      if (!firstName.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors[lastName] = "Only letters";
      }
    }

    //Email
    if (!fields[email]) {
      formIsValid = false;
      errors[email] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (this.handleValidation()) {
      console.log("Form submitted");
    } else {
      console.log("Form has errors");
    }

    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      description: data.get("description"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          onSubmit={handleSubmit}
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <ContactMailIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contact Me
          </Typography>
          <Box
            component="form"
            noValidate
            // onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  type="test"
                  id="description"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onSubmitContactMeForm}
            >
              Submit
            </Button>
            <SubmitModal show={showNoBackEndModal} onClose={handleClose} />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
