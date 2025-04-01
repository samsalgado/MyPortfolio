import "tailwindcss/tailwind.css";
import Topbar from './topbar';
import VidGallery from './vidgallery';
import Values from "./Values";
import Foote from './Foote';
function App() {
  return (
    <div class="App">
      <Topbar />
        <VidGallery />
        <div class='scrol'>
          <Values />
        </div>
        <footer class='socials'>
          <Foote />
        </footer>

      
    </div>
  );
}

export default App;
