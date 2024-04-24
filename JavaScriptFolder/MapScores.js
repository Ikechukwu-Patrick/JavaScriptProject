function mapScores(scores){
    let newScores = scores.map(score =>{
        return score + 5;
    })
    return newScores;
}
console.log(mapScores([85,92,78,88,95]));
module.exports = (mapScores);