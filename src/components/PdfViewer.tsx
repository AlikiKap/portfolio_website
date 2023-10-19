import React from 'react'
import { Document, Page } from 'react-pdf';

const PdfViewer: React.FC = () => {
    const pdfUrl = 'CV-Aliki-Kapasakalidi-Fullstack.pdf'

    return (
        
            <Document file={pdfUrl}>
                <Page pageNumber={1} />
            </Document>
        
    )
}

export default PdfViewer