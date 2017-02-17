function movebytext() {
    var command = document.getElementById("ta").value;
    var element = document.getElementById("skier");

    switch (command) {
        case "up":
            element.style.transform = 'rotate(' + 270 + 'deg)';
            element.style.top = parseInt(element.style.top) - 32 + 'px';
            if (element.style.top < 0 + 'px')
                element.style.top = parseInt(element.style.top) + 32 + 'px';
            break;

        case "down":
            element.style.transform = 'rotate(' + 90 + 'deg)';
            element.style.top = parseInt(element.style.top) + 32 + 'px';
            if (element.style.top == 640 + 'px')
                element.style.top = parseInt(element.style.top) - 32 + 'px';
            break;

        case "left":
            element.style.transform = 'rotate(' + 180 + 'deg)';
            element.style.left = parseInt(element.style.left) - 32 + 'px';
            if (element.style.left < 0 + 'px')
                element.style.left = parseInt(element.style.left) + 32 + 'px';
            break;

        case "right":
            element.style.transform = 'rotate(' + 360 + 'deg)';
            element.style.left = parseInt(element.style.left) + 32 + 'px';
            if (element.style.left == 640 + 'px')
                element.style.left = parseInt(element.style.left) - 32 + 'px';
            break;
        //case ...
    }
}

var st = document.getElementById("start")
st.onclick = function() {
    movebytext();
}

//построчное считывание команд, string == last value
//map generator: https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B8%D1%81%D0%BA_%D0%BF%D1%83%D1%82%D0%B8