export const formatDateToIsoString = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

export const formatStringToReadableDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
};

export const getCurrentDateIsoString = (): string => {
    return formatDateToIsoString(new Date());
};

export const getDate30daysAgoisoString = (): string => {
    const currentDate = new Date();
    const pastDate = new Date(currentDate);

    pastDate.setDate(currentDate.getDate() - 30);
    return formatDateToIsoString(pastDate);
};

export const getOneYearLaterDateIsoString = (): string => {
    const oneYearLater = new Date();
    oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
    return formatDateToIsoString(oneYearLater);
};

export const getFiveYearLaterDateIsoString = (): string => {
    const oneYearLater = new Date();
    oneYearLater.setFullYear(oneYearLater.getFullYear() + 5);
    return formatDateToIsoString(oneYearLater);
};

export const getThisYearStartDateIsoString = (): string => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const yearStartDate = new Date(Date.UTC(year, 0, 1)); // January 1st at 00:00:00 UTC
    return formatDateToIsoString(yearStartDate);
};

export const get2010StartDateIsoString = (): string => {
    const yearStartDate = new Date(Date.UTC(2010, 0, 1)); // January 1st at 00:00:00 UTC
    return formatDateToIsoString(yearStartDate);
};
