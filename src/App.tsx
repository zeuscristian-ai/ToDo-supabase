// App.tsx
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Statistiques from "@/pages/Statistiques";
import Layout from "./layouts/Layout";

const App: React.FC = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="statistiques" element={<Statistiques />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
export default App;
