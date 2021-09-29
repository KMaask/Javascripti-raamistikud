import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function toggle(e) {
    if (e.target.alt === 'dog'){
        e.target.setAttribute( 'src', 'https://source.unsplash.com/Qmox1MkYDnY');
        e.target.setAttribute('alt', 'cat');
    } else {
        e.target.setAttribute( 'src', 'https://source.unsplash.com/LYK3ksSQyeo');
        e.target.setAttribute('alt', 'dog');
    }
}

const cat = (
    <div>
        <h1>Image toggle</h1>
        <img src="https://source.unsplash.com/Qmox1MkYDnY" alt="cat" onClick={toggle}
        />
        <p>Click on the photo</p>
    </div>
);

ReactDOM.render(cat, document.getElementById('root'));