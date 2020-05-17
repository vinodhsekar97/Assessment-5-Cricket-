class Player {
    individualPlayerScore: number;
    playerBallCount: number;
    constructor() {
        this.individualPlayerScore = 0;
        this.playerBallCount = 6;
    }
}

let runs : number = 0;
let team1Finished : boolean = true;

class Team {
    individualTeamScore: number;
    TeamBallCount: number;
    players = new Player();
    PlayerList: Array<number> = [];
    index: number;
    wickets: number;
    inningsOver: boolean;

    constructor() {
        this.TeamBallCount = 0;
        this.individualTeamScore = 0;
        this.index = 1;
        this.inningsOver = false;
        this.wickets = 0;
    }

    batting = () => {

        if (this.TeamBallCount < 30 && this.index < 10) {
            if (this.players.playerBallCount > 0) {
                runs = 0;
                runs = Math.floor(Math.random() * 7);
                console.log(`Runs scored = ${runs}`);
                if (runs == 0) {
                    let output = "player is out\n";
                    output += `Player score = ${this.players.individualPlayerScore}`;
                    
                    this.PlayerList.push(this.players.individualPlayerScore);
                   
                    this.index++;
                    this.TeamBallCount++;
                    this.wickets++;
                    this.players.individualPlayerScore = 0;
                    this.players.playerBallCount = 6;
                }
                else {
                    this.players.individualPlayerScore += runs;
                    this.players.playerBallCount--;


                    this.individualTeamScore += runs;
                    this.TeamBallCount++;

                }


            }
            else if (this.players.playerBallCount == 0) {
                this.index++;
                
                this.PlayerList.push(this.players.individualPlayerScore);
                this.players.playerBallCount = 6;
                this.players.individualPlayerScore = 0;
                this.wickets++;
            }
        }
        else {
            this.PlayerList.push(this.players.individualPlayerScore);
            this.inningsOver = true;
            team1Finished = false;
        }
        /* let batting = "";
        batting += `Team balls left  = ${30-this.TeamBallCount}\n`;
        batting += `index = ${this.index}\n`;
        batting += `player ball count  = ${this.players.playerBallCount}\n`;
        batting += `player score  = ${this.players.individualPlayerScore}`; 
        alert(batting); */
    }
}


const team1 :Team = new Team();

const team2 :Team = new Team();

const hit1 = () => {
    //alert("Team 1 batting");
    team1.batting();
    display("teamScore1", "teamScore2");
}

let winner :string = "hexa";
let manOfMatch : string= "";

