import { Card, CardContent, Typography, Link } from '@mui/material'
import React from 'react'

function ProjectCard() {
    return (
        <Card style={{ background: '#212121', color: 'white', width: '60%',padding:'16px', marginBottom:'16px' }}>
            <CardContent>
                <Typography style={{ fontSize: "22px", fontWeight: "800" }}>To-do List</Typography>
                <Typography>A website to help you manage your everyday tasks by adding them from the input field and delete the task whenever you are done with it.</Typography>
                <Typography>
                    Techologies used:
                    <mark
                        style={{ fontWeight: '600', background: "#D45BFF", borderRadius: '32px', paddingInline: '8px', marginInline: '8px' }}
                    >
                        TypeScript
                    </mark>
                </Typography>
                <Typography>
                    Github:
                </Typography>
                <Link href='https://github.com/AlikiKap/Typescript-to-do-list' underline="always" style={{ color: '#BEFF34' }}>https://github.com/AlikiKap/Typescript-to-do-list</Link>
            </CardContent>
        </Card>
    )
}

export default ProjectCard