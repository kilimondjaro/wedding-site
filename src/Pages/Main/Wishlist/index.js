import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { Spinner } from 'react-bootstrap';

import { getWishlist, reserverGift } from '../../../Helpers/Requests';
import Button from '../../../Components/Button';
import styles from './index.module.css';

const WishlistItem = ({
    image, 
    title, 
    description, 
    url, 
    reserved, 
    onReserve    
}) => {
    const [isConfirming, setIsConfirming] = useState(false);

    return (
        <React.Fragment>
            <div className={classnames(styles.item, {[styles.reserved]: reserved})}>
                <a href={url}>
                    <img className={styles.image} src={image} alt="" />
                </a>
                <div className={styles.itemTitle}>{title}</div>
                <a href={url} className={styles.details}>Подробнее</a>
                <Button 
                    title="Я подарю"  
                    size="m"
                    onClick={() => setIsConfirming(true)}
                    propStyles={styles.reserveButton}
                />
                {reserved 
                    ? (
                        <div className={styles.reservedText}>Меня уже дарят</div>
                    )
                    : null
                }
            </div>
            {isConfirming
                ? (
                    <div className={styles.popup}>
                        <div className={styles.confirmContainer}>
                            <div className={styles.title}>Я подарю этот подарок</div>
                            <div className={styles.buttons}>
                                <Button 
                                    title="Я подарю"  
                                    size="m"
                                    onClick={() => {
                                        setIsConfirming(false)
                                        onReserve()
                                    }}                                    
                                />
                                <Button 
                                    title="Отмена"  
                                    size="m"
                                    onClick={() => setIsConfirming(false)}
                                    propStyles={styles.cancelButton}
                                />
                            </div>
                        </div>
                    </div>
                )
                : null
            }
        </React.Fragment>
    );
}

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {        
        getWishlist().then(wishlist => setWishlist(wishlist.sort(item => item.reserved ? 1 : -1)));
    }, []);

    const onReserve = id => {
        reserverGift({id});
        let newWishlist = wishlist.map(item => {
            if (item.id === id) {
                item.reserved = true;
            }

            return item;
        });

        setWishlist(newWishlist.sort(item => item.reserved ? 1 : -1));
    }

    return (
        <div className={styles.container}>            
            <div className={styles.header}>
                <div className={styles.title}>Can't buy me love</div>
                <div className={styles.subtitle}>Наш вишлист</div>
            </div>            
            <div className={styles.grid}>
                {(wishlist && wishlist.length > 0)
                    ? (wishlist || []).map((wishlist, key) => (
                        <WishlistItem 
                            key={wishlist.id} 
                            image={wishlist.imageUrl}
                            title={wishlist.title}
                            description={wishlist.description}
                            url={wishlist.url}
                            onReserve={() => onReserve(wishlist.id)}                            
                            reserved={wishlist.reserved}
                        />
                    ))
                    : (
                        <div className={styles.wishlistLoading}>
                            Вишлист загружается
                            <div className={styles.spinner}><Spinner animation="border" /></div>
                        </div>
                    )
                }
            </div>            
        </div>
    );
}

export default Wishlist;
