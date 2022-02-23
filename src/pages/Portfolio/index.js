import React from "react";
import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import { useStyles, projects } from "./projects";

export const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div">
      <Grid container justify="center">
        {projects.map((project, index) => (
          <Grid item xs={6} sm={6} md={4} lg={2} xl={2} key={index}>
            <Card className={classes.cardContainer}>
              <CardMedia
                component="img"
                alt="pj1"
                height="140"
                image={project.image}
              />
              <CardContent>
                <Typography
                  color="textSecondary"
                  component="paragraph"
                  variant="body2"
                >
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
