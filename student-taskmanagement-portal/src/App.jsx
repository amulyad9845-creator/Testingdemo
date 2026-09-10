import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import StatCard from './components/StatCard';
import TaskCard from './components/TaskCard';
import Welcome from './components/Welcme';

function App() {
  return (
    <div>
      <Navbar />
      
      <Welcome/>
      
      <Dashboard/>
    </div>
  )
}

export default App ;
 