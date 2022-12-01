import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { Document, Outline, Page } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

export function PdfComponentThumbnails() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <Box display="flex" flexDirection={"row"}>
      <Box display="flex">
        <Document
          file="http://localhost:3000/example_more_pages.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(e) => console.log(e)}
          onItemClick={(e) => console.log("item click", e)}
        >
          <Box display="flex">
            <Box display="flex" width="350px" flexWrap={"wrap"}>
              {Array.from(new Array(numPages), (el, index) => (
                <Box
                  display="flex"
                  maxHeight={"250px"}
                  m={1}
                  border={"black solid 1px"}
                  onClick={() => setPageNumber(index + 1)}
                >
                  <Page
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    renderMode={"svg"}
                    height={200}
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={120}
                  />
                </Box>
              ))}
            </Box>
            <Page
              pageNumber={pageNumber}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Box>
        </Document>
      </Box>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </Box>
  );
}
