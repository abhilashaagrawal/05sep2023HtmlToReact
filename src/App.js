
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Feature from './pages/Feature';
import Quote from './pages/Quote';
import Team from './pages/Team';
import Testimonial from './pages/Testimonial';
import Error404 from './pages/Error404';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="service" element={<Service />}></Route>
          <Route path="project" element={<Project />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="feature" element={<Feature />}></Route>
          <Route path="quote" element={<Quote />}></Route>
          <Route path="team" element={<Team />}></Route>
          <Route path="testimonial" element={<Testimonial />}></Route>
          <Route path="404" element={<Error404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
