import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ListGroup} from 'react-bootstrap';
import { Context } from '../index';

const TypeBar = observer (() => {
    const{device}= useContext(Context)
return (
<ListGroup className="list-group mt-6">
{device.types.map(type=>
    <ListGroup.Item
     key={type.id} 
     style={{cursor:'pointer'}}
     className="list-group-item"
     active={type.id===device.selectedType.id}
      onClick={()=>{device.setSelectedType(type)}}
      >
     {type.name}
     </ListGroup.Item>
)}
</ListGroup>
);
});

export default TypeBar;