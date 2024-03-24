//Tujuan : Get Data dari API dan kita tampilkan

//1. function Card 
//2. function Get data dari API
//3. function displayData dengan card

function cardShow(data) {
    let labelProgress = data.completed == true ? "Done" : "On Progress";
    let colorProgress = data.completed == true ? "#0a9a1f" : "#c78809";
    return `<div
      style="
        border: 1px rgb(126, 126, 126) solid;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 16px;
        padding-right: 16px;
        border-radius: 10px;
      "
    >
      <div style="font-size: 24px">${data.title}</div>
      <div
        style="
          font-size: 16px;
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
        "
      >
        <div>User id:1</div>
        <div
          style="
            background-color: ${colorProgress};
            color: white;
            padding-top: 3px;
            padding-bottom: 3px;
            padding-left: 5px;
            padding-right: 5px;
            border-radius: 8px;
          "
        >
         ${labelProgress}
        </div>
      </div>
    </div>`;
}

async function fetchData() {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos");
    let resData = await data.json();

    return resData
}

async function displayCard() {
    let data = await fetchData()
    const containerElm = document.getElementById("list_task");
    data.forEach((task) => {
        let taskItem = document.createElement("div");
        taskItem.innerHTML = cardShow(task);
        containerElm.appendChild(taskItem);
    });
    console.log(taskItem);
}

displayCard()