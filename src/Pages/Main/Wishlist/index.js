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
            <div className={styles.details}>Подробнее</div>
            <div className={styles.reserveButton}>
                <Button 
                    title="Я подарю"  
                    size="m"
                    onClick={onReserve}
                />
            </div>
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
            <div className={styles.title}>Наш Вишлист</div>
            <div className={styles.grid}>
                {
                    (wishlist || []).map((wishlist, key) => (
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


// return Promise.resolve([
    //     {
    //         title: 'Соковыжималка для цитрусовых',
    //         url: 'https://www.ozon.ru/product/kenwood-sokovyzhimalka-dlya-tsitrusovyh-je280a-173674450/',
    //         imageUrl: 'https://cdn1.ozone.ru/s3/multimedia-x/wc1200/6015349461.jpg'
    //     }, {
    //         title: 'Беспроводной пылесос',
    //         url: 'https://www.ozon.ru/context/detail/id/151517600/',
    //         imageUrl: 'https://cdn1.ozone.ru/multimedia/1030882919.jpg'
    //     }, {
    //         title: 'Соковыжемалка',
    //         url: 'https://www.eldorado.ru/cat/detail/71230534/',
    //         imageUrl: 'https://images.philips.com/is/image/PhilipsConsumer/HR1919_70-IMS-ru_RU?$jpglarge$&wid=1250'
    //     }, {
    //         title: 'Увлажнитель воздуха',
    //         url: 'https://www.ozon.ru/context/detail/id/138841502/',
    //         imageUrl: 'https://cdn1.ozone.ru/multimedia/wc1200/1021372834.jpg'
    //     }
    // ]);