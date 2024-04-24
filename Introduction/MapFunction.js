function studentScores (scores){
    return scores.map(score =>{
        if(score >= 100){
            return "A";
        }
        else if(score >= 90){
            return "B";
        }
        else if(score >= 80){
            return "C";
        }
        else if(score >= 70){
            return "D";
        }
        else{
            return "F";
        }

    });

  
}

//console.log(results);
module.exports = studentScores;
