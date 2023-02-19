import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useAuth from "../../hooks/useAuth";
import axios from "axios";
// import EditCollection from '../EditCollectionForm/EditCollectionForm';

function EditCollectionWindow(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(props.collectionData.name)
  console.log(name)
  const [description, setDescription] = useState(props.collectionData.description)
  const [user, token] = useAuth()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // let collectionInfo = props.collectionData
  console.log(props.collectionData)

  function handleSubmit(event){
    event.preventDefault();
    const newCollectionInfo = {
        name: name,
        description: description,
        user: user,
    };
    console.log(newCollectionInfo)
    editCollection(newCollectionInfo)
    }

  async function editCollection(newCollectionData){
    let response = await axios.put(`http://127.0.0.1:8000/api/collection/edit/${props.collectionData.id}/`, newCollectionData, {
        headers: {
            Authorization: "Bearer " + token,
        },
    })
    console.log(response)
    }
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Collection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form>
              <div>
                <label>Name</label>
                <input 
                  type='text' value={name}  
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div>
                <label>Description</label>
                <input type='text' value={description} onChange={(event) => setDescription(event.target.value)}></input>
              </div>
              {/* <button type='submit'>Submit</button> */}
            </form>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button variant="primary" type='submit' onClick={handleSubmit}>Save</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditCollectionWindow;