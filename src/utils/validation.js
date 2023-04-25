
export const formatDate = (date) => {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    day = "0" + day;
    month = "0" + month;
    var year = date.getFullYear();
    return year + "-" + month + "-" + day;
}