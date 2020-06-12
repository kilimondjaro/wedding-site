import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import styles from './index.module.css'

const Where = () => {
    
    return (
        <div className={styles.container}>
            <div className={styles.addresses}>
                <div>
                    <div className={styles.title}>ЗАГС</div>
                    <div><b>Где:</b> ул. Малая Ордынка 14, Москва </div>
                    <div><b>Когда:</b> 24 Июля, 14:30</div>
                </div>
                <div>
                    <div className={styles.title}>Вечеринка</div>
                    <div><b>Где:</b> ул. Рябиновая 9, д. Десна</div>
                    <div><b>Когда:</b> 24 Июля, 17:30</div>
                </div>
            </div>
            <YMaps>
                <Map className={styles.map} defaultState={{ center: [55.66, 37.64], zoom: 10 }}>
                    <Placemark 
                        geometry={[55.522123, 37.381657]} 
                        options={{ preset: 'islands#blueBarIcon'}}
                        modules={['geoObject.addon.balloon']}
                        properties={{ 
                            balloonContent: 'Rock Veranda <br/>Рябиновая ул., 9, д. Десна, Россия',                            
                            iconCaption: 'Rock Veranda'
                        }} 
                    />
                    <Placemark 
                        geometry={[55.737324, 37.625202]} 
                        options={{ preset: 'islands#blueLeisureIcon'}}
                        modules={['geoObject.addon.balloon']}
                        properties={{ 
                            balloonContent: 'ЗАГС, Studio Royal <br/>ул. Малая Ордынка, 14',                            
                            iconCaption: 'ЗАГС'
                        }} 
                    />
                </Map>
            </YMaps>                        
        </div>        
    );
}

export default Where;