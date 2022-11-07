import React, { useState } from "react"
import Modal from "react-modal"
import { Container } from "./Styled"

const DetailsModal = () => {
    const [modalsOpen, setIsOpen ] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    return(
        <Container>
            <button onClick={openModal}>Mais detalhes</button>
            <Modal
            isOpen={modalsOpen}
            onRequestClose={closeModal}
            contentLabel="Exemplo Modal"
            overlayClassName={"modal-overlay"}
            className="container-modal"
            ariaHideApp={false}
            >
                <p>Olá mundo</p>
            <button onClick={closeModal}>Close</button>
            </Modal>
        </Container>
    )
}
export default DetailsModal