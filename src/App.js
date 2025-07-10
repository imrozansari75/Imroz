import './App.css';
import bgVideo from './assets/bgvideo.mp4'
import { HashRouter } from 'react-router-dom';
import Layout from './layout/Layout';

function App() {
  return (
    <div className="animated-gradient">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <HashRouter>
        <Layout />
      </HashRouter>
    </div>
  );
}

export default App;
