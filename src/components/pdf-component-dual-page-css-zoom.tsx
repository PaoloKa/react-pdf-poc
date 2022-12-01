import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

export function PdfComponentDualPageCssZoom() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState(1);
  const [dualPage, setDualPage] = useState<boolean>(true);
  const [scale, setScale] = useState<number>(0.4);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  function changeScale(offset) {
    setScale((prevScale) => prevScale + offset);
  }

  function decreaseScale() {
    changeScale(-0.1);
  }

  function increaseScale() {
    changeScale(0.1);
  }

  return (
    <>
      <Box sx={{ maxHeight: "60vh" }}>
        <Document
          file="http://localhost:3000/example_more_pages.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(e) => console.log(e)}
        >
          <Box
            display="flex"
            flexDirection={"row"}
            justifyContent={"center"}
            sx={{
              transform: `scale(${scale})`,
              maxHeight: "750px",
            }}
          >
            <Page
              scale={3}
              pageNumber={pageNumber}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
            {dualPage && (
              <Page
                scale={3}
                pageNumber={pageNumber + 1}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            )}
          </Box>
        </Document>
      </Box>

      <Box sx={{ zIndex: 5, position: "absolute" }}>
        <p>Scale {scale}</p>
        <button type="button" disabled={scale <= 0.1} onClick={decreaseScale}>
          -
        </button>{" "}
        0.1{" "}
        <input
          type="range"
          min="0.1"
          max="3"
          value={scale}
          onChange={(event) => setScale(Number(event.target.value))}
          step="0.1"
        />{" "}
        5{" "}
        <button type="button" disabled={scale >= 5} onClick={increaseScale}>
          +
        </button>
      </Box>
    </>
  );
}
