// import { useTheme } from '@emotion/react';
import image from './9091671.jpg';
import './App.css';
import { Box, Typography } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';

function App() {
  // const theme= useTheme();
  const [count,setCount]= useState(0);

  return (
    <>
      <Box sx={{
        height: '1100px',
        background: `url(${image})`,
        backgroundSize: 'cover',
        display: 'flex',
      }}>
        <Box sx={{
          height: '1100px',
          width: '300px',
          backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))',
          backdropFilter: 'blur(10px)',
          zIndex: '1',
          position: 'absolute',
          float: 'left',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: '0.3s ease-out',
          transform: (count===1)?'translateX(-300px)':'translateX(0px)',
          // borderRight: '0.1px solid grey',
          boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.5)',
        }}>
          <CancelIcon sx={{
            position: 'absolute',
            left: '16.4rem',
            top: '2rem',
            cursor: 'pointer',
            color: 'blue',
          }}
          onClick={() => {
            setCount(1);
          }}
          />
          <Typography variant='h1' sx={{
            fontSize: '2.0rem',
            fontWeight: 600,
            color: 'aliceblue',
            pr: '8rem',
            mt: '2rem',
          }}>
            Menu
          </Typography>
          <Typography variant='h1' sx={{
            fontSize: '1.5rem',
            fontWeight: 600,
            color: 'aliceblue',
            pr: '4rem',
            mt: '1rem',
          }}>
            Dashboard
          </Typography>
          <Typography variant='h1' sx={{
            fontSize: '1.5rem',
            fontWeight: 600,
            color: 'aliceblue',
            pr: '6.3rem',
            mt: '1rem',
          }}>
            Contact
          </Typography>
        </Box>
        <MenuOpenIcon sx={{
          height: '2.5rem',
          width: '2.5rem',
          mt: '1.1rem',
          rotate: '180deg',
          display: (count===0)?'none':'flex',
          color: 'aliceblue',
          position: 'absolute',
          left: '0px',
        }}
        onClick={() => {
          setCount(0);
        }}
        />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          ml: '2rem',
        }}>
          <Typography variant='h1' sx={{
              fontSize: '2.0rem',
              fontWeight: 600,
              color: 'aliceblue',
              mt: '5rem',
          }}>
          Here Goes The Content</Typography>
          <Typography variant='h6' sx={{
            fontWeight: 600,
            color: 'aliceblue',
          }}>
          Lorem ipsum</Typography>
        </Box>
      </Box>
    </>
  );
}

export default App;
