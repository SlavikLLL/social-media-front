import './App.css';
import { Auth } from './pages/Auth/Auth';
import Home from './pages/homepage/Home';
import ProfilePage from './pages/ProfilePage/ProfilePage';



function App() {
  return (
    <div className="App">
    <div className='blur' style={{top:'-18%' ,right:'0'}}></div>
    <div className='blur' style={{top:'36%' ,left:'-8rem'}}></div>
    {/* <Home /> */}
   <ProfilePage />
   {/* <Auth /> */}
     </div>
  );
}

export default App;
