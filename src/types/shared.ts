export interface IIdentifiableEntity {
    id: number;
    name: string;
    slug: string;
}

export type IPublisher = IIdentifiableEntity;
export type IGenres = IIdentifiableEntity;
export type IDevelopers = IIdentifiableEntity;
export type IPlatform = IIdentifiableEntity;
export type ITags = IIdentifiableEntity;
export type IContentRating = IIdentifiableEntity;
export interface IScreenshots {
    id: number;
    image: string;
    hidden: boolean;
    width: number;
    height: number;
}
