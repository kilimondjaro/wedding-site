import React from 'react';
import classnames from 'classnames';

import Header from '../../Components/Header';
import Button from '../../Components/Button';
import Wishlist from './Wishlist';
import Where from './Where';

import mainImage from '../../assets/mainImage.jpeg';

import styles from './index.module.css';

const MainPage = () => (
    <div className={styles.container}>
        <Header />        

        <div id="main" className={classnames(styles.block, styles.main)} >
            <img className={styles.image} src={mainImage} alt="" />
            <div className={styles.title}>Свадьба Полины и Кирилла</div>
            <div className={styles.date}>
                <div>24 Июля, 17:00, Rock Veranda, Москва</div>                
            </div>
            <div className={styles.iwillgo}>
                <Button size="m" title="Я пойду" link="/iwillgo" />
            </div>
        </div>        
        <div id="where" className={classnames(styles.block, styles.where)}>
            <Where />
        </div>
        <div id="wishlist" className={styles.wishlist}>
            <Wishlist />
        </div>
        <div id="contacts" className={classnames(styles.block, styles.contacts)} />
    </div>
);

export default MainPage;