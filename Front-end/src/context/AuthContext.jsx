import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

// Creazione del contesto di autenticazione
const AuthContext = createContext();

// URL di base per le richieste API
const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:2025';

// Provider del contesto di autenticazione
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Controlla se l'utente è già autenticato all'avvio dell'app
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          // Configura l'header di autorizzazione
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          
          // Ottieni i dati dell'utente
          const response = await axios.get(`${API_URL}/auth/profile`);
          setUser(response.data);
        }
      } catch (error) {
        console.error('Errore durante il controllo dell\'autenticazione:', error);
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
      } finally {
        setLoading(false);
      }
    };

    checkUserLoggedIn();
  }, []);

  // Funzione di registrazione
  const register = async (userData) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.post(`${API_URL}/auth/register`, userData);
      
      // Salva il token nel localStorage
      localStorage.setItem('token', response.data.token);
      
      // Configura l'header di autorizzazione
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      
      // Imposta l'utente nello stato
      setUser(response.data);
      
      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || 'Errore durante la registrazione');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Funzione di login
  const login = async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.post(`${API_URL}/auth/login`, { email, password });
      
      // Salva il token nel localStorage
      localStorage.setItem('token', response.data.token);
      
      // Configura l'header di autorizzazione
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      
      // Imposta l'utente nello stato
      setUser(response.data);
      
      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || 'Credenziali non valide');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Funzione di logout
  const logout = () => {
    // Rimuovi il token dal localStorage
    localStorage.removeItem('token');
    
    // Rimuovi l'header di autorizzazione
    delete axios.defaults.headers.common['Authorization'];
    
    // Reimposta lo stato dell'utente
    setUser(null);
  };

  // Funzione per gestire il login con Google
  const loginWithGoogle = () => {
    window.location.href = `${API_URL}/auth/google`;
  };

  // Funzione per gestire il callback di Google
  const handleGoogleCallback = (token) => {
    if (token) {
      // Salva il token nel localStorage
      localStorage.setItem('token', token);
      
      // Configura l'header di autorizzazione
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      // Ottieni i dati dell'utente
      return axios.get(`${API_URL}/auth/profile`)
        .then(response => {
          setUser(response.data);
          return response.data;
        })
        .catch(error => {
          console.error('Errore durante il recupero del profilo:', error);
          logout();
          throw error;
        });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        register,
        login,
        logout,
        loginWithGoogle,
        handleGoogleCallback,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizzato per utilizzare il contesto di autenticazione
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve essere utilizzato all\'interno di un AuthProvider');
  }
  return context;
};

export default AuthContext;