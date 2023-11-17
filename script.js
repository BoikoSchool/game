let SHEET_ID = "1PjvFGVTddYaxYeBU55kNiEqYHXoS3zK5AvYiapXgEoQ";
let SHEET_TITLE = "Table";
let SHEET_RANGE = "A1:E21";

function fetchData() {
  let FULL_URL =
    "https://docs.google.com/spreadsheets/d/" +
    SHEET_ID +
    "/gviz/tq?sheet=" +
    SHEET_TITLE +
    "&range=" +
    SHEET_RANGE;

  fetch(FULL_URL)
    .then((res) => res.text())
    .then((rep) => {
      let data = JSON.parse(rep.substr(47).slice(0, -2));
      console.log(data);
      let griffinScore = document.getElementById("griffin-score");
      let dragonScore = document.getElementById("dragon-score");

      let personal_help_to_another_G = document.getElementById("data 1");
      let personal_help_to_another_D = document.getElementById("data 2");
      let personal_victory_competition_G = document.getElementById("data 3");
      let personal_victory_competition_D = document.getElementById("data 4");
      let personal_victory_school_competition_G =
        document.getElementById("data 5");
      let personal_victory_school_competition_D =
        document.getElementById("data 6");
      let helping_another_in_learning_G = document.getElementById("data 7");
      let helping_another_in_learning_D = document.getElementById("data 8");
      let teacher_assistance_G = document.getElementById("data 9");
      let teacher_assistance_D = document.getElementById("data 10");
      let aiding_my_home_school_G = document.getElementById("data 11");
      let aiding_my_home_school_D = document.getElementById("data 12");
      let professional_competition_victory_G =
        document.getElementById("data 13");
      let professional_competition_victory_D =
        document.getElementById("data 14");
      let social_activity_G = document.getElementById("data 15");
      let social_activity_D = document.getElementById("data 16");
      let team_victory_school_competition_G =
        document.getElementById("data 17");
      let team_victory_school_competition_D =
        document.getElementById("data 18");
      let griffin_lose = document.getElementById("data 19");
      let dragon_lose = document.getElementById("data 20");
      let griffin_lose_inappropriate_behavior =
        document.getElementById("data 21");
      let dragon_lose_inappropriate_behavior =
        document.getElementById("data 22");
      let griffin_lose_inappropriate_behavior_in_class =
        document.getElementById("data 23");
      let dragon_lose_inappropriate_behavior_in_class =
        document.getElementById("data 24");
      let griffin_lose_inappropriate_personal =
        document.getElementById("data 25");
      let dragon_lose_inappropriate_personal =
        document.getElementById("data 26");
      let griffin_lose_humiliation = document.getElementById("data 27");
      let dragon_lose_humiliation = document.getElementById("data 28");
      let griffin_lose_school = document.getElementById("data 29");
      let dragon_lose_school = document.getElementById("data 30");
      let griffin_every = document.getElementById("data 31");
      let dragon_every = document.getElementById("data 32");

      let homeHelpAnother = document.getElementById("home_help_another");
      let awayHelpAnother = document.getElementById("away_help_another");
      let homePersonalCompetition = document.getElementById(
        "home_personal_competition"
      );
      let awayPersonalCompetition = document.getElementById(
        "away_personal_competition"
      );
      let homePersonalSchoolCompetition = document.getElementById(
        "home_personal_schoolcompetition"
      );
      let awayPersonalSchoolCompetition = document.getElementById(
        "away_personal_schoolcompetition"
      );
      let homeHelpStudy = document.getElementById("home_help_study");
      let awayHelpStudy = document.getElementById("away_help_study");
      let homeAssistant = document.getElementById("home_assistant");
      let awayAssistant = document.getElementById("away_assistant");
      let homeHelpSchool = document.getElementById("home_help_school");
      let awayHelpSchool = document.getElementById("away_help_school");
      let homeVictoryPro = document.getElementById("home_victory_pro");
      let awayVictoryPro = document.getElementById("away_victory_pro");
      let homeSocial = document.getElementById("home_social");
      let awaySocial = document.getElementById("away_social");
      let homeVictoryTeam = document.getElementById("home_victory_team");
      let awayVictoryTeam = document.getElementById("away_victory_team");
      let homeLose = document.getElementById("home_lose");
      let awayLose = document.getElementById("away_lose");

      let homeLoseInappropriateBehavior = document.getElementById(
        "home_lose-inappropriate-behavior"
      );
      let awayLoseInappropriateBehavior = document.getElementById(
        "away_lose-inappropriate-behavior"
      );
      let homeLoseInappropriateBehaviorInClass = document.getElementById(
        "home_lose-inappropriate-behavior-in-class"
      );
      let awayLoseInappropriateBehaviorInClass = document.getElementById(
        "away_lose-inappropriate-behavior-in-class"
      );
      let homeLoseInappropriatePersonal = document.getElementById(
        "home_lose-inappropriate-personal"
      );
      let awayLoseInappropriatePersonal = document.getElementById(
        "away_lose-inappropriate-personal"
      );
      let homeLoseHumiliation = document.getElementById(
        "home_lose-humiliation"
      );
      let awayLoseHumiliation = document.getElementById(
        "away_lose-humiliation"
      );
      let homeLoseSchool = document.getElementById("home_lose-school");
      let awayLoseSchool = document.getElementById("away_lose-school");
      let homeEvery = document.getElementById("home_every");
      let awayEvery = document.getElementById("away_every");

      griffinScore.innerHTML = data.table.rows[0].c[1].f;
      dragonScore.innerHTML = data.table.rows[0].c[2].f;

      personal_help_to_another_G.innerHTML = data.table.rows[1].c[1].f;
      personal_help_to_another_D.innerHTML = data.table.rows[1].c[2].f;
      personal_victory_competition_G.innerHTML = data.table.rows[2].c[1].f;
      personal_victory_competition_D.innerHTML = data.table.rows[2].c[2].f;
      personal_victory_school_competition_G.innerHTML =
        data.table.rows[3].c[1].f;
      personal_victory_school_competition_D.innerHTML =
        data.table.rows[3].c[2].f;
      helping_another_in_learning_G.innerHTML = data.table.rows[4].c[1].f;
      helping_another_in_learning_D.innerHTML = data.table.rows[4].c[2].f;
      teacher_assistance_G.innerHTML = data.table.rows[5].c[1].f;
      teacher_assistance_D.innerHTML = data.table.rows[5].c[2].f;
      aiding_my_home_school_G.innerHTML = data.table.rows[6].c[1].f;
      aiding_my_home_school_D.innerHTML = data.table.rows[6].c[2].f;
      professional_competition_victory_G.innerHTML = data.table.rows[7].c[1].f;
      professional_competition_victory_D.innerHTML = data.table.rows[7].c[2].f;
      social_activity_G.innerHTML = data.table.rows[8].c[1].f;
      social_activity_D.innerHTML = data.table.rows[8].c[2].f;
      team_victory_school_competition_G.innerHTML = data.table.rows[9].c[1].f;
      team_victory_school_competition_D.innerHTML = data.table.rows[9].c[2].f;
      griffin_lose.innerHTML = data.table.rows[11].c[1].f;
      dragon_lose.innerHTML = data.table.rows[11].c[2].f;

      griffin_lose_inappropriate_behavior.innerHTML =
        data.table.rows[12].c[1].f;
      dragon_lose_inappropriate_behavior.innerHTML = data.table.rows[12].c[2].f;
      griffin_lose_inappropriate_behavior_in_class.innerHTML =
        data.table.rows[13].c[1].f;
      dragon_lose_inappropriate_behavior_in_class.innerHTML =
        data.table.rows[13].c[2].f;
      griffin_lose_inappropriate_personal.innerHTML =
        data.table.rows[14].c[1].f;
      dragon_lose_inappropriate_personal.innerHTML = data.table.rows[14].c[2].f;
      griffin_lose_humiliation.innerHTML = data.table.rows[15].c[1].f;
      dragon_lose_humiliation.innerHTML = data.table.rows[15].c[2].f;
      griffin_lose_school.innerHTML = data.table.rows[16].c[1].f;
      dragon_lose_school.innerHTML = data.table.rows[16].c[2].f;
      griffin_every.innerHTML = data.table.rows[17].c[1].f;
      dragon_every.innerHTML = data.table.rows[17].c[2].f;

      homeHelpAnother.style.width = data.table.rows[1].c[3].f;
      awayHelpAnother.style.width = data.table.rows[1].c[4].f;
      homePersonalCompetition.style.width = data.table.rows[2].c[3].f;
      awayPersonalCompetition.style.width = data.table.rows[2].c[4].f;
      homePersonalSchoolCompetition.style.width = data.table.rows[3].c[3].f;
      awayPersonalSchoolCompetition.style.width = data.table.rows[3].c[4].f;
      homeHelpStudy.style.width = data.table.rows[4].c[3].f;
      awayHelpStudy.style.width = data.table.rows[4].c[4].f;
      homeAssistant.style.width = data.table.rows[5].c[3].f;
      awayAssistant.style.width = data.table.rows[5].c[4].f;
      homeHelpSchool.style.width = data.table.rows[6].c[3].f;
      awayHelpSchool.style.width = data.table.rows[6].c[4].f;
      homeVictoryPro.style.width = data.table.rows[7].c[3].f;
      awayVictoryPro.style.width = data.table.rows[7].c[4].f;
      homeSocial.style.width = data.table.rows[8].c[3].f;
      awaySocial.style.width = data.table.rows[8].c[4].f;
      homeVictoryTeam.style.width = data.table.rows[9].c[3].f;
      awayVictoryTeam.style.width = data.table.rows[9].c[4].f;
      homeLose.style.width = data.table.rows[11].c[3].f;
      awayLose.style.width = data.table.rows[11].c[4].f;

      homeLoseInappropriateBehavior.style.width = data.table.rows[12].c[3].f;
      awayLoseInappropriateBehavior.style.width = data.table.rows[12].c[4].f;
      homeLoseInappropriateBehaviorInClass.style.width =
        data.table.rows[13].c[3].f;
      awayLoseInappropriateBehaviorInClass.style.width =
        data.table.rows[13].c[4].f;
      homeLoseInappropriatePersonal.style.width = data.table.rows[14].c[3].f;
      awayLoseInappropriatePersonal.style.width = data.table.rows[14].c[4].f;
      homeLoseHumiliation.style.width = data.table.rows[15].c[3].f;
      awayLoseHumiliation.style.width = data.table.rows[15].c[4].f;

      homeLoseSchool.style.width = data.table.rows[16].c[3].f;
      awayLoseSchool.style.width = data.table.rows[16].c[4].f;
      homeEvery.style.width = data.table.rows[17].c[3].f;
      awayEvery.style.width = data.table.rows[17].c[4].f;
    });
}

fetchData();

setInterval(fetchData, 5000);
