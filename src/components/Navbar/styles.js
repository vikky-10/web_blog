import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    position: "sticky",
    top: 0,
    margin: "30px -10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 50px",
    // background: "#EEEEEE",

    color: "gray",
  },
  heading: {
    // color: "rgba(0,183,255, 1)",
    color: "rgb(211,211,211)",
    textDecoration: "none",
    fontSize: "30px",
    display: "block",

    marginLeft: "-40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      width: "100px",
    },
  },

  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "300px",
    [theme.breakpoints.down("sm")]: {
      width: "150px",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  icon: {
    color: "gray",
    display: "flex",
    alignItems: "center",
    width: "30px",
    height: "40px",
    marginLeft: "10px",
    marginTop: "5px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-5px",
    },
  },
}));
