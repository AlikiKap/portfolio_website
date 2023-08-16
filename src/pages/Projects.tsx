import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Grid } from '@mui/material';
import Footer from '../components/Footer';

function Projects() {
  const projects = [
    {
      name: 'Solita, City Bike Finland Journeys Displayer',
      description: 'A test task made for Solita company where I implemented a website that takes a csv file with journeys completed with City Bike Finland bicycles and the data is displayed.',
      tools: 'PostgreSQL, TypeScript, JavaScript, React, Node.js',
      link: 'https://github.com/AlikiKap/bikes_app',
    },
    {
      name: 'Wolt Delivery Calculator',
      description: 'A test task made for Wolt that makes it much easier to calculate a delivery price for any case.',
      tools: 'TypeScript, React',
      link: 'https://github.com/AlikiKap/wolt-delivery-calculator',
    },
    {
      name: 'Polar Sleep Tracker',
      description: 'A university project for Polar company where we implemented a mobile app that tracks your sleep data from the smartwatch.',
      tools: 'Kotlin',
      link: 'https://github.com/Din2Polar/PolarDemo',
    },
    {
      name: 'Phoodora E-commerce',
      description: 'A university project where we implemented a food delivery website similar to Wolt and Foodora.',
      tools: 'JavaScript, React',
      link: 'https://github.com/Web-app-Team-10/phoodora-frontend',
    },
    {
      name: 'Dishes Shop',
      description: 'A university project where we implemented an online dishes shop.',
      tools: 'JavaScript, HTML&CSS',
      link: 'https://github.com/AlikiKap/GradedEx1',
    },
    {
      name: 'To-do List',
      description: 'A simple website to help you organize your everyday tasks.',
      tools: 'TypeScript, React, Sass',
      link: 'https://github.com/AlikiKap/Typescript-to-do-list',
    },
    {
      name: "Doctor's Telegram Chat Bot",
      description: 'A telegram chat bot to make a doctor appointment.',
      tools: 'Python',
      link: 'https://github.com/AlikiKap/telegram-bot',
    },
  ]
  return (
    <>
      <Grid
        container
        display='flex'
        alignItems='center'
        justifyContent='center'>
        {projects.map(
          project => <ProjectCard project={project} />
        )}
      </Grid>
      <Footer/>
    </>
  )
}

export default Projects