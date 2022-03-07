const privateVariable = 34

export const Color = '#bababa'
export function compute(a, b) {
    return a+b
}

export default {
    log() {
        console.log(privateVariable)
    }
}

console.log(compute(1, 2))