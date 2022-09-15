import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<p>PAGINA INICIA </p>} />

            <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    )
}