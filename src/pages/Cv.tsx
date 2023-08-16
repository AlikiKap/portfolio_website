import { Grid, Typography } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'

function Cv() {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexDirection={"column"}
        style={{ color: 'white', textAlign: 'center' }}>

        <Typography>
          Aliki Kapasakalidi
        </Typography>
        <Typography>
          Front-end Developer
        </Typography>
        <Typography>
          Education:
        </Typography>
        <Typography>
          Oulu University of Applied Sciences (OAMK)
          <br />
          Bachelor of Engineering, Information Technology
          <br />
          Oulu, Finland
          <br />
          2020 – Present

        </Typography>
        <Typography>
          Work Experience:
        </Typography>
        <Typography>
          29.12.2021 – 05.08.2021 – Book Illustrator
          <br />
          03.06.2022 – 01.08.2022 – Babysitter, Athens, Greece
          <br />
          04.08.2022 – 26.08.2022 – Waiter, “Café Boheme”, Athens, Greece
        </Typography>
        <Typography>
          Languages:
        </Typography>
        <Typography>
          English – Proficiency
          <br />
          Finnish – Beginner
          <br />
          Greek – Native
          <br />
          Russian – Native
        </Typography>
        <Typography>
          Hobbies:
        </Typography>
        <Typography>
          Digital and traditional art, UI/UX design
        </Typography>
        <Typography>
          Skills:
        </Typography>
        <Typography>
          Agile
          <br />
          Teamwork
          <br />
          Web development:
          <br />
          Git version control, Github
          <br />
          HTML & CSS
          <br />
          JavaScript
          <br />
          TypeScript
          <br />
          React.js
          <br />
          Node.js
          <br />
          Python
          <br />
          SQL
          <br />
          Java
          <br />
          Styles:
          <br />
          Bootstrap
          <br />
          SASS
          <br />
          Design:
          <br />
          Figma
          <br />
          Wordpress
          <br />
          Axure RP

        </Typography>
      </Grid>
      <Footer/>
    </>
  )
}

export default Cv