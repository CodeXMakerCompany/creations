import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';

import { ThemeProvider } from 'styled-components';
import { themes } from "../../styles/theme";


import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { activate, toggleModal } from "../../actions/modal.actions";
//Main components



function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

export const NavbarGlobal = (props) => {
    const dispatch = useDispatch();
    
    const [themeSelection, setThemeSelection] = useState('light');
    const changeTheme = () => {
         return themeSelection === 'light' ? setThemeSelection('dark') 
         : (themeSelection === 'dark' ? setThemeSelection('light') : null); 
    }

    const HandleModal = () => {
      dispatch(toggleModal({ type: 'testing' }))
    }

    const icon = themeSelection === 'light' ? <HiMoon  size={40} /> : <CgSun  size={40} />

    return (
        <>
          <CssBaseline />
          <HideOnScroll {...props}>
            <AppBar>
              <Toolbar >
                <Typography variant="h6">Scroll to Hide App Bar</Typography>
                <div onClick={ changeTheme } style={{color: themes[themeSelection].titleColor}}>
                { icon}
            </div>
              </Toolbar>
            </AppBar>
          </HideOnScroll>
          <Toolbar />
          <ThemeProvider theme={ themes[themeSelection] }>
            <div style = {{ height:'100vh', backgroundColor: themes[themeSelection].pageBackground, transition: 'all .5s ease', color: themes[themeSelection].titleColor}}>
                <Box >
                    {  props.view === '/' ? ` Component principal -status pendiente- ` : 'not found baby'}
                </Box>
                <div>
                  <button onClick={() => HandleModal()} >click me</button>
                </div>
            </div>
          </ThemeProvider>
        </>
      );
}
