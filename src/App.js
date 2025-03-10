import "tailwindcss/tailwind.css";
import Topbar from './topbar';
import VidGallery from './vidgallery';
import Table from './Table';
import AboutMe from './AboutMe';
import Foote from './Foote';
function App() {
  return (
    <div class="App">
      <Topbar />
      <header class="App-header container sm:p-4 md:p-8 lg:p-12">
        <h1 class='text-4x1 font-bold text-white'> Applied Experience</h1>
        <VidGallery />
        <div class='scrol'>
          <AboutMe />
        </div>
        </header>
        <div class="flex flex-col sm:flex-row">
        <h1 class="text-4x1 font-bold text-white">Skill Set Table</h1>
        <Table />
        </div>
        <footer class='socials'>
          <Foote />
        </footer>

      
    </div>
  );
}

export default App;
