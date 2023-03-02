import React from 'react';
import Header from './header';

const wh = () => {
    return (
        <div>
            <Header />
            <iframe src="https://drive.google.com/file/d/1EGA9r8_dIp8tTZ5zZxOi7btyAPLW-0Lv/preview"
                title="pdf-viewer"
                className="pdf-viewer"
                frameBorder="0"
            />
        </div>
    )
}

export default wh;