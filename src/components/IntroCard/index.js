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
        <ul>
          <li>
            🔭 I’m currently working on StockScape 📈 alongside being a Senior
            Consultant @ Oracle.
          </li>
          <li>
            🌱 I’m currently learning HTML5, CSS3, JavaScript, jQuery,
            Bootstrap, Express.js, React.js, Node.js, Database Theory, MongoDB,
            MySQL & Git.
          </li>
          <li>👯 I’m looking to collaborate on anything!</li>
          <li>🤝 I’m looking for help with a Demand Planning Application 🔨</li>
          <li>👨‍💻 All of my projects are available over here</li>
          <li>📝 I regularly write articles on this fake news website...</li>
          <li>💬 Ask me about SuiteScript 🍫</li>
          <li>📫 How to reach me conorjkelly96@gmail.com</li>
          <li>📄 Know about my experiences by going over here!</li>
          <li>
            ⚡ Fun fact can do cross bar challenges on demand with 100% success
            rate.
          </li>
        </ul>
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
