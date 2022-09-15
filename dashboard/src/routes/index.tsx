import { Navigate, Route, Routes } from 'react-router-dom';
import { Button } from '@mui/material'
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Button variant='contained' color='primary'>TESTE</Button>} />

            <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    )
}