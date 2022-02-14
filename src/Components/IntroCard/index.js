import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Hi there! 👋 I'm
      </Typography>
      <Typography variant="h5" component="div">
        Conor Kelly
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Oracle Senior Consultant & Software Developer 👨‍💻
      </Typography>
      <Typography variant="body2">
        Applying my background in business management with full stack technical
        skills to solve real world problems 📊 💾 🖥️
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export const IntroCard = () => {
  return (
    <Box style={{ display: "block", margin: "auto" }} sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};
