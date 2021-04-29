import React, { FC, ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, Icon} from "@material-ui/core";
import { findByLabelText } from "@testing-library/dom";
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      textTransform: "uppercase",
      textAlign: "center",
      alignItems: "center"
    },
    text: {
      textAlign: "justify",
      display: "flex",
      flexDirection: "row",
    },
    textp: {
      textAlign: "justify",
      display: "flex",
      flexDirection: "row",
    },
    image: {
      height: 75,
      marginLeft: 10
    },
    hr:{
      marginTop: 20,
      marginBottom: 20,
      width: "40%"
    },
    icon: {
      marginRight: 5,
    },
    splitDiv: {
      //width:"50%",
      display: "flex",
      flexFlow: "row wrap",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    item: {
      flexBasis: "45%",
      alignSelf: "baseline",
    }
  })
);

const Experience: FC<{ title: string , place: string,text : string, logo: string, time: string, competences: string[]}> = ({ title, place , text, logo, time, competences}): ReactElement => {
  const classes = useStyles()
  return (
    <>
    <Typography variant="h5" className={classes.title} color="secondary">
      {title} | {place} | {time} | <img src={logo} className={classes.image}/>
    </Typography>
    <div className={classes.splitDiv}>
      <div className={classes.item}>
      <Typography variant="h6" className={classes.text} color="textSecondary">
      Description :
      </Typography>
      <Typography variant="body1" paragraph className={classes.textp}>
        {text}
      </Typography>
    </div>
      <div className={classes.item}>
    <Typography variant="h6" className={classes.text} color="textSecondary">
      Compétences associées :
    </Typography>
    {competences.map((value, key) => {
          return (
            <Typography variant="body1" paragraph className={classes.text}>
            <CodeIcon className={classes.icon}/> {value}
            </Typography>
          )
          }
      )}
      </div>
    </div>
    <hr className={classes.hr}>
    </hr>
    </>
  )
}

export default Experience;
