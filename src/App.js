import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Component from './components/testing/Component';
import About from './components/testing/About';
import XWork from './components/testing/XWork';
import Blog from './components/testing/Blog';
import BlogMore from './components/testing/BlogMore';
import ContactUs from './components/testing/ContactUs';
import ReadPost from './components/testing/ReadPost';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Component />} path='/' />
          <Route element={<About />} path='/about-us' />
          <Route element={<XWork />} path='/our-work' />
          <Route element={<Blog />} path='/blog' />
          <Route element={<BlogMore />} path='/view-more' />
          <Route element={<ContactUs />} path='/contact-us' />
          <Route element={<ReadPost />} path='/blog-index' />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
