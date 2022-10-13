export const uniqueDates = (tasks) =>{
    const unique = [];

    tasks.forEach(task =>{
        if(!unique.includes(task.dateFormat)) {
            unique.push(task.dateFormat);}
    });
    return unique;
}

export const orderDates = (dates) => {
    return dates.sort((a,b) => {
        const firsDate = moment(a, "DD/MM/YYY");
        const lastDate = moment(b, "DD/MM/YYY");
        return firsDate - lastDate;
    });

}