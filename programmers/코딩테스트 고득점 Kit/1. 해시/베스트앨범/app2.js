function solution(genres, plays) {
    var songs = genres.map((genre, index) => {
        return {
            no: index,
            genre: genre,
            playCount: plays[index],
        };
    });
    // console.log(songs);

    var genrePlayCount = [];
    // 장르별 총 play 횟수 기록
    songs.forEach((song) => {
        var thisGenre = genrePlayCount.find((genrePlay) => genrePlay.genre === song.genre);
        if (!thisGenre) {
            genrePlayCount.push({
                genre: song.genre,
                totalPlayCount: song.playCount,
            });
        } else {
            thisGenre.totalPlayCount += song.playCount;
        }
    });

    genrePlayCount.sort((a, b) => b.totalPlayCount - a.totalPlayCount);

    var answer = [];

    genrePlayCount.forEach((genrePlay) => {
        var thisGenreSongs = songs.filter((song) => genrePlay.genre === song.genre);
        thisGenreSongs.sort((a, b) => b.playCount - a.playCount);
        // 높은 장르의 곡들을 filter
        answer.push(thisGenreSongs[0].no);
        // 그 중 첫 번째 곡을 array에 삽입
        if (thisGenreSongs.length > 1) {
            answer.push(thisGenreSongs[1].no);
        }
    });

    return answer;
}
let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [500, 600, 150, 800, 2500];
solution(genres, plays);
