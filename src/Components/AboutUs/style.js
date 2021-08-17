import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    size : {
        width : "100%",
        height : "25vh"
    },
    background : {
        backgroundColor : "#efefef",
        maxWidth : "900px",
        width : "100%",
        margin : "auto",
        marginTop : "20px",
    },
    alignCenter : {
        textAlign : "center",
        fontWeight : "bold",
    },
    buttonAlignment : {
        display : "flex",
        justifyContent : "center",
        marginTop : "20px",
    },
    textWhite : {
        color : "white",
    }
})
export default useStyles;