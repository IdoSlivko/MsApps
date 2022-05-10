import React from 'react';
import './Navbar.css';

function Navbar({ pics, onSubmit, startPoint, endPoint, handleShownImages }) {

	let keyDirection = 0;
	const [ searchWord, setSearchWord ] = React.useState('');

	function handleChange(e) {
    const sanitizedWord = e.target.value.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();
    setSearchWord(sanitizedWord);
  }

	function handleSubmit(e) {
		e.preventDefault();
		onSubmit(searchWord);
	}

	function goBack() {
		keyDirection = -1;
		if (startPoint > 0) {
			startPoint -= 9;
			handleShownImages(keyDirection, startPoint);
		}
	}
	
	function goForward() {
		keyDirection = 0;
		if (endPoint < pics.length) {
			startPoint += 9;
			handleShownImages(keyDirection, startPoint);
		}
	}

	return (
		<section className="navbar">
			<form className="navbar__form" onSubmit={handleSubmit}>

				<button
					className="navbar__button"
					type="button"
					disabled={ startPoint === 0 ? "disabled" : "" }
					onClick={goBack}
				>&#60;&#60; prev</button>

				<input
					className="navbar__input"
					type="text"
					name="search word"
					placeholder="Enter search word"
					maxLength={100}
					onChange={handleChange}
					required
				></input>

				<button
					className="navbar__form_search-button"
					type="submit"
				>Search</button>

				<button
					className="navbar__button"
					type="button"
					disabled={ endPoint >= pics.length ? "disabled" : "" }
					onClick={goForward}
					>next &#62;&#62;</button>

			</form>
		</section>
	);
}

export default Navbar;
