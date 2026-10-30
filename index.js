document.addEventListener("DOMContentLoaded", () => {
    const rankingObj = getRankingObj(alexMovies, stanMovies, kyleMovies);

    console.log(rankingObj);

    const ranking = getRanking(rankingObj);

    console.log(ranking);






});

const getRankingObj = (listOne, listTwo, listThree) => {
    const lists = [listOne, listTwo, listThree];

    return lists.reduce((acc, current) => {
        current.forEach(movie => {
            if (acc[movie.title]){
                acc[movie.title].points += movie.points;
                acc[movie.title].submitters.push(movie.submitter);
            } else {
                acc[movie.title] = {
                    points: movie.points,
                    year: movie.year,
                    director: movie.director,
                    submitters: [movie.submitter],
                }
            }
        })
        return acc;
    }, {});
}

const getRanking = (obj) => {
    const entries = [];

    for (let key in obj){
        const sub = [key, obj[key].points];
        entries.push(sub);
    }

    entries.sort((a, b) => b[1] - a[1]);

    return entries;
}