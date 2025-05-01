import React from "react";
import { ILikeContext, LikeContext } from "../contexts/LikeContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function LikePanel() {
	const { likes, setLikes, incrementLike, clearLikes } = React.useContext(LikeContext) as ILikeContext;
	const [storedLikes, setStoredLikes] = useLocalStorage('likes', 0);

	// Sync likes with local storage
	React.useEffect(() => {
		if (storedLikes !== likes) {
			setLikes(storedLikes);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Update local storage when likes change
	React.useEffect(() => {
		setStoredLikes(likes);
	}, [likes, setStoredLikes]);

	return (
		<div className="likePanel">
			<h2>Like My Library</h2>
			<span>Likes: <b>{likes}</b></span>
			&nbsp;
			<button onClick={incrementLike}>Like</button>
			<button onClick={clearLikes}>Reset like count</button>
		</div>
	);
}
