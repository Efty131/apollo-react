import { useRef, useEffect } from "react";
import CloudPdfViewer from '@cloudpdf/viewer';

import Footer from './footer';
import Header from './header';
// import Transformation from '../images/Transformation.pdf';

const Notes = () => {

    const viewer = useRef(null);
  useEffect(() => {
    CloudPdfViewer(
      {
        documentId: "ca69e2e4-b38b-4352-ae1d-81b8fc4e6f93",
        darkMode: true
      },
      viewer.current
    ).then((instance) => {});
  }, []);

    return (
        <div>
            <Header />
            <div className="viewer" ref={viewer}></div>
            <Footer />
        </div>
    )
}

export default Notes;