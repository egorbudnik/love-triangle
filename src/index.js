/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let a;
    let b;
    let c;
    let d = 0;
    for (var i = 0; i < preferences.length; i++) {
        a = preferences[i];
        b = preferences[a-1];
        c = preferences[b-1];
        if (a != i+1 && i == c-1) {
            d++;           
        }  
      }
    return d/3;
};



