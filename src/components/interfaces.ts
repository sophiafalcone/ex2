export interface GenreResponse {
	id: number;
	name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
	title: string;
}

export interface Movie {
	imdbID: string;
	Title: string;
	Poster: string;
	Ratings: Array<{
	  Source: string;
	  Value: string;
	}>;
	Runtime: string;
}
