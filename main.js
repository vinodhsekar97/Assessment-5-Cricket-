var Player = /** @class */ (function () {
    function Player() {
        this.individualPlayerScore = 0;
        this.playerBallCount = 6;
    }
    return Player;
}());
var runs = 0;
var team1Finished = true;
var Team = /** @class */ (function () {
    function Team() {
        var _this = this;
        this.players = new Player();
        this.PlayerList = [];
        this.batting = function () {
            if (_this.TeamBallCount < 30 && _this.index < 10) {
                if (_this.players.playerBallCount > 0) {
                    runs = 0;
                    runs = Math.floor(Math.random() * 7);
                    console.log("Runs scored = " + runs);
                    if (runs == 0) {
                        var output = "player is out\n";
                        output += "Player score = " + _this.players.individualPlayerScore;
                        _this.PlayerList.push(_this.players.individualPlayerScore);
                        _this.index++;
                        _this.TeamBallCount++;
                        _this.wickets++;
                        _this.players.individualPlayerScore = 0;
                        _this.players.playerBallCount = 6;
                    }
                    else {
                        _this.players.individualPlayerScore += runs;
                        _this.players.playerBallCount--;
                        _this.individualTeamScore += runs;
                        _this.TeamBallCount++;
                    }
                }
                else if (_this.players.playerBallCount == 0) {
                    _this.index++;
                    _this.PlayerList.push(_this.players.individualPlayerScore);
                    _this.players.playerBallCount = 6;
                    _this.players.individualPlayerScore = 0;
                    _this.wickets++;
                }
            }
            else {
                _this.PlayerList.push(_this.players.individualPlayerScore);
                _this.inningsOver = true;
                team1Finished = false;
            }
            /* let batting = "";
            batting += `Team balls left  = ${30-this.TeamBallCount}\n`;
            batting += `index = ${this.index}\n`;
            batting += `player ball count  = ${this.players.playerBallCount}\n`;
            batting += `player score  = ${this.players.individualPlayerScore}`;
            alert(batting); */
        };
        this.TeamBallCount = 0;
        this.individualTeamScore = 0;
        this.index = 1;
        this.inningsOver = false;
        this.wickets = 0;
    }
    return Team;
}());
var team1 = new Team();
var team2 = new Team();
var hit1 = function () {
    //alert("Team 1 batting");
    team1.batting();
    display("teamScore1", "teamScore2");
};
var winner = "hexa";
var manOfMatch = "";
var hit2 = function () {
    if (team2.individualTeamScore > team1.individualTeamScore) {
        winner = "Team 2";
        //let maximum = Math.max(...team2.PlayerList);
        team2.inningsOver = true;
        display("teamScore1", "teamScore2");
    }
    else {
        if (team2.inningsOver == true) {
            winner = "Team 1";
        }
        else {
            //alert("Team 2 Batting");
            team2.batting();
            display("teamScore1", "teamScore2");
        }
    }
};
var displayBody = function () {
    document.write("\n    <center><h1>CRICKET 07</h1></center>\n    <center><h3 id=\"runsScored\">Runs Scored : " + runs + "</h3></center>\n    <div class = \"container-fluid\">\n        <div class=\"d-flex justify-content-around\">\n            <div>\n                <h2>Team1 Score</h2>\n                <h3 id=\"teamScore1\">" + team1.individualTeamScore + "/" + team1.wickets + " Balls Left : " + (30 - team1.TeamBallCount) + "</h3>\n                <h3 id=\"ballsLeft1\">Total Balls Left : </h3>\n                <h3 id=\"ballsPlayer1\">Balls Left per player : </h3>\n                <input type=\"button\" value=\"HIT 1\" id=\"btn1\" class=\"form-control btn btn-primary\" onclick=\"hit1()\">\n            </div>\n            \n            <div>\n                <h2>Team2 Score</h2>\n                <h3 id=\"teamScore2\">" + team2.individualTeamScore + "/" + team2.wickets + " Balls Left:" + (30 - team2.TeamBallCount) + "</h3>\n                <h3 id=\"ballsLeft2\">Total Balls Left : </h3>\n                <h3 id=\"ballsPlayer2\">Balls Left per player : </h3>\n                <input type=\"button\" value=\"HIT 2\" id=\"btn2\"class=\"form-control btn btn-primary\" onclick=\"hit2()\">\n            </div>\n        </div>\n    </div>\n\n    <div class=\"wrapper\">\n        <div class=\"d-flex justify-content-around\">\n            <div>\n                <h3>Team1 Score board</h3>\n                <table class=\"table\">\n                    <thead>\n                        <th scope=\"col\">Team1</th>\n                        <th scope=\"col\">Player Score</th>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <th scope=\"row\">Player1</th>\n                        <th id=\"pl1\"></th>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Player2</th>\n                        <th id=\"pl2\"></th>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Player3</th>\n                        <th id=\"pl3\"></th>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Player4</th>\n                        <th id=\"pl4\"></th>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Player5</th>\n                        <th id=\"pl5\"></th>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Player6</th>\n                        <th id = \"pl6\"></th>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Player7</th>\n                        <th id=\"pl7\"></th>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Player8</th>\n                        <th id=\"pl8\"></th>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Player9</th>\n                        <th id=\"pl9\"></th>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Player10</th>\n                        <th id= \"pl10\"></th>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div>\n                <input type=\"button\" id=\"result\" value=\"Generate Result\" class=\"form-control btn btn-primary\" onclick=\"generateResult()\">\n                <h4 id=\"conclusion\"></h4>\n            </div>\n            <div>\n                <h3>Team2 Score board</h3>\n                <table class=\"table\">\n                    <thead>\n                        <th scope=\"col\">Team1</th>\n                        <th scope=\"col\">Player Score</th>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <th scope=\"row\">Player1</th>\n                        <th id=\"ll1\"></th>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Player2</th>\n                        <th id=\"ll2\"></th>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Player3</th>\n                        <th id=\"ll3\"></th>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Player4</th>\n                        <th id=\"ll4\"></th>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Player5</th>\n                        <th id=\"ll5\"></th>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Player6</th>\n                        <th id=\"ll6\"></th>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Player7</th>\n                        <th id=\"ll7\"></th>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Player8</th>\n                        <th id=\"ll8\"></th>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Player9</th>\n                        <th id=\"ll9\"></th>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Player10</th>\n                        <th id=\"ll10\"></th>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n ");
};
displayBody();
var team1PlayerId = ["pl1", "pl2", "pl3", "pl4", "pl5", "pl6", "pl7", "pl8", "pl9", "pl10"];
var team2PlayerId = ["ll1", "ll2", "ll3", "ll4", "ll5", "ll6", "ll7", "ll8", "ll9", "ll10"];
var display = function (team1Id, team2Id) {
    document.getElementById(team1Id).innerHTML = team1.individualTeamScore + "/" + team1.wickets;
    document.getElementById("ballsLeft1").innerHTML = "Total Balls Left : " + (30 - team1.TeamBallCount);
    document.getElementById("ballsPlayer1").innerHTML = "Balls left per player : " + team1.players.playerBallCount;
    document.getElementById(team2Id).innerHTML = team2.individualTeamScore + "/" + team2.wickets;
    document.getElementById("ballsLeft2").innerHTML = "Total Balls Left : " + (30 - team2.TeamBallCount);
    document.getElementById("ballsPlayer2").innerHTML = "Balls left per player : " + team2.players.playerBallCount;
    if (runs == 0 && (team1.TeamBallCount != 0)) {
        document.getElementById("runsScored").innerHTML = runs + " -->Out !!";
    }
    else {
        document.getElementById("runsScored").innerHTML = "Runs Scored : " + runs;
    }
    document.getElementById("btn1").disabled = team1.inningsOver;
    document.getElementById("btn2").disabled = team1Finished || team2.inningsOver;
    document.getElementById("result").disabled = !team1.inningsOver || !team2.inningsOver;
    if (team1.inningsOver && team2.inningsOver) {
        document.getElementById("conclusion").style.display = "block";
    }
    else {
        document.getElementById("conclusion").style.display = "none";
    }
    if (team1.inningsOver) {
        for (var i = 0, j = 0; i < team1PlayerId.length; i++, j++) {
            if (team1.PlayerList[j] == undefined) {
                document.getElementById(team1PlayerId[i]).innerHTML = "-";
            }
            else {
                document.getElementById(team1PlayerId[i]).innerHTML = "" + team1.PlayerList[j];
            }
        }
    }
    if (team2.inningsOver) {
        for (var i = 0, j = 0; i < team2PlayerId.length; i++, j++) {
            if (team2.PlayerList[j] == undefined) {
                document.getElementById(team2PlayerId[i]).innerHTML = "-";
            }
            else {
                document.getElementById(team2PlayerId[i]).innerHTML = "" + team2.PlayerList[j];
            }
        }
    }
};
var generateResult = function () {
    if (team2.individualTeamScore > team1.individualTeamScore) {
        winner = "Team 2";
        var maximum = Math.max.apply(Math, team2.PlayerList);
        for (var i = 0; i < team2.PlayerList.length; i++) {
            if (team2.PlayerList[i] == maximum) {
                manOfMatch += "\nMan of the Match \nPlayer " + (i + 1) + "\n";
                manOfMatch += "Team 2\n";
                manOfMatch += "Score : " + maximum + "\n";
                break;
            }
        }
    }
    else if (team2.individualTeamScore < team1.individualTeamScore) {
        winner = "Team 1";
        var maximum = Math.max.apply(Math, team1.PlayerList);
        for (var i = 0; i < team1.PlayerList.length; i++) {
            if (team1.PlayerList[i] == maximum) {
                manOfMatch += "\nMan of the match \nPlayer " + (i + 1) + "\n";
                manOfMatch += "Team 1\n";
                manOfMatch += "Score : " + maximum;
                break;
            }
        }
    }
    else {
        winner = "Match Draw";
    }
    document.getElementById("conclusion").innerHTML += "\nMatch Won By " + winner + "\n";
    document.getElementById("conclusion").innerHTML += "" + manOfMatch;
};
display("teamScore1", "teamScore2");
