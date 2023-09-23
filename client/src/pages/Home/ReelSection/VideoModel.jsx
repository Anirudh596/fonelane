import Modal from "react-modal";

// eslint-disable-next-line react/prop-types
const VideoModal = ({ isOpen, closeModal, videoUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Video Modal"
      className="video-modal"
      overlayClassName="video-modal-overlay"
    >
      <button onClick={closeModal} className="close-button">
        Close
      </button>
      <div className="video-container">
        <video controls autoPlay>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </Modal>
  );
};

export default VideoModal;
