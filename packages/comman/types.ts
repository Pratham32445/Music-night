export interface Song {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    duration: number;
    views: number;
    upvotes: Set<string>;
    upvotesLength: number;
}

export interface CurrentPlayingSong extends Song {
    currentSeek: number;
}