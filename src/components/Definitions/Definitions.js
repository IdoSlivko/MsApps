import React from 'react';
import './Definitions.css'

function Definitions({ definitions }) {

	// 	const [ verbTitle, setVerbTitle ] = React.useState(false);
	// 	const adjTitle = '';
	// 	const nounTitle = '';
	// 	const someTitle = '';

	// 	const verbArray =[];
	// 	const nounArray =[];
	// 	const adjArray =[];
	// 	const adverbArray = [];
	const someArray = [];

	// 	const array = [ 1, 2, 3, 4, 5 ];
	// 	const array1 = [ 7, 1, 6, 3, 2 ];
	// 	const array2 = [];

	// 	const minNum = 1;

	// console.log('definitions: ', definitions);

	// React.useEffect(() => {
	// 	definitions.forEach((item) => {
	// 		if (item.partOfSpeech === 'verb') {
	// 			setVerbTitle('verb');
	// 			verbArray.push(item.definition);
	// 			console.log('verbArray: ', verbArray);
	// 		}
	// 		else if (item.partOfSpeech === 'noun') {
	// 			adjArray.push(item.definition);
	// 		}
	// 		else if (item.partOfSpeech === 'null') {
	// 			nullArray.push(item.definition);
	// 		}
	// 		else {
	// 			someArray.push(item.definition);
	// 		}
	// 	});
	// }, [definitions]);

	// let stringList = " 0ver danny A t23ker h1 hel!o duck";
	
	// function filter(string) {
	// 	const newArray = string.split(" ");
	// 	newArray.forEach((word) => {
	// 		for (let i = 0; i < word.length; i++) {
	// 			if (isNaN(word.charAt(i))) {
	// 				let word = word.charAt(i);
	// 			}
	// 		}

	// 	});
	// }
	// console.log(filter(stringList));

	return (
		<section className="definitions">
			<ul className="definitions__container">

				{/* {definitions.map((definition, index) => {
				return <li className="definition__list" key={index}>{definition.definition}</li>;
			})} */}

				{function () {
					definitions.forEach((definition, index) => {
						let item = definition.definition;
						someArray.push(<li className="definition__list" key={index}>{item}</li>)
					})
				}()
				}
				{someArray}

			</ul>
		</section>
	);
}


{/* {for (let i = 0; i < someArray.length; i++) {
				<li className="definition__list" key={i}>{someArray[i]}</li>
		}} */}






// {
// 	{definitions.forEach((definition) => {
// 		let item = definition.definition;
// 		someArray.push(item);
// 	})}
// 	{console.log('someArray: ', someArray)}
// 	{someArray.forEach((item, index) => {
// 		let info = item;
// 		console.log('info:', info);
// 		return <li className="definition__list" key={index}>{info}</li>;
// 		})}
// 	}







{/* {definitions.forEach((definition) => {

					if (definition.partOfSpeech === 'verb') {
						verbArray.push(definition.definition);
					}
					else if (definition.partOfSpeech === 'noun') {
						nounArray.push(definition.definition);
					}
					else if (definition.partOfSpeech === 'adjective') {
						adjArray.push(definition.definition);
					}
					else if (definition.partOfSpeech === 'adverb') {
						adverbArray.push(definition.definition);
					}
					else {
						someArray.push(definition.definition);
					}

				})} */}

{/* <h3>forEach</h3>
				<ul>
					{array.forEach((item, index) => {
						let info = item;
						return <li key={index}>{info}</li>;
					})}
				</ul> */}

{/* <h3>map</h3>
				<ul>
					{array.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}

				</ul> */}




{/* {verbArray.length !== 0 && <h3>verb</h3>}
				{verbArray.map((item, index) => {
					return <li className="definition__list" key={index}><i>{item}</i></li>;
				})}

				{nounArray.length !== 0 && <h3>noun</h3>}
				{nounArray.map((item, index) => {
					return <li className="definition__list" key={index}><i>{item}</i></li>;
				})}

				{adjArray.length !== 0 && <h3>adjective</h3>}
				{adjArray.map((item, index) => {
					return <li className="definition__list" key={index}><i>{item}</i></li>;
				})}

				{adverbArray.length !== 0 && <h3>adverb</h3>}
				{adverbArray.map((item, index) => {
					return <li className="definition__list" key={index}><i>{item}</i></li>;
				})}

				{someArray.length !== 0 && <h3>description</h3>}
				{someArray.map((item, index) => {
					return <li className="definition__list" key={index}><i>{item}</i></li>;
				})} */}

// 			</ul>
// 		</section>
// 	);
// }

export default Definitions;

// const firstLetter = definition.definition.charAt(0).toUpperCase();

{/* <li className="definition__list" key={index}>
							<h3>{verbTitle}</h3>
							<i>{firstLetter + definition.definition.slice(1) + ' (' + definition.partOfSpeech + ')'}</i>
						</li> */}

{/* {definitions.map((definition, index) => {
					{ if (definition.partOfSpeech === 'verb') {
							verbArray.push(definition.definition);
							<li className="definition__list" key={index}><i>{definition.definition}</i></li>
						}
						else if (definition.partOfSpeech === 'adjective') {
							<li className="definition__list" key={index}><i>{definition.definition}</i></li>
						}
						else if (definition.partOfSpeech === 'noun') {
							<li className="definition__list" key={index}><i>{definition.definition}</i></li>
						}
						else {
							<li className="definition__list" key={index}><i>{definition.definition}</i></li>
						}
					}
				})} */}
