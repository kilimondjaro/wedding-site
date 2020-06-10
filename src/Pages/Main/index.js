import React from 'react';
import classnames from 'classnames';

import Header from '../../Components/Header';
import Button from '../../Components/Button';
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
        <div id="story" className={classnames(styles.block, styles.story)} />
        <div id="where" className={classnames(styles.block, styles.where)} />
        <div id="wishlist" className={classnames(styles.block, styles.wishlist)} />
        <div id="contacts" className={classnames(styles.block, styles.contacts)} />
    </div>
);

export default Main;