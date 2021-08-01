export default function timeToString(time) {
    let y = time
    if (time < 10) {
        y = "0" + time
    }
    return y.toString()
}