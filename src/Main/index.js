import React from 'react';
import classnames from 'classnames';
import HeaderLink from '../Components/HeaderLink';
import mainImage from '../assets/mainImage.JPG';

import styles from './index.module.css';

const Main = () => (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.title}>Свадьба Полины и Кирилла</div>
            <div className={styles.navigation}>
                <div className={styles.link}><HeaderLink to="main" title="Главная" /></div>
                <div className={styles.link}><HeaderLink to="story" title="Наша история" /></div>
                <div className={styles.link}><HeaderLink to="wishlist" title="Вишлист" /></div>
                <div className={styles.link}><HeaderLink to="contacts" title="Контакты" /></div>
            </div>
        </div>

        <div id="main" className={classnames(styles.block, styles.main)} >
            <img className={styles.image} src={mainImage} />
        </div>
        <div id="story" className={classnames(styles.block, styles.story)} />
        <div id="wishlist" className={classnames(styles.block, styles.wishlist)} />
        <div id="contacts" className={classnames(styles.block, styles.contacts)} />
    </div>
);

export default Main;