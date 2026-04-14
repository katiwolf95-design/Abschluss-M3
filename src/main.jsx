import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ArtworkProvider } from "./context/ArtworkContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ArtworkProvider>
      <App />
    </ArtworkProvider>
  </BrowserRouter>,
);
