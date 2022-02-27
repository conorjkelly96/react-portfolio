import { makeStyles } from "@material-ui/core/styles";

import stockscape from "./images/Stockscape.png";
import nosqlapi from "./images/no-sql-api.gif";
import jscodequiz from "./images/jscodequiz.gif";
import notetakerexpress from "./images/notetaker.gif";
import weatherdashbaord from "./images/weatherdashboard.gif";
import opensourcelogo from "./images/opensource-logo.png";
import graphqlapollo from "./images/graphql_apollo.png";
import scm from "./images/scm.png";
import boredasbook from "./images/boredasbook.gif";
import passwordgenerator from "./images/passwordgenerator.gif";
import seorefactoring from "./images/seorefactoring.gif";
import teamprofilegenerator from "./images/teamprofilegenerator.png";

export const useStyles = makeStyles({
  cardContainer: {
    maxWidth: 345,
    margin: "3rem",
  },
});

export const projects = [
  {
    title: "StockScape",
    description:
      "A full-stack application leveraging an express server, mySQL database, handlebars templates, javascript, and chart.js to create an interactive stock market themed game.",
    technologies: "JavaScript, HTML, CSS",
    tools:
      "bcrypt, chart.js, session-sequelize, express, handlebars.js, express.js, mySQL, sequelize ORM",
    github: "https://github.com/conorjkelly96/stockscape",
    app: "https://stockscape.herokuapp.com/",
    image: stockscape,
  },
  {
    title: "Social Network API - NoSQL",
    description:
      "A RESTful API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list, leveraging Express.js for routing, a MongoDB database, and the Mongoose ODM.",
    technologies: "JavaScript",
    tools: "Apollo-Server, Express.js, GraphQL, Moment, Mongoose",
    github:
      "https://github.com/conorjkelly96/social-network-api-nosql/tree/main",
    app: "https://github.com/conorjkelly96/social-network-api-nosql/tree/main",
    image: nosqlapi,
  },
  {
    title: "JavaScript Code Quiz",
    description:
      "The goal for this project is to construct a JavaScript quiz which demonstrates dynamic DOM manipulation skills. The site functionality relies heavily on user interaction mainly via answer selection and user information. As the user progresses through the quiz, the time remaining on the quiz is dynamically updated, reflecting the user's score.",
    technologies: "JavaScript, HTML, CSS",
    tools: "Google Fonts, Custom CSS",
    github: "https://github.com/conorjkelly96/javascript-code-quiz",
    app: "https://conorjkelly96.github.io/javascript-code-quiz/",
    image: jscodequiz,
  },
  {
    title: "Note Taker Express.js",
    description:
      "A web application designed to allow users to make and save notes. Leveraging express.js",
    technologies: "JavaScript, HTML, CSS",
    tools: "express.js, moment.js, uuidv4",
    github: "https://github.com/conorjkelly96/note-taker-express.js",
    app: "https://note-taker-application-express.herokuapp.com/",
    image: notetakerexpress,
  },
  {
    title: "Weather Dashboard",
    description:
      "Using 3rd party APIs to generate weather results based on user search input.",
    technologies: "JavaScript, HTML, CSS (BULMA), APIs",
    tools:
      "bcrypt, chart.js, session-sequelize, express, handlebars.js, express.js, mySQL, sequelize ORM",
    github: "https://github.com/conorjkelly96/stockscape",
    app: "https://stockscape.herokuapp.com/",
    image: weatherdashbaord,
  },
  {
    title: "Tech blog",
    description:
      "Creating a tech blog with HTML, CSS and JavaScript leveraging sequelize.js, handlebars.js, express.js & mySQL.",
    technologies: "JavaScript, HTML, CSS",
    tools:
      "bcrypt, chart.js, session-sequelize, express, handlebars.js, express.js, mySQL, sequelize ORM",
    github: "https://github.com/conorjkelly96/tech-blog",
    app: "https://github.com/conorjkelly96/tech-blog",
    image: opensourcelogo,
  },
  {
    title: "Graph QL Boilerplate Code",
    description:
      "It takes time doing config over and over again for the same projects when the changes are marginal. Kickstart your new GraphQL and Apollo project today with this simple boilercode solution allowing you to setup a server in seconds.",
    technologies: "Node.js, Apollo-Server, GraphQL",
    tools:
      "bcrypt, chart.js, session-sequelize, express, handlebars.js, express.js, mySQL, sequelize ORM",
    github: "https://github.com/conorjkelly96/graphql-boilerplate-code",
    app: "https://github.com/conorjkelly96/graphql-boilerplate-code",
    image: graphqlapollo,
  },
  {
    title: "Demand Planning Tool",
    description:
      "A demand planning tool used to help companies calculate procurement quantities based on inventory management parameters.",
    technologies: "JavaScript, HTML, CSS",
    tools:
      "bcrypt, chart.js, session-sequelize, express, handlebars.js, express.js, mySQL, sequelize ORM",
    github: "https://github.com/conorjkelly96/demand-planning-tool",
    app: "https://github.com/conorjkelly96/demand-planning-tool",
    image: scm,
  },
  {
    title: "Bored-As-Book",
    description:
      "A tongue in cheek web application designed to allow users to randomly generate activities, save to local storage & search web results based on activities selected.",
    technologies: "JavaScript, HTML, CSS",
    tools:
      "bcrypt, chart.js, session-sequelize, express, handlebars.js, express.js, mySQL, sequelize ORM",
    github: "https://github.com/conorjkelly96/bored-as-book",
    app: "https://conorjkelly96.github.io/bored-as-book/",
    image: boredasbook,
  },
  {
    title: "Random Password Generator",
    description:
      "This project consists of building an application which allows the user to randomly generate a password given a set of user defined criteria. It combines the use of HTML and CSS to build the core elements of the webpage, and javascript to accept user input and convert into an output.",
    technologies: "JavaScript, HTML, CSS",
    tools:
      "bcrypt, chart.js, session-sequelize, express, handlebars.js, express.js, mySQL, sequelize ORM",
    github: "https://github.com/conorjkelly96/random-password-generator",
    app: "https://conorjkelly96.github.io/random-password-generator/",
    image: passwordgenerator,
  },
  {
    title: "Semantic HMTL Refactoring",
    description:
      "Undertaking a refactoring task to ensure the client's website is optimise using semantic HTML and has higher accessibility.",
    technologies: "HTML, CSS",
    tools:
      "bcrypt, chart.js, session-sequelize, express, handlebars.js, express.js, mySQL, sequelize ORM",
    github:
      "https://github.com/conorjkelly96/semantic-html-refactoring-marketing-agency",
    app: "https://conorjkelly96.github.io/semantic-html-refactoring-marketing-agency/",
    image: seorefactoring,
  },
  {
    title: "StockScape",
    description:
      "This command line interface application is designed to allow managers to quickly generate a Team Profile webpage based on the different types of employees they want to add with their corresponding contact information.",
    technologies: "JavaScript, HTML, CSS",
    tools:
      "bcrypt, chart.js, session-sequelize, express, handlebars.js, express.js, mySQL, sequelize ORM",
    github: "https://github.com/conorjkelly96/team-profile-generator",
    app: "https://github.com/conorjkelly96/team-profile-generator",
    image: teamprofilegenerator,
  },
];
