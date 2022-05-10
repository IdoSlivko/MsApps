import React from 'react';
import './Main.css';
import Photo from '../Photo/Photo';

function Main({ pics, keyWord, startPoint, endPoint, openInfoPopup }) {

	return (
		<section className="main">
			<h2 className="main__header">
				{pics.length > 0
				? `Search Results for Keyword: "${keyWord}"`
				: keyWord === ''
				? ''
				: `Sorry, there are no pictures to display with the given search keyword: "${keyWord}"`}
			</h2>
			<ul className="main__container">
			{pics.slice(startPoint, endPoint).map((pic, index) => {
				return (
					<Photo
						pic={pic}
						key={index}
						openInfoPopup={openInfoPopup}
					/>
				);
			})}
			</ul>
		</section>
	);
}

export default Main;
