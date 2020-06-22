import React from 'react';
import classnames from 'classnames';

import Header from '../../Components/Header';
import Button from '../../Components/Button';
import Wishlist from './Wishlist';
import Where from './Where';
import Contacts from './Contacts';

import mainImage from '../../assets/mainImage.jpeg';
import submarine from '../../assets/lightYellowSubmarine.png';
import car from '../../assets/yellowCar.png';

import styles from './index.module.css';

const SUBMARIN_START_Y = -200
const CAR_START_X = -700

class MainPage extends React.PureComponent {

    constructor(props) {
        super(props);

        this.whereRef = React.createRef();

        this.state = {
            submarineBottom: SUBMARIN_START_Y,
            carLeft: 0
        };
    }

    componentDidMount() {
        window.onscroll = e => {                  
            
            let whereContainer = this.whereRef.current;

            if (!whereContainer) {
                return
            } 

            var whereY = window.innerHeight - whereContainer.getBoundingClientRect().top;            

            this.setState({ 
                submarineBottom: window.scrollY + SUBMARIN_START_Y,
                carLeft: (Math.max(0, whereY) + CAR_START_X) * (window.innerWidth / whereContainer.getBoundingClientRect().height)
            })
        };
    }

    render() {
        const { submarineBottom, carLeft } = this.state;
        
        return (
            <div className={styles.container}>        
                <div id="main" className={classnames(styles.main)} >
                    <div className={styles.header}>
                        <Header />
                    </div>
                    <img className={styles.image} src={mainImage} alt="" />
                    <div style={{bottom: submarineBottom}} className={styles.submarineContainer}>
                        <img className={styles.submarine} src={submarine} alt="" />
                        <div className={styles.controls}>
                            <div className={styles.title}>Свадьба Полины и Кирилла</div>
                            <div className={styles.date}>
                                <div>24 Июля, 17:00, Rock Veranda, Москва</div>                
                            </div>
                            <div className={styles.iwillgo}>
                                <Button 
                                    submarine 
                                    size="s" 
                                    title="Пойду" 
                                    link="/iwillgo"
                                    propStyles={styles.submarineButton}
                                />
                            </div>
                        </div>
                    </div>            
                </div>        
                <div ref={this.whereRef} id="where" className={classnames(styles.where)}>
                    <Where />
                    <div style={{left: carLeft}} className={styles.carContainer}>                        
                        <img className={styles.car} src={car} />
                        <div className={styles.text}>Baby, you can drive my car</div>
                    </div>                      
                </div>
                <div id="wishlist" className={styles.wishlist}>
                    <Wishlist />
                </div>
                <div id="contacts" className={classnames(styles.contacts)}>
                    <Contacts />
                </div>                
            </div>
        );
    }
} 

export default MainPage;