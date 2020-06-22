import React from 'react';

import HeaderLink from '../HeaderLink';
import styles from './index.module.css';

import yellowSubmarine from '../../assets/yellowSubmarine.png'

const Header = ({ hasImage }) => (
    <div className={styles.header}>
        <div className={styles.title}>
            <div>Свадьба Полины и Кирилла</div>
            <div className={styles.hashtag}>#weddingsubmarine</div>
        </div>
        { hasImage ? (<img src={yellowSubmarine} className={styles.submarine} />) : null }
        <div className={styles.navigation}>
            <div className={styles.link}><HeaderLink to="main" title="Главная" /></div>            
            <div className={styles.link}><HeaderLink to="where" title="Где" /></div>
            <div className={styles.link}><HeaderLink to="wishlist" title="Вишлист" /></div>
            <div className={styles.link}><HeaderLink to="contacts" title="Контакты" /></div>
        </div>
    </div>
);

export default Header;