function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    date = userDate.split("/");
    date[1] = date[1].length < 2 ? "0" + date[1] : date[1];
    date[0] = date[0].length < 2 ? "0" + date[0] : date[0];
    return date[2] + date[0] + date[1];
}

console.log(formatDate("2/1/2014"));
