import { useState,useContext,useEffect } from "react";
import { Typography, AppBar ,CssBaseline, Grid, Toolbar, } from "@mui/material";
import { Box, Tabs ,Tab, TabPanel } from "@mui/material";
import {BrowserRouter,Link} from "react-router-dom"

export default function Header(){
    // let [,]=useState


    return(
        // <nav>
        //    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        //        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        //          <Tab label="Item One" {...a11yProps(0)} />
        //          <Tab label="Item Two" {...a11yProps(1)} />
        //          <Tab label="Item Three" {...a11yProps(2)} />
        //        </Tabs>
        //    </Box>
        //    <TabPanel value={value} index={0}>
        //        Item One
        //    </TabPanel>
        //    <TabPanel value={value} index={1}>
        //        Item Two
        //    </TabPanel>
        //    <TabPanel value={value} index={2}>
        //        Item Three
        //    </TabPanel>
        // </nav>
      <nav>
        <CssBaseline/>
          <AppBar position="relative">
              <Toolbar>
                  <Link to="Home"><Typography varient="h6" >Home  </Typography></Link>
                  <Link to="KinderTeachers"><Typography varient="h6" align="right">  Kindergarten teachers  </Typography></Link>
                  <Link to="Classes"><Typography varient="h6" align="right">  Classes  </Typography></Link>
                  {/* <Link to="ParentCommittee"><Typography varient="h6" align="right">  Parents Committee  </Typography></Link> */}
                  <Link to="Contact"><Typography varient="h6" align="right">  Contact Us</Typography></Link>
              </Toolbar>
          </AppBar>

        
      </nav>
     )
 }
