import React, { useState } from 'react';
import classnames from 'classnames';
import { Form } from 'react-bootstrap';

import Button from '../../Components/Button';

import styles from './index.module.css';

const TRANSPORT = [
    'Организованный шатл',    
    'Машина'
];

const Participants = () => {
    const [name, setName] = useState(null);
    const [count, setCount] = useState(null);
    const [transport, setTransport] = useState(null);
    const [guests, setGuests] = useState(null);

    const onSubmit = event => {
        event.preventDefault()
        console.log(event);
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>Список гостей</div>        
            <div className={styles.form}>
                <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Имя</Form.Label>
                    <Form.Control 
                        placeholder="Введите имя" 
                        onChange={e => setName(e.target.value)}
                    />            
                </Form.Group>
        
                <Form.Group>
                <Form.Label>Сколько будет человек</Form.Label>
                    <Form.Control 
                        as="select" 
                        onChange={e => setCount(e.target.value)}
                    >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                {count > 1
                    ? (
                        <Form.Group>
                            <Form.Label>Кто с вами будет</Form.Label>
                            <Form.Control 
                                placeholder="Введите имена" 
                                onChange={e => setName(e.target.value)}
                            />            
                        </Form.Group>
                    )
                    : null
                }       
                <Form.Group>
                    <Form.Label>На чем приедем</Form.Label>
                    {TRANSPORT.map(name => 
                        <Form.Check 
                            key={name}
                            type="radio" 
                            label={name}
                            name="transportRadio"       
                            id={name}                 
                            onChange={e => setTransport(e.target.id)}
                        />
                    )}                    
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Комментарии</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows="3" 
                        placeholder="Напишите, есть ли у вас аллергия на продукты питания или другие особенности, необходимые учесть"
                    />
                </Form.Group>                        
                </Form>
            </div>
            <Button 
                title="Отправить" 
                size="m"                 
                onClick={() => console.log(transport)}
            />
        </div>
    );
}

export default Participants;