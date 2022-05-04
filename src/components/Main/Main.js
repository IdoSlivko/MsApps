import React from 'react';
import './Main.css';

function Main({ onSubmit }) {

	const [ word, setWord ] = React.useState('');

	function handleChange(e) {
		// eslint-disable-next-line
    const sanitizedWord = e.target.value.replace( /[*|\"<>[\]{}`;&$]+/, ' ' );
    setWord(sanitizedWord);
  }

	function handleSubmit(e) {
		e.preventDefault();
		onSubmit(word);
	}

	return (
		<section className="main">
			<form className="main__form" onSubmit={handleSubmit}>
				<input
					className="main__input"
					type="text"
					name="word"
					placeholder="Search word"
					maxLength={500}
					onChange={handleChange}
					// value={keyword || ''}
					required
				></input>
				<button className="main__search-button" type="submit">Search</button>
			</form>
		</section>
	);
}

export default Main;
