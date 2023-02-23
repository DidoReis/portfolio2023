import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";

/* Scenes */
import Layout from "./scenes/layout/layout";
import Home from "./scenes/home/home";
import Quemsou from "./scenes/quemsou/quemsou";
import Experience from "./scenes/experience/experience";
import Websites from "./scenes/websites/websites";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const storage = typeof window !== "undefined" ? localStorage.theme : "dark";
  const [storageTheme, setStorageTheme] = useState(storage);

  useEffect(() => {
    localStorage.setItem("theme", mode);
    setStorageTheme(mode);
  }, [theme, storageTheme, mode]);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/quemsou" element={<Quemsou />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/websites" element={<Websites />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
