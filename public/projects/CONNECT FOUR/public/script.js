(function() {
    function mixColor() {
        return (
            "rgba(" +
            Math.floor(255 * Math.random()) +
            "," +
            Math.floor(255 * Math.random()) +
            "," +
            Math.floor(255 * Math.random())
        );
    }

    var columns = $(".column");
    var slots = $(".slot");

    var player1Col;
    var player2Col;
    var n;
    var m;
    var curPlayer;
    var slots;
    var s;

    function init() {
        player1Col = mixColor();
        player2Col = mixColor();
        curPlayer = "player1";
        n = -1;
        m = -1;
        s = -1;
        $("#reset").hide();
        $(".winner").hide();
        $(".winscreen").hide();
        $(".startScreen").show();
        $("#start").show();
        $(".backTrans").show();
    }

    init();

    function flashLoop() {
        columns.eq(n).css({ backgroundColor: "" });
        if (n < 7) {
            columns.eq(n + 1).css({
                backgroundColor: n % 2 == 0 ? player1Col : player2Col
            });
            n++;
            setTimeout(flashLoop, 120);
        }
        console.log(n);
    }

    function genRand() {
        return Math.floor(Math.random() * 42) + 1;
    }

    function slotLoop() {
        slots.eq(s).css({ backgroundColor: "" });
        if (s < 42) {
            slots.eq(genRand()).css({
                backgroundColor: switchCol()
            });
            s++;
            setTimeout(slotLoop, 30);
        }
        console.log(s);
    }

    //CLICK FUNCTION
    $(".column").on("click", function(e) {
        if (curPlayer == "player1") {
            $(this).css("backgroundColor", player2Col + "," + 0.8 + ")");
        } else if (curPlayer == "player2") {
            $(this).css("backgroundColor", player1Col + "," + 0.8 + ")");
        }
        var slotsInColumn = $(e.currentTarget).find(".slot");
        for (var i = 5; i >= 0; i--) {
            if (!slotsInColumn.eq(i).hasClass("player1")) {
                if (!slotsInColumn.eq(i).hasClass("player2")) {
                    break;
                }
            }
        }
        if (slotsInColumn.eq(i).hasClass(curPlayer)) {
        }

        slotsInColumn.eq(i).addClass(curPlayer);
        $(".slot.player1").css("backgroundColor", player1Col + "," + 1 + ")");
        $(".slot.player2").css("backgroundColor", player2Col + "," + 1 + ")");
        if (checkForVictoryC(slotsInColumn)) {
            return;
        } else {
            if (checkForVictoryC($(".row" + i))) {
                console.log(curPlayer);
            } else if (checkDia($(".slot"))) {
                win();
            }
        }
        console.log(curPlayer);
        var div = document.getElementById("popUpPlayer");
        switchPlayer();
    });

    //MOUSE OVER EVENTS
    $(".column").mouseover(function() {
        if (curPlayer == "player1") {
            $(this).css("backgroundColor", player1Col + "," + 0.8 + ")");
        } else if (curPlayer == "player2") {
            $(this).css("backgroundColor", player2Col + "," + 0.8 + ")");
        }
    });

    $(".column").mouseleave(function() {
        if (curPlayer == "player1") {
            $(this).css("backgroundColor", "");
        } else if (curPlayer == "player2") {
            $(this).css("backgroundColor", "");
        }
    });

    // CHECK FOR A WINNER (H & V)
    function checkForVictoryC(column) {
        var str = "";
        for (var i = 0; i < column.length; i++) {
            if (column.eq(i).hasClass(curPlayer)) {
                str += "1";
            } else {
                str += "0";
            }
        }
        if (str.indexOf("1111") > -1) {
            win();
            return true;
        }
    }

    // DIAGONAL CHECK
    function checkDia(slots) {
        for (var i = 1; i < slots.length; i++) {
            if (
                slots.eq(i).hasClass(curPlayer) &&
                slots.eq(i + 7).hasClass(curPlayer) &&
                slots.eq(i + 14).hasClass(curPlayer) &&
                slots.eq(i + 21).hasClass(curPlayer)
            ) {
                switchPlayer();
                return true;
            } else if (
                slots.eq(i).hasClass(curPlayer) &&
                slots.eq(i + 5).hasClass(curPlayer) &&
                slots.eq(i + 10).hasClass(curPlayer) &&
                slots.eq(i + 15).hasClass(curPlayer)
            ) {
                switchPlayer();
                return true;
            }
        }
    }
    var body = $("body");
    // WIN EVENT
    function win() {
        $(".backTrans").show();
        $(".name").empty();
        clear();
        slotLoop();
        setTimeout(function() {
            $(".backTrans").show();
            $(".winscreen")
                .fadeIn(1000)
        }, 1000);
    }

    // SWITCH PLAYERS
    function switchPlayer() {
        if (curPlayer == "player1") {
            curPlayer = "player2";
        } else {
            curPlayer = "player1";
        }
    }

    function switchCol() {
        if (curPlayer == "player1") {
            curCol = player1Col;
        } else {
            curCol = player2Col;
        }
        return curCol;
    }

    // function fixstring() {
    //     var string = "";
    //     if (string.contains("rgba(") {
    //
    // )

    function clear() {
        $(".name").empty();
        $(".slot").css("backgroundColor", "");
        $(".slot").removeClass("player2");
        $(".slot").removeClass("player1");
    }

    function showHide() {
        $("#start").hide();
        $("#reset").show();
        $(".startScreen").hide();
        $(".back").hide();
        $(".backTrans").hide(900);
    }

    var cleaner = $(".cleaner");
    cleaner.on("click", function() {
        clear();
        init();
        flashLoop();
        showHide();
        console.log("start pressed");
    });
})();
