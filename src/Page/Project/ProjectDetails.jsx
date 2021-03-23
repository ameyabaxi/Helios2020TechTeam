import React from "react";
import data from "../../data/projectData";
import Layout from "../../Layout";
import { Grid, Box } from '@material-ui/core'
import Card from "react-bootstrap/Card"

import "./ProjectDetails.scss";

const ProjectDetails = ({ match }) => {
  const contents = data[match.params.id];
  const imageName = contents.imgUrl === "" ? 'HeliosFull.png' : contents.imgUrl; // default details image is HeliosFull.png
  return (
    <Layout>
      <h1>{contents.title}</h1>
      <Grid container>
        <Box>
          <img src={require('../../static/images/' + imageName)} />
        </Box>
        <Box>
          <p>
            {contents.summary}
          </p>
        </Box>
      </Grid>
      <Box>
        <p>
          {contents.body}
        </p>
      </Box>
    </Layout>
  );
};

///////

export default ProjectDetails;