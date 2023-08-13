import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Grid } from '@mui/material';

function Projects() {
  const projects = [
    {
      name: '',
      description: '',
      tools: '',
      link: '',
    },
    {
      name: '',
      description: '',
      tools: '',
      link: '',
    },
    {
      name: '',
      description: '',
      tools: '',
      link: '',
    },
    {
      name: '',
      description: '',
      tools: '',
      link: '',
    },
    {
      name: '',
      description: '',
      tools: '',
      link: '',
    },
    {
      name: '',
      description: '',
      tools: '',
      link: '',
    },
  ]
  return (
    <>
      <Grid
      container
      display='flex'
      alignItems='center'
      justifyContent='center'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
      </Grid>
    </>
  )
}

export default Projects