import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({

    pageContainer: {
        width: "100%",
        height: "100vh",
        backgroundPosition: " fixed",
        backgroundSize: "cover",
        overflow: "hidden",
        opacity: "0.8",
    },
    content: {
        marginTop: "35vh"
    },
    contentImage: {
        width: "80px",
        height: "80px",
    },
    useName: {
        color: "#f25436"
    }
}));