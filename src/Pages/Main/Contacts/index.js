import React from 'react';

import styles from './index.module.css';

const Contacts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoBlock}>
                <div className={styles.address}>
                    Rock Veranda<br/>
                    ул. Рябиновая 9, д. Десна
                </div>
                <div className={styles.separator} />
                <div className={styles.phones}>
                    <div>Полина +7 (909) 917-87-55‬</div>
                    <div>Кирилл +7 (969) 089-03-94</div>                    
                    Организатор Ирина ***<br/>                    
                </div>
                <div className={styles.separator} />
                <div className={styles.copyright}>
                    © 2020 Wedding Submarine<br/>
                    #weddingsubmarine
                </div>
            </div>
            <div className={styles.love}>
                All You Need Is Love
            </div>
        </div>
    );
};

export default Contacts;