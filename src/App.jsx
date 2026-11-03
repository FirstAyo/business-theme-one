import { Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import { Home, About, Services, ServiceDetail, Projects, ProjectDetail, Journal, Article, Contact, Legal, NotFound } from './pages/SitePages';

export default function App() {
  return <Routes><Route element={<SiteLayout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="services" element={<Services />} />
    <Route path="services/:slug" element={<ServiceDetail />} />
    <Route path="projects" element={<Projects />} />
    <Route path="projects/:slug" element={<ProjectDetail />} />
    <Route path="blog" element={<Journal />} />
    <Route path="blog/:slug" element={<Article />} />
    <Route path="contact" element={<Contact />} />
    <Route path="privacy" element={<Legal kind="privacy" />} />
    <Route path="terms" element={<Legal kind="terms" />} />
    <Route path="*" element={<NotFound />} />
  </Route></Routes>;
}
