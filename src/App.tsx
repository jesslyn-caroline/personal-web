import Layout from "./pages/Layout.tsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Intro from "./pages/Intro.tsx";
import About from "./pages/About.tsx";
import Project from "./pages/Project.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Intro />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;