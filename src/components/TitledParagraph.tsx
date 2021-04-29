import React, { FC, ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textTransform: "uppercase",
      textAlign: "center"
    },
    text: {
      textAlign: "center"
    },
    hr:{
      marginTop: 20,
      marginBottom: 20,
      width: "40%"
    }
  })
);

const TitledParagraph: FC<{ title: string , text : string, page?: string, lien?: string}> = ({ title , text, page, lien}): ReactElement => {
  const classes = useStyles();
  return (
    <>
    <Typography variant="h5" className={classes.title} color="primary">
      {title}
    </Typography>
    
    <Typography variant="body1" paragraph className={classes.text}>
      {text}
      <a href={lien}>{page}</a>
    </Typography>
    <hr className={classes.hr}>
    </hr>
    </>
  );
};

export default TitledParagraph;
