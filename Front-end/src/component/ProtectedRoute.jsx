import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  // Mostra un loader mentre verifichiamo l'autenticazione
  if (loading) {
    return <div className="d-flex justify-content-center p-5">Caricamento...</div>;
  }

  // Reindirizza alla pagina di login se l'utente non è autenticato
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Renderizza i componenti figli se l'utente è autenticato
  return children;
};

export default ProtectedRoute;