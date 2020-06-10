import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import { Form } from 'react-bootstrap';

import Header from '../../Components/Header';
import Button from '../../Components/Button';

import styles from './index.module.css';

const TRANSPORT = [
    'Организованный шатл',    
    'Машина'
];

const Participants = () => {
    const [name, setName] = useState(null);
    const [count, setCount] = useState(1);
    const [transport, setTransport] = useState(TRANSPORT[0]);
    const [guests, setGuests] = useState(null);
    const [comments, setComments] = useState(null);
    const [validated, setValidated] = useState(false);
    const [saving, setSaving] = useState(false);
    const [success, setSuccess] = useState(false);

    const formRef = useRef(null);

    const onSubmit = () => {                        
        if (!formRef.current.checkValidity()) {
            setValidated(true);
            return
        }        
        setSaving(true);

        const data = {
            name,
            count,
            transport,
            guests,
            comments
        };
        
        const url = 'http://localhost:8080/api/addGuest'
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(() => {
            setSaving(false);
            setSuccess(true)            
        });        
    }

    const form = (
        <React.Fragment>
            <div className={styles.title}>Список гостей</div>        
            <div className={styles.form}>
                <Form 
                    ref={formRef}                     
                    noValidate 
                    validated={validated}
                >
                <Form.Group>
                    <Form.Label>Имя</Form.Label>
                    <Form.Control                         
                        required
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
                            checked={name == transport}                        
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
                        noValidate
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
                loading={saving}
                onClick={() => onSubmit()}
            />
        </React.Fragment>
    );

    const result = (
        <React.Fragment>
            <div className={styles.title}>Будем ждать вас!:)</div>
            <Button 
                link='/main'
                title="На главную" 
                size="m"         
                loading={saving}                
            />
        </React.Fragment>
    );

    return (
        <div>
            <Header />
            <div className={styles.formContainer}>                        
                { success ? result : form }       
            </div>
        </div>
    );
}

export default Participants;