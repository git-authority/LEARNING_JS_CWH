function createCard(title, cName, views, months, duration, thumbnail) {

    let viewStr;
    let monthsOld;

    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }
    months = Math.floor(months);
    if(months<12){
        monthsOld = (months.toString()) + " months";
    }
    else{
        months/=12;
        months = Math.floor(months);
        monthsOld = (months.toString()) + " years";
    }

    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} ago</p>
    </div>
</div>`;

document.querySelector(".container").innerHTML = html;
}

createCard("JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77", "Abhrasnata Ray", 5600   , 11.9, "65:22", "https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqIwQwDx1EIDwleUS2D1CGiar3LQ");