import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/common/Loading";
import { getGameById } from "../../services/api/AllServices";
import { IGame } from "../../types/IGame";
import { getRandomNumber } from "../../utils/random";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const RandomGame = () => {
    const navigate = useNavigate();
    const [hasFetched, setHasFetched] = useState(false);

    const fetchData = async (): Promise<IGame> => {
        return await getGameById(getRandomNumber());
    };

    const { data, isSuccess, isError, isLoading } = useQuery<IGame | Error>({
        queryKey: ["random Game"],
        queryFn: fetchData,
        refetchOnWindowFocus: true,
        enabled: !hasFetched, // Only run the query once until data is successfully fetched
    });

    useEffect(() => {
        // Once data is successfully fetched, navigate to the game page
        if (isSuccess && data && !(data instanceof Error)) {
            setHasFetched(true); // Mark as fetched
            navigate(`/game/${data.id}`); // Navigate to the game page with the ID
        }
    }, [data, isSuccess, navigate]);

    useEffect(() => {
        // Refetch on error only if it's not already being refetched
        if (isError && !hasFetched) {
            setHasFetched(false); // Reset fetching status
        }
    }, [isError, hasFetched]);

    if (isLoading || !data) return <Loading customClass="absolute h-screen" />; // Show loading until data is ready

    // If there is an error, show loading and let it retry
    return isError && !data ? (
        <Loading customClass="absolute h-screen" />
    ) : (
        <></>
    );
};

export default RandomGame;