const hit2 = () => {
    if (team2.individualTeamScore > team1.individualTeamScore) {
        winner = "Team 2";
        //let maximum = Math.max(...team2.PlayerList);
        team2.inningsOver = true;
        display("teamScore1","teamScore2");

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
}

const displayBody = () => {

    document.write(`
    <center><h1>CRICKET 07</h1></center>
    <center><h3 id="runsScored">Runs Scored : ${runs}</h3></center>
    <div class = "container-fluid">
        <div class="d-flex justify-content-around">
            <div>
                <h2>Team1 Score</h2>
                <h3 id="teamScore1">${team1.individualTeamScore}/${team1.wickets} Balls Left : ${30 - team1.TeamBallCount}</h3>
                <h3 id="ballsLeft1">Total Balls Left : </h3>
                <h3 id="ballsPlayer1">Balls Left per player : </h3>
                <input type="button" value="HIT 1" id="btn1" class="form-control btn btn-primary" onclick="hit1()">
            </div>
            
            <div>
                <h2>Team2 Score</h2>
                <h3 id="teamScore2">${team2.individualTeamScore}/${team2.wickets} Balls Left:${30 - team2.TeamBallCount}</h3>
                <h3 id="ballsLeft2">Total Balls Left : </h3>
                <h3 id="ballsPlayer2">Balls Left per player : </h3>
                <input type="button" value="HIT 2" id="btn2"class="form-control btn btn-primary" onclick="hit2()">
            </div>
        </div>
    </div>

    <div class="wrapper">
        <div class="d-flex justify-content-around">
            <div>
                <h3>Team1 Score board</h3>
                <table class="table">
                    <thead>
                        <th scope="col">Team1</th>
                        <th scope="col">Player Score</th>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Player1</th>
                        <th id="pl1"></th>
                    </tr>
                    <tr>
                        <th scope="row">Player2</th>
                        <th id="pl2"></th>
                    </tr>
                    <tr>
                        <th scope="row">Player3</th>
                        <th id="pl3"></th>
                    </tr>
                    <tr>
                        <th scope="row">Player4</th>
                        <th id="pl4"></th>
                    </tr>
                    <tr>
                        <th scope="row">Player5</th>
                        <th id="pl5"></th>
                    </tr>
                    <tr>
                        <th scope="row">Player6</th>
                        <th id = "pl6"></th>
                    </tr>
                    <tr>
                        <th scope="row">Player7</th>
                        <th id="pl7"></th>
                    </tr>
                    <tr>
                        <th scope="row">Player8</th>
                        <th id="pl8"></th>
                    </tr>
                    <tr>
                        <th scope="row">Player9</th>
                        <th id="pl9"></th>
                    </tr>
                    <tr>
                        <th scope="row">Player10</th>
                        <th id= "pl10"></th>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <input type="button" id="result" value="Generate Result" class="form-control btn btn-primary" onclick="generateResult()">
                <h4 id="conclusion"></h4>
            </div>
            <div>
                <h3>Team2 Score board</h3>
                <table class="table">
                    <thead>
                        <th scope="col">Team1</th>
                        <th scope="col">Player Score</th>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Player1</th>
                        <th id="ll1"></th>
                    </tr>
                    <tr>
                        <th scope="row">Player2</th>
                        <th id="ll2"></th>
                    </tr>
                    <tr>
                        <th scope="row">Player3</th>
                        <th id="ll3"></th>
                    </tr>
                    <tr>
                        <th scope="row">Player4</th>
                        <th id="ll4"></th>
                    </tr>
                    <tr>
                        <th scope="row">Player5</th>
                        <th id="ll5"></th>
                    </tr>
                    <tr>
                        <th scope="row">Player6</th>
                        <th id="ll6"></th>
                    </tr>
                    <tr>
                        <th scope="row">Player7</th>
                        <th id="ll7"></th>
                    </tr>
                    <tr>
                        <th scope="row">Player8</th>
                        <th id="ll8"></th>
                    </tr>
                    <tr>
                        <th scope="row">Player9</th>
                        <th id="ll9"></th>
                    </tr>
                    <tr>
                        <th scope="row">Player10</th>
                        <th id="ll10"></th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
 `);






}

displayBody();

let team1PlayerId : Array<string> = ["pl1", "pl2", "pl3", "pl4", "pl5", "pl6", "pl7", "pl8", "pl9", "pl10"];
let team2PlayerId : Array<string> = ["ll1", "ll2", "ll3", "ll4", "ll5", "ll6", "ll7", "ll8", "ll9", "ll10"];
let display = (team1Id, team2Id) => {
    (<HTMLInputElement>document.getElementById(team1Id)).innerHTML = `${team1.individualTeamScore}/${team1.wickets}`;
    (<HTMLInputElement>document.getElementById("ballsLeft1")).innerHTML = `Total Balls Left : ${30 - team1.TeamBallCount}`;
    (<HTMLInputElement>document.getElementById("ballsPlayer1")).innerHTML = `Balls left per player : ${team1.players.playerBallCount}`;
    (<HTMLInputElement>document.getElementById(team2Id)).innerHTML = `${team2.individualTeamScore}/${team2.wickets}`;
    (<HTMLInputElement>document.getElementById("ballsLeft2")).innerHTML = `Total Balls Left : ${30 - team2.TeamBallCount}`;
    (<HTMLInputElement>document.getElementById("ballsPlayer2")).innerHTML = `Balls left per player : ${team2.players.playerBallCount}`;
    if(runs == 0 && (team1.TeamBallCount != 0)){
        (<HTMLInputElement>document.getElementById("runsScored")).innerHTML = `${runs} -->Out !!`;
    }
    else{
    (<HTMLInputElement>document.getElementById("runsScored")).innerHTML = `Runs Scored : ${runs}`;
    }
    (<HTMLInputElement>document.getElementById("btn1")).disabled = team1.inningsOver;
    (<HTMLInputElement>document.getElementById("btn2")).disabled = team1Finished || team2.inningsOver;
    (<HTMLInputElement>document.getElementById("result")).disabled = !team1.inningsOver || !team2.inningsOver;
    
    
    if (team1.inningsOver && team2.inningsOver) {
        document.getElementById("conclusion").style.display = "block";
    }
    else {
        document.getElementById("conclusion").style.display = "none";
    }

    if (team1.inningsOver) {
        for (let i = 0, j = 0; i < team1PlayerId.length; i++, j++) {
            if (team1.PlayerList[j] == undefined) {
                (<HTMLInputElement>document.getElementById(team1PlayerId[i])).innerHTML = "-";
            }
            else {
                (<HTMLInputElement>document.getElementById(team1PlayerId[i])).innerHTML = `${team1.PlayerList[j]}`;
            }
        }
    }
    if (team2.inningsOver) {
        for (let i = 0, j = 0; i < team2PlayerId.length; i++, j++) {
            if (team2.PlayerList[j] == undefined) {
                (<HTMLInputElement>document.getElementById(team2PlayerId[i])).innerHTML = "-";
            }
            else {
                (<HTMLInputElement>document.getElementById(team2PlayerId[i])).innerHTML = `${team2.PlayerList[j]}`;
            }
        }
    }
}

let generateResult = () => {
    if (team2.individualTeamScore > team1.individualTeamScore) {
        winner = "Team 2";
        let maximum : number = Math.max(...team2.PlayerList);
        for(let i = 0;i < team2.PlayerList.length;i++){
            if(team2.PlayerList[i] == maximum){
                manOfMatch += `\nMan of the Match \nPlayer ${i+1}\n`;
                manOfMatch += "Team 2\n";
                manOfMatch += `Score : ${maximum}\n`;
                break;
            }
        }

    }
    else if (team2.individualTeamScore < team1.individualTeamScore) {
        winner = "Team 1";
        let maximum : number = Math.max(...team1.PlayerList);
        for(let i = 0;i < team1.PlayerList.length;i++){
            if(team1.PlayerList[i] == maximum){
                manOfMatch += `\nMan of the match \nPlayer ${i+1}\n`;
                manOfMatch += "Team 1\n";
                manOfMatch += `Score : ${maximum}`;
                break;
            }
        }
    }
    else {
        winner = "Match Draw";
    }
    document.getElementById("conclusion").innerHTML += `\nMatch Won By ${winner}\n`;
    document.getElementById("conclusion").innerHTML += `${manOfMatch}`;
}

display("teamScore1", "teamScore2");