import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

import { deleteGift, getWishlist, addGift } from '../../Helpers/Requests';
import Button from '../../Components/Button';

import styles from './index.module.css';

const WishlistPage = () => {
    const [wishlist, setWishlist] = useState([]);

    const [title, setTitle] = useState(null);
    const [url, setUrl] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {        
        getWishlist().then(setWishlist);
    }, []);

    const deleteItem = id => {
        deleteGift({id}).then(() => {
            getWishlist().then(setWishlist);
        })
    }

    const addGift = () => {

    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>Упраление Вишлистом</div>
            <div className={styles.wishlist}>            
                <ol>
                    {wishlist.map(item => (
                        <li>
                            <span>{item.title}</span>
                            <span 
                                className={styles.delete}
                                onClick={() => deleteItem(item.id)}
                            >
                                Удалить
                            </span>
                        </li>
                    ))}
                </ol>
            </div>
            <div className={styles.newItem}>
                <Form 
                    // ref={formRef}                     
                    // noValidate 
                    // validated={validated}
                >
                    <Form.Group>
                        <Form.Label>Название</Form.Label>
                        <Form.Control                         
                            required
                            placeholder="Введите имя" 
                            onChange={e => setTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>URL</Form.Label>
                        <Form.Control                         
                            required
                            placeholder="Введите URL" 
                            onChange={e => setUrl(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control                         
                            required
                            placeholder="Введите URL картинки" 
                            onChange={e => setImageUrl(e.target.value)}
                        />
                    </Form.Group>
                </Form>
                <Button size="m" title="Сохранить" onClick={() => null} />
            </div>
        </div>
    );
}

export default WishlistPage;