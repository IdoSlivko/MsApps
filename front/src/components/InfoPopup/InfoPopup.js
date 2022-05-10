import './InfoPopup.css';

function InfoPopup({ isOpen, onClose, info }) {

  return (
    <section className={`popup ${isOpen ? "popup_opened" : undefined}`}>
      <div className="popup__container">
				<button className="popup__close-button" type="button" onClick={onClose}>X</button>
				<h3 className="popup__title">Image info</h3>
				<p className="popup__info">Id : {info.id}</p>
				<p className="popup__info">Views : {info.views}</p>
				<p className="popup__info">Downloads : {info.downloads}</p>
				<p className="popup__info">Collections : {info.collections}</p>
      </div>
    </section>
  );
}

export default InfoPopup;
