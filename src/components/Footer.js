import { Button, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react';
function Footer() {
    return (<>
    <Stack justifyContent="center" alignItems="center" flexDirection="row" margin={2}>
        <Button variant='outlined' startIcon={<LinkedInIcon />} style={{ border: '2px solid #02659a', borderRadius: '32px', margin: '8px', color: 'white' }} href='https://www.linkedin.com/in/aliki-kapasakalidi-921891203'>LINKEDIN</Button>
        <Button variant='outlined' startIcon={<GitHubIcon />} style={{ border: '2px solid #8b31aa', borderRadius: '32px', margin: '8px', color: 'white' }} href='https://github.com/AlikiKap'>GITHUB</Button>
        <Button variant='outlined' startIcon={<EmailIcon />} style={{ border: '2px solid #de4739', borderRadius: '32px', margin: '8px', color: 'white' }} href='mailto:aliki02.kapasakalidi@gmail.com'>E-MAIL</Button>
    </Stack>
    </>);
}
export default Footer;
