function keyb(val) {

    if (quest.value == 0) {
        quest.value = "";
    }
    quest.value += val;
}



function ans() {
    var result;
    result = eval(quest.value);
    answ.value = result;
    quest.value = 0;
}

function cls() {
    answ.value = " ";
    quest.value = 0;
}

function back() {
    if (quest.value != '0') {
        var newStr = quest.value.slice(0, -1);
        quest.value = newStr;
    }

}