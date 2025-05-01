import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { incrementLike, clearLikes, setLikes } from "../likesSlice";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function LikePanel() {
	const dispatch = useDispatch();
	const likes = useSelector((state: RootState) => state.likes.count);
	const [storedLikes, setStoredLikes] = useLocalStorage('likes', 0);

	// Sync likes with local storage
	React.useEffect(() => {
		if (storedLikes !== likes) {
			dispatch(setLikes(storedLikes));
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
			<button onClick={() => dispatch(incrementLike())}>Like</button>
			<button onClick={() => dispatch(clearLikes())}>Reset like count</button>
		</div>
	);
}
