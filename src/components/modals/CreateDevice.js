import React, { useContext, useState } from 'react';
import { Button, Dropdown, Form, Modal,Col,Row } from 'react-bootstrap';
import { Context } from '../../index';

const CreateDevice = ({show,onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo]= useState([])
     
     const addInfo = ()=>{
        setInfo([...info,{title:'', description:'',number:Date.now()}])
     }
     const removeInfo = (number)=>{
        setInfo(info.filter(i=>i.number!==number))
     }
    return (
        <Modal className="modal-dialog modal-dialog-centered"
        show={show}
        onHide={onHide}
        >
        <h2 style={{textAlign:'center'}}>Добавить тип</h2>
        <Modal.Body style={{minHeight:150}}>
        <Form className='p-2'>
           <Dropdown className='mt-2 mb-2'>
            <Dropdown.Toggle>Выберете тип</Dropdown.Toggle>
            <Dropdown.Menu>
                {device.types.map((type)=>
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                )}
            </Dropdown.Menu>
           </Dropdown>
           <Dropdown className='mt-2 mb-2'>
            <Dropdown.Toggle>Выберете Бренд</Dropdown.Toggle>
            <Dropdown.Menu>
                {device.brand.map((brand)=>
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                )}
            </Dropdown.Menu>
           </Dropdown>
           <Form.Control className='mt-3' placeholder='Введите наименование товара'/>
           <Form.Control type='number' className='mt-3' placeholder='Введите стоимость товара'/>
           <Form.Control   type='file' className='mt-3'/>
           <hr/>
           <Button variant='outline-dark' onClick={addInfo}> Добавить новое устройство</Button>
           {
            info.map(i=>
                <Row key={i.number} className='mt-2'>
                    <Col md={4}>
                        <Form.Control
                            placeholder='Введите название свойства'
                        />
                    </Col>
                    <Col md={4}>
                        <Form.Control
                            placeholder='Введите описание'
                        />
                    </Col>
                    <Col md={4}>
                        <Button variant='outline-danger' onClick={()=>removeInfo(i.number)}>Удалить</Button>
                    </Col>
                </Row>
            )
           }
        </Form>
        </Modal.Body>
       
        <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}> Закрыть</Button>
            <Button variant='outline-success' onClick={onHide}> Добавить</Button>
        </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;