import React from 'react';

import HeaderLink from '../HeaderLink';
import styles from './index.module.css';

const Header = () => (
    <div className={styles.header}>
        <div className={styles.title}>Свадьба Полины и Кирилла</div>
        <div className={styles.navigation}>
            <div className={styles.link}><HeaderLink to="main" title="Главная" /></div>
            <div className={styles.link}><HeaderLink to="story" title="Наша история" /></div>
            <div className={styles.link}><HeaderLink to="where" title="Где" /></div>
            <div className={styles.link}><HeaderLink to="wishlist" title="Вишлист" /></div>
            <div className={styles.link}><HeaderLink to="contacts" title="Контакты" /></div>
        </div>
    </div>
);

export default Header;