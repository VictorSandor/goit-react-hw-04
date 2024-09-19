import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ImageModal({ onSelectedImage, onCloseModal }) {
  return (
    <Modal
      isOpen={!!onSelectedImage}
      onRequestClose={onCloseModal}
      contentLabel="Selected Image"
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
    >
      <div>
        <img
          src={onSelectedImage.urls.regular}
          alt={onSelectedImage.alt_description}
        />
      </div>
    </Modal>
  );
}