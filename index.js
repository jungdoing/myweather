// // https://openweathermap.org/
const API_KEY = "ef302cb044596c0184b057371d547b71";

// 1. 검색버튼을 눌렀을 때, 도시 정보를 가져옵니다.
const searchBtn = document.getElementById("search-btn");
console.log(searchBtn);
searchBtn.addEventListener("click", getWearher);

function getWearher () {
    console.log('get Wearher');
    const cityInp = document.getElementById("city-inp");
    console.log("입력된값:", cityInp.value);

    if(cityInp.value) {
        // 1-1. 도시 정보가 있으면, 날씨 정보를 요청을 보냅니다.
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInp.value}&appid=${API_KEY}&lang=kr&units=metric`;

        fetch(url)
            .then((response) => {
            if(!response.ok) {throw new Error('HTTP error')}
              return response.json();
            })
            .then((data) => {
              console.log(data)
              console.log("온도1", data["main"]["temp"])
              console.log("온도2", data["main"]["temp"])
              console.log("설명", data["weather"][0]["description"]);

              // 화면에 출력하는 코드
              // 온도는 아이디 degree를 갖는 요소에 넣어주세요
              document.getElementById('degree').innerText = data.main.temp;
              // 온도의 값에 따라서 온도 색을 바꾸는 코드
              // 온도 10도 이상 > 빨강
              // 온도 10도 미만 > 파랑
              document.getElementById('description').textContent = data["weather"][0]["description"];
              if(data.main.temp >= 10) {
                document.getElementById('degree').style.color = 'Red';
              } else {
                document.getElementById('degree').style.color = 'Blue';
              }
            })
            .catch((error) => {
              console.error(error);
            });
        } else {

        // 1-2. 도시 정보가 없으면, 사용자에게 안내 메시지를 보냅니다.
        window.alert("입력된 값이 없습니다.");
}
    }
