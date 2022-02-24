import { Typography, TextField, Button } from "@material-ui/core";

export const ContactMeForm = () => {
  return (
    <>
      <Typography variant="h5">BASIC WITH MATERIAL UI</Typography>
      <form>
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="First Name"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Last Name"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="email"
          label="Enter email address"
          variant="outlined"
        />
        <br />

        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="goal stage"
          variant="outlined"
        />
        <br />
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </>
  );
};
