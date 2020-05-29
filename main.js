function add (a, b) {
    return a + b
}
function multiply (factor, times) {
    let product = factor
    for (let counter = times; counter >= 2; counter += -1) {
        product = add(product, factor)
    }
    return product
}
function power (x, n) {
    let excalibur = x
    for (let counter = n; counter >= 2; counter += -1) {
        excalibur = multiply(excalibur, x)
    }
    return excalibur
}
function factorial (z) {
    let answer = z
    for (let counter = 0; counter >=0; counter +=1) {
        
    }
    return answer
}