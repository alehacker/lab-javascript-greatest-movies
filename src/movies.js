// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   
    const allDirectors = moviesArray.map((movie) => {
        return movie.director;
      });
   

    return allDirectors
   }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }

    return (moviesArray.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))).length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }

     let sum = moviesArray.reduce((sum, movie) => {
        if (!movie.score) {
            return sum + 0
        } else {
            
            return sum + movie.score 
        }
    },0) 

     let average = sum/moviesArray.length
    
     return Number(average.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }
    let newArray = moviesArray.filter((movie) => {
        return movie.genre.includes('Drama')
    })
  
    
    return scoresAverage(newArray)

    //  moviesArray.filter(() => {}).reduce(() => {})
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = [...moviesArray].sort((a, b) => {
        if (a.year === b.year){
            return a.title.localCompare(b.title)
        }
        return a.year - b.year
    
    })
    
   return newArray.slice(0, 20)

}          


    

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return [...moviesArray].sort((a, b) => {
    return a.title.localCompare(b.title)}).map((movie) => {
        return movie.title
    }).slice ( 0, 20)

  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
