import React from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';

import styles from './index.module.css';

const HeaderLink = ({to, title}) => (
    <div className={styles.container}>
        <div className={styles.image}/>
        <Link smooth to={`/#${to}`}>
            {title}
        </Link>
    </div>
)

HeaderLink.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default HeaderLink;