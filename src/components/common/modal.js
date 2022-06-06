// @flow
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import * as modalStyles from './modal.module.scss'

type Props = {
  title: string,
  children: any,
}

function ModalComponent({ title, children }: Props) {
  const [modal, setModal] = useState(false)

  const toggleModal = () => setModal(!modal)

  return (
    <>
      <Button className={`${modalStyles.btn} ${modalStyles.btn__mainColor}`} onClick={toggleModal}>
        More
      </Button>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader className={modalStyles.modal__header} toggle={toggleModal}>
          {title}
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button className={`${modalStyles.btn} ${modalStyles.btn__mainColor}`} onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default ModalComponent
