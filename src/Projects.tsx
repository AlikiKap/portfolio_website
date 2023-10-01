import React from 'react';
import ProjectCard from './components/ProjectCard';
import { Grid } from '@mui/material';
import Footer from './components/Footer';

function Projects() {
  const projects = [
    {
      name: '"Solita", "City Bike Finland" Journeys Displayer',
      description: 'A test task made for Solita company. I implemented a website where the user can upload a csv file to a database with journeys completed on bikes and get the data displayed on the website.',
      tools: 'PostgreSQL, TypeScript, JavaScript, React, Node.js',
      link: 'https://github.com/AlikiKap/bikes_app',
    },
    {
      name: '"Wolt" Delivery Calculator',
      description: 'A test task made for Wolt that makes it much easier to calculate a delivery price according to their criteria like time of the delivery and delivery distance.',
      tools: 'TypeScript, React',
      link: 'https://github.com/AlikiKap/wolt-delivery-calculator',
    },
    {
      name: '"Polar" Sleep Tracker',
      description: `A university project for "Polar" company where we implemented a mobile app that tracks user's sleep data from the smartwatch and displays it on charts.`,
      tools: 'Kotlin',
      link: 'https://github.com/Din2Polar/PolarDemo',
    },
    {
      name: 'Phoodora E-commerce',
      description: `A university project where we implemented a food delivery website similar to Wolt or Foodora. It consists of user's view and admin's view, where admin can create a restaurant and edit the restaurant's menu.`,
      tools: 'JavaScript, React',
      link: 'https://github.com/Web-app-Team-10/phoodora-frontend',
    },
    {
      name: 'Dishes Shop',
      description: 'A university project where we implemented an online dishes shop with simple functionality like adding items to a cart and dynamic total price.',
      tools: 'JavaScript, HTML&CSS',
      link: 'https://github.com/AlikiKap/GradedEx1',
    },
    {
      name: 'To-do List',
      description: 'A simple website to help the user organize their everyday tasks. It is possible to create a task, set a deadline and delete tasks from the list.',
      tools: 'TypeScript, React, Sass',
      link: 'https://github.com/AlikiKap/Typescript-to-do-list',
    },
    {
      name: `Doctor's Telegram Chatbot`,
      description: `A Telegram chatbot to book a doctor's appointment.`,
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
    </>
  )
}

export default Projects