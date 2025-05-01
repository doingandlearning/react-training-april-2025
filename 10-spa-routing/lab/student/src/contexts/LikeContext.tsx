import React from "react"

// create context

export interface ILikeContext {
	likes: number;
	incrementLike: () => void;
	clearLikes: () => void;
	setLikes: (num: number) => void;
}

export const LikeContext = React.createContext<ILikeContext | null>(null)

// create provider
export function LikeProvider({ children }: { children: React.ReactNode }) {
	const [likes, setLikes] = React.useState(0);

	const incrementLike = () => setLikes(likes + 1)
	const clearLikes = () => setLikes(0)

	return <LikeContext.Provider value={{ likes, incrementLike, clearLikes, setLikes }}>
		{children}
	</LikeContext.Provider>
}
