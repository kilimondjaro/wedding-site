import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import { getWishlist, reserverGift } from '../../../Helpers/Requests';
import Button from '../../../Components/Button';
import styles from './index.module.css';

const WishlistItem = ({image, title, description, url, reserved, onReserve}) => {
    return (
        <div className={classnames(styles.item, {[styles.reserved]: reserved})}>
            <a href={url}>
                <img className={styles.image} src={image} alt="" />
            </a>
            <div className={styles.itemTitle}>{title}</div>
            <a href={url} className={styles.details}>Подробнее</a>
            <Button 
                title="Я подарю"  
                size="m"
                onClick={onReserve}
                propStyles={styles.reserveButton}
            />
            {reserved 
                ? (
                    <div className={styles.reservedText}>Меня уже дарят</div>
                )
                : null
            }
        </div>
    );
}

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {        
        getWishlist().then(setWishlist);
    }, []);

    const onReserve = id => {
        reserverGift({id});
        let newWishlist = wishlist.map(item => {
            if (item.id === id) {
                item.reserved = true;
            }

            return item;
        });

        setWishlist(newWishlist);
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>Can't buy me love</div>
                <div className={styles.subtitle}>Наш вишлист</div>
            </div>
            <div className={styles.grid}>
                {
                    (wishlist || []).sort(item => item.reserved ? 1 : -1).map((wishlist, key) => (
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
                }
            </div>
        </div>
    );
}

export default Wishlist;
