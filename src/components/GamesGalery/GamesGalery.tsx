interface GamesGaleryProps {
    filters?: string;
}

const GamesGalery = ({ filters }: GamesGaleryProps) => {
    return <>{filters}</>;
};

export default GamesGalery;
