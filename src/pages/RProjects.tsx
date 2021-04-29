import React, { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography} from "@material-ui/core";


// components
import TitledParagraph from "../components/TitledParagraph";
import Experience from "../components/Experience"
import YoutubeEmbed from "../components/YoutubeEmbed"
// constants
import { APP_TITLE, PAGE_TITLE_CV, PAGE_TITLE_HOME, PAGE_TITLE_RPROJECTS } from "../utils/constants";

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      textTransform: "uppercase",
      textAlign: "center",
      alignItems: "center",
      marginBottom: 25,
    },
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

const Rproject: FC<{}> = (): ReactElement => {
  const classes = useStyles();
  
  const evol_bot_comp=["Programmation Python","Simulation","Rédaction d'articles scientifiques"]
  const evol_bot_text="Après avoir défini une taxonomie pour les réseaux de zombies, j'ai commencé à développer un outil de simulation d'infection. Le but étant d'étudier les impacts de chaque fonctionnalité sur la puissance du botnet. Nous nous sommes d'abord concentrés sur les méthodes de scans, en comparant le scan séquentiel et le scan aléatoire. Nous avons aussi étudié le phénomène de concurrence entre les botnets. Ce projet est toujours en cours de développement par le LIF et, malgré mon départ du laboratoire, je continue de superviser le projet."
  
  const firmware_anal_comp=["Programation C","Système Linux","Ingéniérie inverse"]
  const firmware_anal_text="La majorité des objets infectés par des réseaux de zombies sont des routeurs et caméras connectés. De manière générale, ces objets sont faiblement sécurisés, avec des configurations par défaut extrêmement faible. Afin d'étudier la présence de ces failles dans divers objets connectés, nous avons mis en place un projet de développement d'un environnement de test virtualisé ainsi qu’un logiciel d’analyse de vulnérabilité automatisé."
  
  const CSAW2018_comp=["Ingéniérie inverse","Programation C et C++","Bluetooth"]
  const CSAW2018_text="Ce projet fait partie de la compétition CSAW 2018, organisée par l’université de New York. L’objectif est de développer de nouvelles méthodes afin de pouvoir extraire des données sensibles d’un lieu sécurisé, uniquement à l’aide de l’ampoule. Pour ce faire, nous avons imaginé et développé plusieurs solutions basées sur l’utilisation et la reconnaissance de flash lumineux. Nous avons été qualifiés pour la finale américaine et avons présenté nos travaux à New York."

  const CSAW2017_comp=["Programmation Python","Analyse comportementale","Virtualisation"]
  const CSAW2017_text="Ce projet fait partie de la compétition CSAW 2017, organisée par l’ESISAR (Valences). L’objectif était de pouvoir détecter des attaques similaires à STUXNET au sein de site industriel. En conséquence, nous avons développé une solution basée sur la virtualisation des PLC sur Raspberry pi. Je me suis occupé de développer un système d’analyse comportementale des PLC avec un système d’élection dynamique du comportement à suivre. Ce système permet de rapidement détecter l’apparition de comportement déviant des PLC. Nous avons terminé à la seconde place lors de la finale européenne."

  const FeteScience_comp=["Magnétisme","expérimentation"]
  const FeteScience_text="En classe de 4e, j'ai eu la chance d'avoir un professeur de physique-chimie qui organisait des ateliers scientifiques en plus des cours. Dans le cadre de ces ateliers, nous avons développé un 'Magnéto Glisseur', version miniaturisée et moins complexe d'un train à lévitation magnétique. Nous avons participé au concours 'Faites de la science-CNES' de 2008 et avons remporté le prix départemental, puis le prix de l'innovation lors de la finale nationale. Deux vidéos du projet sont disponibles. Sur la première, j'explique la première version du projet lors de la finale du concours. Sur la seconde, toute l'équipe du projet participe aux explications des expériences réalisées pour améliorer le projet. Soyez indulgents, je n'avais que 12 ans ;p"
  
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_RPROJECTS} | {APP_TITLE}
        </title>
      </Helmet>
      <div>
        <TitledParagraph title="Projets de recherches et concours scientifiques" text="Sur cette page, vous trouverez l'ensemble de mes projets de recherches, ainsi que mes participations à divers concours scientifiques. Voici ma page " page="GitHub" lien="https://github.com/bvignau"/>
      </div>
      <div>
        <Experience title="Outil de simulation d'infection de réseaux de zombies : 'The Botnet Game'" place="Laboratoire d'Informatique Fondamentale" logo="../images/lif.webp" text={evol_bot_text} time="2019 - En cours" competences={evol_bot_comp}/>
      </div>

      <div>
        <Experience title="Analyse de Firmware IoT" place="Laboratoire d'Informatique Fondamentale" logo="../images/lif.webp" text={firmware_anal_text} time="2021" competences={firmware_anal_comp}/>
      </div>

      <div>
      <Typography variant="h5" className={classes.title} color="primary">
        Concours scientifiques
      </Typography>
      </div>

      <div>
        <Experience title="CSAW 2018 : Exfiltration de données via ampoule connectées" place="UQAC" logo="../images/uqac.png" text={CSAW2018_text} time="2018" competences={CSAW2018_comp}/>
      </div>

      <div>
        <Experience title="CSAW 2017 : Détection d'attaques sur PLC" place="INSA CVL" logo="../images/insacvl.png" text={CSAW2017_text} time="2017" competences={CSAW2017_comp}/>
      </div>

      <div>
        <Experience title="Mangéto-Glisseur" place="Collège de Saint Mandrier" logo="../images/blason.png" text={FeteScience_text} time="2008" competences={FeteScience_comp}/>
      </div>
      <div>
        <YoutubeEmbed embedId="www.youtube.com/embed/1_qVgUTM56w"/>
      </div>
      <div>
        <YoutubeEmbed embedId="www.dailymotion.com/embed/video/xhl75f"/>
      </div>
    </>
  );
};

export default Rproject;