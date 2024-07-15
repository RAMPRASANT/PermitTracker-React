import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Dashboard from './components/Dashboard';
import Summary from './components/Summary';
import PermitDetails from './components/PermitDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/permitDetails" element={<PermitDetails />} />
          </Routes>
        </BrowserRouter>
      </header>
      <div>
      </div>
    </div>
  );
}

export default App;
