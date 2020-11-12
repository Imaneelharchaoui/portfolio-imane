import React from 'react'

import PDFViewer from 'pdf-viewer-reactjs'

const ExamplePDFViewer = () => {
    return (
        <PDFViewer
            document={{
                url: 'ImaneelharchaouiFINAL-RESUME.pdf',
            }}
        />
    )
}

export default ExamplePDFViewer
