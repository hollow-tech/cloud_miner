import * as React from 'react';
import styled from 'styled-components';
import { Button } from './components/Buttons/Buttons.styles';
import { Checkbox, CheckCircle } from './components/Checkboxs';
import { Typography } from './components/Typography/Typography.styles';




const App:React.FC = () =>{

  return (
  <>   
        <Button variants="outlined" color='#0B65C6'>
          Создать депозит
        </Button>
        <Button variants="contained" color='#0B65C6'>
          Создать депозит
        </Button>
        <Typography variants='headline1'>
        Lato | 40 | Semibold
        </Typography>
        <Typography variants='headline2'>
        Lato | 32 | Semibold
        </Typography>
        <Typography variants='headline3'>
        Lato | 24 | medium
        </Typography>
        <Typography variants='body'>
        Lato | 18 | medium
        </Typography>
        <Typography variants='subtitle'>
        Lato | 14 | regular
        </Typography>
        <CheckCircle type='checkbox'>
          
        </CheckCircle>
  </>
  )
}

export default App;
