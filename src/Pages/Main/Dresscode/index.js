import React from 'react';
import styles from './index.module.css';
import classnames from 'classnames';

import dresscode from '../../../assets/dresscode.png';

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
                            советуем приходить в удобной обуви
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
            <div className={styles.header}>
                <div className={styles.title}>Let it be</div>
                <div className={styles.subtitle}>Наши пожелания</div>
            </div>
            <ul className={styles.recommendations}>
                <li className={styles.recommendation}>
                    Будем благодарны, если вы воздержитесь от криков «Горько!» на празднике,
                    чтобы сохранить атмосферу уютного семейного торжества.
                </li>
                <li className={styles.recommendation}>
                    Пожалуйста, не дарите нам цветы, так как мы уезжаем в путешествие и не успеем насладиться их красотой. 
                    Вместо этого мы будем рады любому подарку из нашего вишлиста или вкладу в бюджет нашей молодой семьи.
                </li>
            </ul>
        </div>
    );
}

export default DressCode;