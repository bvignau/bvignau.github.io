import React, { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// components
import TitleParagraph from "../components/TitledParagraph";
import {CardMenu, Prop} from "../components/CardMenu";
// constants
import { APP_TITLE, PAGE_TITLE_HOME } from "../utils/constants";

import { routes } from "../config";

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    cards: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      flexWrap: "wrap"
    },
  })
);

const Home: FC<{}> = (): ReactElement => {
  const classes = useStyles();
  const route_key=[1,2,3]
  const cardProps: Prop[] = [["Publications","../images/goal.png","Articles, conférences, workshop"],["CV","../images/test.jpg","expériences et formation"],["Projets","../images/goal_evolution.png","Travaux de recherche et concours"]]
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_HOME} | {APP_TITLE}
        </title>
      </Helmet>
      <div>
        <TitleParagraph title="Accueil" text="Bonjour et bienvenue sur mon site personnel. Vous trouverez ici mon CV, mes publications ainsi que mes projets de recherche. Bonne visite !"/>
      </div>
      <div className={classes.cards}>
        <CardMenu cards_prop={cardProps} route_key={route_key}/>
      </div>
    </>
  );
};

export default Home;
