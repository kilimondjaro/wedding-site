import React from 'react';
import classnames from 'classnames';

import Header from '../../Components/Header';
import Button from '../../Components/Button';
import Wishlist from './Wishlist';
import Where from './Where';

import mainImage from '../../assets/mainImage.jpeg';
import submarine from '../../assets/mainSubmarine.png';

import styles from './index.module.css';

const SUBMARIN_START_Y = -200

class MainPage extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            submarineBottom: SUBMARIN_START_Y
        };
    }

    componentDidMount() {
        window.onscroll = e => {
            this.setState({ submarineBottom: window.scrollY + SUBMARIN_START_Y })
        };
    }

    render() {
        const { submarineBottom } = this.state;

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
                <div id="where" className={classnames(styles.where)}>
                    <Where />
                </div>
                <div id="wishlist" className={styles.wishlist}>
                    <Wishlist />
                </div>
                <div id="contacts" className={classnames(styles.block, styles.contacts)} />
            </div>
        );
    }
} 

export default MainPage;