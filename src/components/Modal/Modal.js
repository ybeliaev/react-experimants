import React from 'react'
import styles from './modal.module.css'
import PropTypes from 'prop-types'

function Modal(props) {
    return (
        <div>
            <h2>Modal Example</h2>

            <button className="btn">Open Modal</button>

            <div className={styles.modal}>
                <div className={styles.modal_content}>
                    <span className={styles.close}>&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
            </div>
        </div>
    )
}

export default Modal
