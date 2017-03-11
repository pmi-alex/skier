function generateMap() {
    var list = [];
    var rand = 0;
    for (var i = 0; i < 20; i++) {
        list.push([]);
    }
    for (var i = 0; i < 20; i++)
        for (var j = 0; j < 20; j++) {
            rand = Math.random();
            if (rand <= 0.5) {
                list[i][j] = 0;
            }
            else
                list[i][j] = 1;
        }
    return list;
}

//26245
