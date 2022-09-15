import { Navigate, Route, Routes } from 'react-router-dom';
import { Button } from '@mui/material';
import {useAppThemeContext} from '../shared/context';

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  
  return (
    <Routes>
      <Route path="/" element={<Button variant='contained' color='primary' onClick={toggleTheme}>TESTE</Button>} />

      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  );
};