import * as React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from "axios";
//グリッドで分けている部分
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

function Timecard() {
  //   const baseURL = "http://"+process.env.REACT_APP_IP_PORT;

  return (
    <>
      <Link style={{ textDecoration: 'none', color: '' }} to="/input">
        <h1>test input</h1>
      </Link>
      </>
      )
}
      export default Timecard;