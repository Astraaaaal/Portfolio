import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DesignThemeProvider } from './hooks/useDesignTheme';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import ProjectDetail from './pages/ProjectDetail';
import './i18n';

export default function App() {
  return (
    <DesignThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<AllProjects />} />
            <Route path="/projet/:slug" element={<ProjectDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DesignThemeProvider>
  );
}
