import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Reactmodal = (props) => {
   console.log(props.product)
   const {title,image,description,price} = props.product;
//    const {title} = props.product
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title.slice(20)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='text-center'>
            <img width={"200px"} src={image} alt=""/>
            </div>
            <div>
                <p>{description}</p>
                <h5>price:{price}</h5>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Reactmodal;