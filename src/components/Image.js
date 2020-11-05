import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import moment from 'moment';

function Image({data}) {
    const [button, setButton] = useState(false)
    
    let handleHide = (e) => {
        document.getElementById(e).style.display = "none";
      };

      let handleChange = () => {
        setButton(button => !button)
      };

    return (
        <Card id={data.id}  >
            <Card.Img variant="top"  src={data.thumbnailUrls.imedia_1024} />
        <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
            <p><b>Published on:</b> {moment(data.publishedOn).format("DD/MM/YYYY")}</p>
            <p><b>Author:</b> {data.authorScreenName}</p>
        <Button className="pregledano" variant={button ? "success" : "primary"} onClick={() => handleChange()} >{button ? "Pregledano" : "Nepregledano"}</Button>
        <br />
        <br />
        <Button className="ukloni" variant="danger" onClick={() => handleHide(data.id)} >Ukloni</Button>
        </Card.Body>
        </Card>
    )
}

export default Image;
