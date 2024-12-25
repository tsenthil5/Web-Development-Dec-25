const post1 = ["https://cdn.pixabay.com/photo/2018/04/26/12/14/travel-3351825_1280.jpg","https://media.istockphoto.com/id/1132916463/photo/maiden-tower-at-sunset.jpg?s=1024x1024&w=is&k=20&c=ywEcq6K2YmvWkbaTHJ1c80dV8E4GyZvBRiVTXUoCjyE=","https://media.istockphoto.com/id/1366450986/tr/foto%C4%9Fraf/beautiful-landscape-with-a-lighthouse-and-sailboats-at-sunset-lighthouse-tourlitis-of.jpg?s=1024x1024&w=is&k=20&c=yZ_xwtx3nUNbXN_wOC7PwQH6ST6mevuRd1WAA_SH_ak=","https://media.istockphoto.com/id/1309504187/tr/foto%C4%9Fraf/rocky-atlantic-ocean-sahilinde-kanada-bayra%C4%9F%C4%B1-ta%C5%9F%C4%B1yan-macerac%C4%B1-kad%C4%B1n.jpg?s=1024x1024&w=is&k=20&c=zzL76kf1JNbPrr7ehN3hQKf-EECJRTHsr8JcZv5YrgU="]

const intervals = {}
function scroll(imgElement){
    let rand = Math.floor(Math.random() * post1.length);
    imgElement.src = post1[rand]; 
    

}

function startstop(buttonElement, index, imgElement) {
    currVal = buttonElement.textContent;
    if (currVal === "Stop"){
        clearInterval(intervals[index]);
        buttonElement.textContent = "Start"
    }
    else{
        intervals[index] = setInterval(() => scroll(imgElement), Math.floor(Math.random() * 2000) + 1000);
        buttonElement.textContent = "Stop"
    }
}


let rows = document.querySelectorAll("#tableid tr")
rows.forEach((row, index) => {
    if(index === 0){
        return;
    }
    
    let imageColumn = row.querySelectorAll('td')[1];
    
    let imgElement = imageColumn.querySelector('img');
    let buttonElement = imageColumn.querySelector('button');
    
    intervals[index] = setInterval(() => scroll(imgElement), Math.floor(Math.random() * 5000) + 1000);
    buttonElement.addEventListener("click", () => startstop(buttonElement,index,imgElement))

});
