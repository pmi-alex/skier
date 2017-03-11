var context,
    player,
    currentCommand = 0,
    listCommand = null,
    map;

function init() {
    var canvas = document.getElementById("mycanvas");
    context = canvas.getContext("2d");
    map = generateMap();
    player = new skier({x: 0, y: 0});
    player.Draw(context);
    setInterval(update, 300);
}

function update() {
    context.fillStyle = 'white';
    context.fillRect(0, 0, 640, 640);
    player.Draw(context);
    if (listCommand != null) {
        if(currentCommand < listCommand.length) {
            player.DoCommand(listCommand[currentCommand]);
            currentCommand++;
        }
        else {
            currentCommand = 0;
            listCommand = [];
        }
    }
}

function start() {
    listCommand = document.getElementById("ta").value.split(";\n"); //enter in the end
}

//���������� ���������� ������, string == last value
//map generator: https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B8%D1%81%D0%BA_%D0%BF%D1%83%D1%82%D0%B8