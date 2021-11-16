import './App.css';
import LandingPage from './pages/landingPage/LandingPage';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
function App() {

  return (
    <div>
      <h1>Social Media App</h1>
    <LandingPage/>
    </div>
  );
}

export default App;
