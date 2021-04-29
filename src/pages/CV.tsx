import React, { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography} from "@material-ui/core";


// components
import TitledParagraph from "../components/TitledParagraph";
import Experience from "../components/Experience"
// constants
import { APP_TITLE, PAGE_TITLE_CV, PAGE_TITLE_HOME } from "../utils/constants";

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

const CV: FC<{}> = (): ReactElement => {
  const classes = useStyles();
  const uqac_comp=["Cryptographie", "Intelligence Artificelle","Méthodologie de la recherche"]
  const uqac_text="Dans le cadre d'un partenariat avec l'INSA CVL, j'ai effectué un double diplôme au Québec. J'ai pu m'inscrire en maitrise d'informatique volet recherche et avoir une première expérience dans ce domaine. J'ai ainsi travaillé au Laboratoire d'Informatique Formelle (LIF) et j'ai écrit un mémoire de recherche sur l'évolution des réseaux de zombies d'objets connectés. J'ai obtenu la mention \"Excellence\" pour ce mémoire. Pour ce faire, j'ai étudié 28 réseaux de zombies d'objets connectés, connus et découverts entre 2008 et 2019. J'ai créé une taxonomie de 77 taxons, une nouvelle méthode de représentation de leur évolution ainsi qu'un outil de simulation des infections. Ce dernier est disponible sur GitHub."
  
  const insa_comp=["Programation avancée (C, python, JAVA, bash)", "Administration et sécurité des systèmes (Linux & Windows)", "Mathématiques des codes"]
  const insa_text="J'ai étudié durant 4 années à l'INSA CVL afin d'obtenir un diplôme d'ingénieur en Sécurité et Technologies Informatique. J'ai pu y acquérir des notions de programmation poussées au travers de nombreux projets scolaires. J'ai aussi acquis des connaissances théoriques en algèbre, algorithme, informatique formelle, cryptographie et théorie des graphes. Enfin j'ai pu travailler sur des objets connectés, apprendre leur fonctionnement et les enjeux de leur sécurité."
  
  const timesphere_comp=["Sécurité AWS (IAM, CloudTrail, CloudWatch, Security Hub, WAF etc.)", "Infrastructure as Code (CloudFormation; Boto3; CDK)", "Méthodes Agiles"]
  const timesphere_text="J'ai travaillé à mi-temps (puis à temps complet durant les vacances) pour la société Timesphere afin de les aider à développer et à sécuriser leur infrastructure cloud sur AWS. J’ai ainsi pu maitriser le concept « d’Infrastructure as Code » en utilisant les librairies Boto3 et CDK d’AWS. Je m’occupe aussi des tests d’intrusion en interne, de la rédaction de rapports et de recommandations associés."

  const freelance_comp=["Développement Back-end (Django)", "Développement Front-end (Bootstrap, JQuery, AJAX)","Docker"]
  const freelance_text="Afin de financer mes études, j’ai monté une entreprise afin de vendre des sites web. Je les ai développés en utilisant le framework python Django pour le backend et le framework Bootsrap pour le front-end. J’ai développé un site commercial de vente pour une entreprise de boulonnerie ainsi que le site vitrine d’une entreprise de service à la personne. Pour la mise en production j’ai moi-même configuré le serveur en déployant l’application dans une architecture basée sur Docker et Traefik. "

  const domotx_comp=["Développement d'objets connectés","Arduino, ESP, Raspberry","Gestion d'entreprise"]
  const domotx_text="Ce projet correspond à mon stage entrepreneurial de 4e année. Mon objectif était de créer une start up autour de la domotique sécurisée, afin de protéger les données personnelles des utilisateurs. J’ai ainsi effectué l’étude de marché. J’ai pu apprendre à manipuler divers capteurs et moteurs, avec des Arduino et ESP. Cela m’a permis de fabriquer divers prototypes d’objets connectés. J’ai aussi modélisé un protocole de communication chiffrant les données au niveau physique, avant tout envoi sur le réseau. En fin de stage j'ai créé l'entreprise DomotX et j'ai remporté un prix régional au concours TREMPLIN de 2018. Cependant, j'ai dû stopper le projet suite à mon départ au Québec."
  
  const secu_AWS_comp=["Architecture AWS","Gestion des accès IAM","Gestion des logs", "Gestion du chiffrement"]
  const secu_AWS_text="Je donne ce cours à des élèves de dernière année, de l'option Sécurité des Systèmes Ubiquitaires. Le cours portait sur la sécurité Cloud et notamment la mise en place d'infrastructures sécurisées avec AWS. Je leur ai appris à utiliser divers services comme CloudTrail, CloudWatch, IAM, Secret Manager, KMS etc."

  const Admin_Wind_comp=["Active Directory / Azure AD","Powershell","GPO"]
  const Admin_Wind_text="Je donne ce cours en 3e année. Pour ce cours je forme les étudiants à l'utilisation de Windows server 2019, et principalement à l'utilisation du rôle d'Active Directory. Le but étant de leur faire créer un mini réseau d'entreprise. L'aspect sécurité est aussi enseigné avec la mise en place de GPO et une introduction au renforcement de systèmes Windows."
  
  const TD_UQAC_comp=["Automates","Grammaire","Machine de Turing"]
  const TD_UQAC_text="J'ai donné une charge de TD d'informatique formelle lors de mes études de maitrise à l'UQAC. J'aidais les étudiants en leur expliquant et en corrigeant des exercices portant principalement sur les automates, les grammaires et les machines de Turing."
  
  const pole_tech_comp=["Gestion de projet","Gestion de budget","Résolution de conflits"]
  const pole_tech_text="J’ai présidé pendant un an la Fédération des Techniques de l’INSA CVL, qui regroupe l’ensemble des associations à but technique ou scientifique. Mon rôle a été de gérer les différentes demandes de subventions des associations, afin de répartir correctement les budgets. J’ai aussi été membre du conseil d’administration du Bureau Des Elèves, où j’aidais à organiser et à planifier l’ensemble de la vie étudiante de l’école. "
  
  const cuisi_comp=["Gestion de budget","Cuisine","ISO 1664"]
  const cuisi_text="Ma passion pour la cuisine m'a poussé à créer le club de cuisine de l'INSA CVL. Cela m'a permis de réaliser plusieurs projets comme l'organisation des trois repas d'un week-end d'intégration (650 couverts par repas). J'ai aussi pu cuisiner pour une association humanitaire de l'école et j'ai cuisiné un repas qui a été dégusté dans le noir afin de sensibiliser à la cause des personnes malvoyantes."

  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_CV} | {APP_TITLE}
        </title>
      </Helmet>
      <div>
        <TitledParagraph title="Curriculum vitae" text="Sur cette page vous trouverez l'ensemble de mes formations, diplômes et expériences professionnelles et associatives."/>
      </div>
      <div>
        <Experience title="Maitrise d'informatique" place="Université du Québec A Chicoutimi" logo="../images/uqac.png" text={uqac_text} time="2018 - 2020" competences={uqac_comp}/>
      </div>

      <div>
        <Experience title="Ingénieur en Sécurité et Technologies Informatiques" place="INSA Centre Val de Loire" logo="../images/insacvl.png" text={insa_text} time="2014 - 2018" competences={insa_comp}/>
      </div>

      <div>
      <Typography variant="h5" className={classes.title} color="primary">
        Expériences professionnelles
      </Typography>
      </div>

      <div>
        <Experience title="AWS DevSecOps" place="Timesphere" logo="../images/Timesphere.png" text={timesphere_text} time="2020 - 2021" competences={timesphere_comp}/>
      </div>

      <div>
        <Experience title="Developpeur Web Freelance" place="Travailleur Autonome" logo="../images/domotx.png" text={freelance_text} time="2019 - 2020" competences={freelance_comp}/>
      </div>

      <div>
        <Experience title="Etudiant entrepreneur" place="DomotX" logo="../images/domotx.png" text={domotx_text} time="2018 - 2019" competences={domotx_comp}/>
      </div>

      <div>
      <Typography variant="h5" className={classes.title} color="textSecondary">
        Eseignement
      </Typography>
      </div>

      <div>
        <Experience title="Cours : Sécurité AWS" place="INSA CVL" logo="../images/insacvl.png" text={secu_AWS_text} time="2021" competences={secu_AWS_comp}/>
      </div>

      <div>
        <Experience title="Cours : Administration Windows" place="INSA CVL" logo="../images/insacvl.png" text={Admin_Wind_text} time="2021" competences={Admin_Wind_comp}/>
      </div>

      <div>
        <Experience title="TD : Informatique formelle" place="UQAC" logo="../images/uqac.png" text={TD_UQAC_text} time="2019" competences={TD_UQAC_comp}/>
      </div>

      <div>
      <Typography variant="h5" className={classes.title} color="textSecondary">
        Associations
      </Typography>
      </div>

      <div>
        <Experience title="Président" place="Pôle Technique" logo="../images/poleT.jpg" text={pole_tech_text} time="2018" competences={pole_tech_comp}/>
      </div>

      <div>
        <Experience title="Président" place="Cuis'INSA" logo="../images/logo.jpg" text={cuisi_text} time="2015-2018" competences={cuisi_comp}/>
      </div>


    </>
  );
};

export default CV;
