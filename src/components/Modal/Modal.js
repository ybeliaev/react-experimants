import React, { useRef, useState } from 'react'
import styles from './modal.module.css'

import { useOnClickOutside } from '../../hooks/useOnClickOutside'

function Modal(props) {
    const ref = useRef()
    const [isModalOpen, setModalOpen] = useState(false)

    useOnClickOutside(ref, () => setModalOpen(false))

    return (
        <>
            {isModalOpen ? (
                <div>
                    <h2>Modal Example</h2>

                    <div className={styles.modal}>
                        <div className={styles.modal_content} ref={ref}>
                            <span
                                className={styles.close}
                                onClick={() => setModalOpen(false)}
                            >
                                &times;
                            </span>
                            <p>Some text in the Modal..</p>
                        </div>
                    </div>
                </div>
            ) : (
                <button className={`btn`} onClick={() => setModalOpen(true)}>
                    Open Modal
                </button>
            )}
        </>
    )
}

export default Modal
