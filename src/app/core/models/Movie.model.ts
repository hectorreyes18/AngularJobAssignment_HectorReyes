export interface Movie {
    id: number,
    title: string,
    description: string,
    rating: number,
    duration: string,
    genre: string[],
    released_date: Date
    trailer: string
}