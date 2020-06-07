import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Spinner } from 'react-bootstrap';
import styles from './index.module.css';

import { HashLink as Link } from 'react-router-hash-link';

const Button = ({
    title, 
    size, 
    link, 
    onClick, 
    submit,
    loading
}) => {
    const sizeMap = {
        s: styles['size-s'],
        m: styles['size-m'],
    }

    if (link) {
        return (
            <div className={styles.link}>
                <Link className={classnames(sizeMap[size])} smooth to={link}>
                    {title}
                </Link>    
                {loading ? <div className={styles.spinner}><Spinner animation="border" /></div> : null}
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
            {loading ? <div className={styles.spinner}><Spinner animation="border" /></div> : null}
        </div>
    );
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['s', 'm']).isRequired,
    link: PropTypes.string,
    submit: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Button;