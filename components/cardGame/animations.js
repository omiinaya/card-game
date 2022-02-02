import { makeStyles } from '@material-ui/core/styles';
const rotationRange = 50;
const offsetRange = 80;

const getHue = () => {
    let total = 10
    for (var i = 0; i < total.length; i++) {
        return (i / total) * -360
    }
}

const getRotation = () => {
    let total = 10
    for (var i = 0; i < total.length; i++) {
        return ((i - (total - 1) / 2) / (total - 2)) * rotationRange
    }
}
//$offset: abs(calc(($i - ($total - 1) / 2) / ($total - 2)) * $offsetRange);

const getOffset = () => {
    let total = 10
    for (var i = 0; i < total.length; i++) {
        return Math.abs((i - (total - 1) / 2) / (total - 2)) * offsetRange
    }
}

const useStyles = makeStyles((theme) => {

    return ({
        Face: {
            border: `3px dotted ${test()}`
        },
    })
}
)

export default useStyles