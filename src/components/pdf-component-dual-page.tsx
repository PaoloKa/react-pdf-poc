import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

export function PdfComponentDualPage() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState(1);
  const [dualPage, setDualPage] = useState<boolean>(true);
  const [scale, setScale] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <>
      <Document
        file="http://localhost:3000/example_more_pages.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(e) => console.log(e)}
      >
        <Box display="flex" flexDirection={"row"} justifyContent={"center"}>
          <Page
            scale={scale}
            pageNumber={pageNumber}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
          {dualPage && (
            <Page
              scale={scale}
              pageNumber={pageNumber + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          )}
        </Box>
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <Box display="flex" flexDirection={"row"}>
        <Button
          onClick={() => {
            setDualPage(!dualPage);
          }}
        >
          Dual page: {dualPage ? "on" : "off"}
        </Button>
      </Box>
    </>
  );
}
