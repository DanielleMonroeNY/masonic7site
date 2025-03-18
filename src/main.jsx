


/**

function App() {
  ReactDOM.createRoot(
    document.getElementById('app')
  ).render(<homePageComponent />)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
 */




import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
//import TopNavComponent from './components/topNav';
import './stylesheets/index.css';
import './stylesheets/App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)