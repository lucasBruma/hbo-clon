
type MovieType = {
    title: string,
    id: string,
}

export type CarouselHero = {
    movies: Array<MovieType>;
    moviesBackdrop: Array<string>;
};

export type CarouselGallery = {
    movies: Array<MovieType>;
    moviesPoster: Array<string>;
    title: string;
};