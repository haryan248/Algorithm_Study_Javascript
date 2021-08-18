// 사용된 시간과 관련하여 효율적으로 주어진 양수 배열의 두 요소를 크게 반환하는 findMaxSum 메서드를 구현합니다.
function getPageData(dayTrade, pageSize, pageNumber) {
    // Your code goes here
    let new_dayTrade;
    new_dayTrade = JSON.parse(dayTrade).sort(function (a, b) {
        return a.countOfStocks - b.countOfStocks;
    });
    let total_dayTrade = [...new_dayTrade];
    let page_dayTrade = [...new_dayTrade];
    let now = 0;
    total_dayTrade = Object.values(
        total_dayTrade.reduce((agg, trade) => {
            if (agg[trade.user] === undefined) {
                agg[trade.user] = { user: trade.user, totalStocks: 0 };
            }
            agg[trade.user].totalStocks += trade.countOfStocks;
            return agg;
        }, {})
    );

    page_dayTrade = page_dayTrade.reduce((acc, trade, i) => {
        if (acc[now] === undefined) {
            acc[now] = [];
        }
        acc[now].push(trade);
        if ((i + 1) % pageSize === 0) {
            now++;
        }
        return acc;
    }, []);
    result = [];
    page_dayTrade = page_dayTrade[pageNumber - 1].map((element1) => {
        total_dayTrade.forEach((element2) => {
            if (element2.user == element1.user) {
                result.push(element2);
            }
        });
    });
    return JSON.stringify(result);
}
var dayTrade = [
    { user: "Rob", company: "Google", countOfStocks: 5 },
    { user: "Bill", company: "Goldman", countOfStocks: 18 },
    { user: "Rob", company: "JPMorgan", countOfStocks: 10 },
    { user: "Dave", company: "Boeing", countOfStocks: 10 },
];

var dayTrade = `[
	{"user": "Rob", "company": "Google", "countOfStocks": 5},
	{"user": "Bill", "company": "Goldman", "countOfStocks": 18},
	{"user": "Rob", "company": "JPMorgan", "countOfStocks": 10},
	{"user": "Dave", "company": "Boeing", "countOfStocks": 10}
  ]`;

console.log(getPageData(dayTrade, 1, 2)); // page size = 1, page number = 2

// 주식 거래 웹 애플리케이션의 프런트 엔드 인터페이스에는 JSON 형식의 당일 거래 데이터가 있습니다.
// 해당 날짜의 사용자 거래 보고서에 페이지를 매기기 위해 getPageData 함수를 구현합니다.
// 이 기능은 JSON 형식의 문자열, 페이지 크기 및 페이지 번호를 허용합니다.
// • 각 사용자가 그날 거래한 주식을 요약합니다.
// • 사용자별 총 주식을 기준으로 사용자 데이터를 내림차순으로 정렬합니다.
// 두 명 이상의 사용자가 동일한 재고 총액을 가지고 있는 경우 순서에 상관없이 사용할 수 있습니다.
// 에 따라 주어진 페이지 번호에 대한 거래 데이터가 있는 JSON 형식
// • 문자열 페이지 크기를 반환합니다.
// 페이지 번호는 1부터 시작합니다.
// 예를 들어 아래 코드는
// var dayTrade = [
// 	{ "user": "Rob", "company" "Google", "countofstocks": 5 },
// 	{"user": "Bill", "  company": "Goldman, countofStocks": 18},
// 	{"user": "Rob", "company": "JPHorgan", "countofStocks: 10},
// 	{"user": "Dave", "company": "보잉  ", countofStocks": 10}
// ]
// console.log(getPageData(dayTrade, 1, 2));  // 페이지 크기 = 1,페이지 번호 2
// : * [("user": "Rob", "totalstocks": 15}]"
