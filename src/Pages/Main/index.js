import React from 'react';
import classnames from 'classnames';

import Header from '../../Components/Header';
import Button from '../../Components/Button';
import Wishlist from './Wishlist';

import mainImage from '../../assets/mainImage.JPG';

import styles from './index.module.css';

const Main = () => (
    <div className={styles.container}>
        <Header />        

        <div id="main" className={classnames(styles.block, styles.main)} >
            <img className={styles.image} src={mainImage} alt="" />
            <div className={styles.title}>Свадьба Полины и Кирилла</div>
            <div className={styles.date}>
                <div>24 Июля, 17:00</div>
                <div>Москва, Россия</div>
            </div>
            <div className={styles.iwillgo}>
                <Button size="m" title="Я пойду" link="/iwillgo" />
            </div>
        </div>        
        <div id="where" className={classnames(styles.block, styles.where)}>
            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8249063a7ebb7ef8d8f2d862ddceb7590d190cd34fa41366664c1a23258a2827&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>
        </div>
        <div id="wishlist" className={styles.wishlist}>
            <Wishlist />
        </div>
        <div id="contacts" className={classnames(styles.block, styles.contacts)} />
    </div>
);

export default Main;