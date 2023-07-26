import './index.css';
import Aside from "./Components/Aside";
import Header  from './Components/Header';
import Overview from './Components/Overview';

function App() {
  return (
    <div className="bg-[#F6F8FA] flex " >
      <Aside />
      <div>
      <Header />
      <Overview />
      </div>
      
    </div>
  );
}

export default App;
