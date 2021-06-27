let studentHogwarts = function() {

    let privateScore = 0;
    let name = null;

    function changeScoreBy(points) {
        privateScore += points
    }

    return {
        setName: function (newName) {
            name = newName;
        },
        rewardStudent: function () {
            changeScoreBy(1);
        },
        penalizeStudent: function () {
            changeScoreBy(-1)
        },
        getScore: function () {
            return name + ': ' + privateScore
        }
    }
};

let harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.getScore();

let draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.getScore();

// How test
harry.getScore();
draco.getScore();