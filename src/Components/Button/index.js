import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.module.css';

import { HashLink as Link } from 'react-router-hash-link';

const Button = ({title, size, link, onClick}) => {
    const sizeMap = {
        s: styles['size-s'],
        m: styles['size-m'],
    }

    if (link) {
        return (
            <div>
                <Link className={classnames(styles.link, sizeMap[size])} smooth to={link}>
                    {title}
                </Link>    
            </div>
        )
    }

    return (
        <button 
            className={classnames(styles.button, sizeMap[size])}
            onClick={onClick}
        >
            {title}
        </button>
    );
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['s', 'm']).isRequired,
    link: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;