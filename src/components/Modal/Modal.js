import React, { useRef, useState } from 'react'
import styles from './modal.module.css'

import { useOnClickOutside } from '../../hooks/useOnClickOutside'

function Modal() {
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
                            <label htmlFor="name">Name</label>
                            <input type="text" className={styles.modal_input} />
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className={styles.modal_input}
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className={styles.modal_input}
                            />
                            <button
                                type="button"
                                className={styles.modal_button}
                            >
                                Send
                            </button>
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
