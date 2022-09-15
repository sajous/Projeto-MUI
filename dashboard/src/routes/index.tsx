import { Navigate, Route, Routes } from 'react-router-dom';
import { Button } from '@mui/material';
import {useDrawerContext} from '../shared/context';

export const AppRoutes = () => {
  const { toggleDrawerOpen } = useDrawerContext();
  
  return (
    <Routes>
      <Route path="/" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>TESTE</Button>} />

      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  );
};