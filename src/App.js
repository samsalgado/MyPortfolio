import './App.css';
import Topbar from './topbar';
import VidGallery from './vidgallery';
import Table from './Table';
import AboutMe from './AboutMe';
import Foote from './Foote';
function App() {
  return (
    <div className="App">
      <Topbar />
      <header className="App-header">
        
        <h1>Applied Experience</h1>
        <VidGallery />
        <div className='scrol'>
          <AboutMe />
        </div>
        </header>
        <div className="App-header">
        <h1>Skill Set Table</h1>
        <Table />
        </div>
        <footer className='socials'>
          <Foote />
        </footer>
        
      
    </div>
  );
}

export default App;
