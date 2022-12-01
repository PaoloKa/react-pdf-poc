import React, { useState } from "react";
import "./App.css";
import { PdfComponentDualPage } from "./components/pdf-component-dual-page";
import { PdfComponentZoom } from "./components/pdf-component-zoom";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

function App() {
  const [selectedComponent, setSelectedComponent] = useState(0);

  return (
    <div className="App">
      <Box>
        <Button onClick={() => setSelectedComponent(0)}>Test dual page</Button>
        <Button onClick={() => setSelectedComponent(1)}>
          Test zoom (single page)
        </Button>
      </Box>
      {selectedComponent === 0 && <PdfComponentDualPage />}
      {selectedComponent === 1 && <PdfComponentZoom />}
    </div>
  );
}

export default App;
