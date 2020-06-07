import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.module.css';

import { HashLink as Link } from 'react-router-hash-link';

const Button = ({title, size, link, onClick, submit}) => {
    const sizeMap = {
        s: styles['size-s'],
        m: styles['size-m'],
    }

    if (link) {
        return (
            <div className={styles.link}>
                <Link className={classnames(styles.link, sizeMap[size])} smooth to={link}>
                    {title}
                </Link>    
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <button
                type={submit ? 'submit' : null}
                className={classnames(styles.button, sizeMap[size])}
                onClick={onClick}
            >
                {title}
            </button>
        </div>
    );
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['s', 'm']).isRequired,
    link: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;