
import { ToastContainer } from 'react-toastify';
import './App.css';
import { AllRoutes } from './Components/AllRoutes';

function App() {
  return (
    <div className="App">
      <AllRoutes/>
      <ToastContainer />
    </div>
  );
}

export default App;
