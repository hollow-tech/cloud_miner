import React from 'react';
import { Button } from './components/Buttons/Buttons.styles';
import { CheckCircle } from './components/Checkboxs';
import { Aside } from './modules/Aside';
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
        <CheckCircle type='checkbox' >
          
        </CheckCircle>
        <Aside>
          
        </Aside>
        
  </>
  )
}

export default App;
