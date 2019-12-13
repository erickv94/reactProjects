
 export const checkBudget = (budget,remaining) => {
    let clase;

    if( (budget / 4) > remaining) {
         clase = 'alert alert-danger';
    } else if( (budget / 2) > remaining) {
        clase = 'alert alert-warning'
    } else {
        clase = 'alert alert alert-success';
    }
    return clase;
} 