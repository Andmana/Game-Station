export const dateFormater = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
};

export const dateNow = () => {
    const currentDate = new Date();
    return dateFormater(currentDate);
};

export const dateNextYear = () => {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() + 1);
    return dateFormater(currentDate);
};
