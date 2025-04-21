import React from 'react';
import { Document, Page } from 'react-pdf';
var PdfViewer = function () {
    var pdfUrl = 'CV-Aliki-Kapasakalidi-Data_Engineer.pdf';
    return (<Document file={pdfUrl}>
                <Page pageNumber={1}/>
            </Document>);
};
export default PdfViewer;
