import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

const Header = () => {
  return (
    <div className="App">

        <AppBar>
            <Toolbar>
                <Typography variant="h6" component="h1">
                    Scuffed Devs
                </Typography>
            </Toolbar>
        </AppBar>

    </div>
    
  )
}

export default Header