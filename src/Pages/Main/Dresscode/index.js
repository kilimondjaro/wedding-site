import React from 'react';
import styles from './index.module.css';
import classnames from 'classnames';

import dresscode from '../../../assets/dresscode.jpg';

const DressCode = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>Twist and Shout</div>
                <div className={styles.subtitle}>Dress Code: Smart Casual</div>
            </div>
            <div className={styles.body}>
                <img src={dresscode} className={styles.image} />
                <div className={styles.row}>
                    <div className={styles.item}>
                        <div className={styles.blockTitle}>
                            Девушки
                        </div>
                        <div className={styles.description}>
                            Летние платья, сарафаны, легкие брючные костюмы
                        </div>                    
                    </div>
                    <div className={styles.item}>                    
                        <div className={styles.blockTitle}>
                            Парни
                        </div>
                        <div className={styles.description}>
                            Расслабленные костюмы
                        </div>                   
                    </div>                    
                </div>
                <div className={styles.row}>
                    <div className={styles.item}>
                        <div className={styles.blockTitle}>
                            Обувь
                        </div>
                        <div className={styles.description}>
                            Танцы будут проходить на асфальте или газоне, 
                            просьба приходить в удобной обуви
                        </div>           
                    </div>
                    <div className={styles.item}>
                        <div className={styles.blockTitle}>
                            Цветовая гамма
                        </div> 
                        <div className={styles.colors}>                        
                            <div className={classnames(styles.color, styles.yellow)} />
                            <div className={classnames(styles.color, styles.green)} />
                            <div className={classnames(styles.color, styles.blue)} />
                            <div className={classnames(styles.color, styles.pink)} />
                        </div>
                        <div>* По желанию</div>
                    </div>
                </div>                
            </div>
        </div>
    );
}

export default DressCode;