export type SongDto = {
    band: string;
    album: string;
    song: string;
};

export type Album = {
    id: number;
    band: string;
    name: string;
    songs: string[];
};

export type Collapsable<T> = {
    isOpen: boolean;
} & T;

export type AlbumsState = {
    albums: Collapsable<Album>[];
};