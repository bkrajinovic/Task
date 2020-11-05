import React from 'react';
import Image from './Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner'


function Images({data}) {
    
    if (!data) {
        return (
            <div className="spinner">
            <Spinner animation="border" />
            <p>Loading...</p>
            </div>
        )
      }
    return (
        <div className="main_container">
            {data.map(data => (
                <Image className="image" key={data.id} data={data} />
            ))}
        </div>
    )
}

export default Images
