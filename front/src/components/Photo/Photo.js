import React from "react";
import "./Photo.css";

function Photo({ pic, openInfoPopup }) {

	// const [ isImageMarked, setIsImageMarked ] = React.useState(false);

	function openPopup() {
		openInfoPopup(pic);
		// setIsImageMarked(true);
	}

	return (
		<li className="photo__item">
			<div
				// className={ isImageMarked ? "photo photo_marked" : "photo" }
				className="photo"
				title="click for image info"
				style={{ backgroundImage: `url(${pic.largeImageURL})` }}
				onClick={openPopup}
			>
			</div>
		</li>
	);
}

export default Photo;
