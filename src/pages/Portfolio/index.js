import React from "react";
import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
  CardHeader,
} from "@material-ui/core";

import { useStyles, projects } from "./projects";

export const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div">
      <Grid container justify="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={2} key={index}>
            <Card className={classes.cardContainer}>
              <CardHeader
                title={project.title}
                subheader={project.technologies}
              />
              <CardMedia
                component="img"
                height="194"
                image={project.image}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  GitHub
                </Button>
                <Button size="small" color="primary">
                  Application
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
