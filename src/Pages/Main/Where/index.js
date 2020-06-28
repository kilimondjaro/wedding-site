import React, { useState, useRef } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import Button from '../../../Components/Button';

import styles from './index.module.css'

const Where = () => {
    const [isMapLoading, setIsMapLoading] = useState(true);
    const mapRef = useRef(null); 

    return (
        <div className={styles.container}>
            <div className={styles.addresses}>
                <div className={styles.shuttle}>
                    <div className={styles.title}>Трансфер до площадки</div>
                    <div><b>Где:</b> метро Академическая, Москва </div>
                    <div><b>Когда:</b> 24 Июля, 15:00</div>
                </div>
                <div className={styles.middleTitle}>Ticket to ride</div>
                <div className={styles.party}>
                    <div className={styles.title}>Вечеринка</div>
                    <div><b>Где:</b> Rock Veranda, ул. Рябиновая 9, д. Десна</div>
                    <div><b>Когда:</b> 24 Июля, 16:00</div>
                </div>
            </div>
            <div className={styles.iWillGo}>
                <Button 
                    title="Я пойду"  
                    size="m"
                    link="/iwillgo"
                    propStyles={styles.goButton}
                />
            </div>
            {isMapLoading
                ? (
                    <div className={styles.mapPlaceholder}>
                        Карта уже грузится
                    </div>
                )
                : null
            }
            <YMaps>
                <Map
                    onLoad={() => {
                        mapRef.current.behaviors.disable('scrollZoom')
                        setIsMapLoading(false)
                    }} 
                    className={styles.map} 
                    defaultState={{ 
                        center: [55.66, 37.55], 
                        zoom: 10                        
                    }}
                    instanceRef={mapRef}                    
                >
                    <Placemark 
                        geometry={[55.522123, 37.381657]} 
                        options={{ preset: 'islands#blueBarIcon'}}
                        modules={['geoObject.addon.balloon']}
                        properties={{ 
                            balloonContent: 'Rock Veranda <br/>Рябиновая ул., 9, д. Десна, Россия',                            
                            iconCaption: 'Вечеринка (Rock Veranda)'
                        }} 
                    />
                    <Placemark 
                        geometry={[55.687769, 37.573440]} 
                        options={{ preset: 'islands#blueLeisureIcon'}}
                        modules={['geoObject.addon.balloon']}
                        properties={{ 
                            balloonContent: 'Трансфер до площадки<br/>м. Академическая',                            
                            iconCaption: 'Трансфер до площадки'
                        }} 
                    />
                </Map>
            </YMaps>                        
        </div>        
    );
}

export default Where;