import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const CreateBrand = ({show,onHide}) => {
    return (
        <Modal className="modal-dialog modal-dialog-centered"
        show={show}
        onHide={onHide}
        >
        <h2 style={{textAlign:'center'}}>Добавить тип</h2>
        <Form className='p-2'>
            <Form.Control placeholder={'Введите название типа'}/>
        </Form>
        <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}> Закрыть</Button>
            <Button variant='outline-success' onClick={onHide}> Добавить</Button>
        </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;