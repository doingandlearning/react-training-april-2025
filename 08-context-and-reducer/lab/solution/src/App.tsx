import './App.css'
import AppContent from './components/AppContent';
import { AuthProvider } from './context/AuthContext';

function App() {

  return (
    <AuthProvider>
      <div className="app-container">
        <AppContent />
      </div>
    </AuthProvider>
  );
}

export default App
