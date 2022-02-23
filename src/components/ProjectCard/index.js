import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import ComputerIcon from "@mui/icons-material/Computer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import projects from "./projectData";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const ProjectCard = ({ projects }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={"Test"} subheader="JavaScript, HTML, CSS" />
      <CardMedia
        component="img"
        height="194"
        image="../../../public/images/Stockscape.png"
        alt="StockScape"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          A full-stack application leveraging an express server, mySQL database,
          handlebars templates, javascript, and chart.js to create an
          interactive stock market themed game.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="github.com"
          onClick={() =>
            window.open("https://github.com/conorjkelly96/stockscape")
          }
        >
          <GitHubIcon />
        </IconButton>
        <IconButton>
          <ComputerIcon
            aria-label="heroku.com"
            onClick={() => window.open("https://stockscape.herokuapp.com/")}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
};
