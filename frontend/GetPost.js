// const url = 'https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=42.15%2C%2082%2C1&timesteps=1h&units=metric';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '440b6424e4mshea224b4e46b4d0ep149e81jsn29729eede8d7',
// 		'X-RapidAPI-Host': 'tomorrow-io1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

import React, { useEffect, useState } from "react";

const Answers = () => {
	const [loading, setLoading] = useState(true);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getPostsfromFirebase = [];
		const subscriber = db.collection("posts").onSnapshot((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				getPostsfromFirebase.push({...doc.data(), key: doc.id,
				});
			});
			setPosts(getPostsfromFirebase);
			setLoading(false);
		});


		return () => subscriber();
	}, []);

	if(loading) {
		return <h1>Loading Firebase Data...</h1>
	}

	return (
		<div className = "container">
			<h1>Answers:</h1>
			{posts.length > 0 ? (
				posts.map((post) => <div key={post.key}>{post.answer}</div>)
			) : <h1>no posts</h1>}
		</div>
	);
};

export default Answers;