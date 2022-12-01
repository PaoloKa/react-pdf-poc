import React, { useState } from "react";
import "./App.css";
import { PdfComponentDualPage } from "./components/pdf-component-dual-page";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { PdfComponentDualPageCssZoom } from "./components/pdf-component-dual-page-css-zoom";
import { PdfComponentZoom } from "./components/pdf-component-zoom";
import { PdfComponentThumbnails } from "./components/pdf-component-thumbnails";

function App() {
  const [selectedComponent, setSelectedComponent] = useState(0);

  return (
    <div className="App">
      <Box sx={{ zIndex: 5 }}>
        <Button
          sx={{ m: 2 }}
          variant="outlined"
          onClick={() => setSelectedComponent(0)}
        >
          Test dual page
        </Button>
        <Button
          sx={{ m: 2 }}
          variant="outlined"
          onClick={() => setSelectedComponent(1)}
        >
          Test zoom (single page)
        </Button>
        <Button
          sx={{ m: 2 }}
          variant="outlined"
          onClick={() => setSelectedComponent(2)}
        >
          Test zoom css(dual page)
        </Button>
        <Button
          sx={{ m: 2 }}
          variant="outlined"
          onClick={() => setSelectedComponent(3)}
        >
          Test thumbnails
        </Button>
      </Box>
      {selectedComponent === 0 && <PdfComponentDualPage />}
      {selectedComponent === 1 && <PdfComponentZoom />}
      {selectedComponent === 2 && <PdfComponentDualPageCssZoom />}
      {selectedComponent === 3 && <PdfComponentThumbnails />}
    </div>
  );
}

export default App;
