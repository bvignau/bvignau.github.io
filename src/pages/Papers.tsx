import React, { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";



// components
import PageTitle from "../components/PageTitle";
import Citation from "../components/Citation";
import TitledParagraph from "../components/TitledParagraph";



// constants
import { APP_TITLE, PAGE_TITLE_PAPERS } from "../utils/constants";


// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  })
);

const Papers: FC<{}> = (): ReactElement => {
  const classes = useStyles();
  const paper1 = {title:"10 years of IoT malware: A feature-based taxonomy",
                  authors:"B Vignau, R Khoury, S Hallé",
                  editor:"2019 IEEE 19th International Conference on Software Quality, Reliability and Security Companion (QRS-C)",
                  year:"2019/7/22",
                  abstract:"Over the past decade, there has been a rapidly growing interest in IoT-connected devices. But as is usually the case with computer systems and networks, malicious individuals soon noticed that these objects could be exploited for criminal purposes. The problem is particularly salient since the firmware used in many Internet connected devices were developed without taking into consideration the expertise and best security practices gained over the past several years by programmers in other areas. Multiple attacks on IoT devices took place therefore over the last decade, culminating with the largest ever recorded DDoS attack, the Mirai botnet, which took advantage of the weaknesses in the security of the IoT. In this survey, we seek to shed light on the evolution of the IoT malware. We compare the characteristic features of 16 of the most widespread IoT malware programs of the last decade and propose a novel methodology for classifying malware based on its behavioral features. Our study also highlights the common practice of feature reuse across multiple malware programs."}
  
  const paper2 = {title: "La sécurité dans l’Internet des objets: des configurations par défaut aux dénis de services",
                  authors: "Benjamin Vignau",
                  editor: "Université du Québec à Chicoutimi",
                  year: "2020",
                  abstract:"Notre projet de recherche consiste à étudier divers aspects de la sécurité des objets connectés (ou IoT), et plus particulièrement leur exploitation de masse. En effet, ces dernières années, nous avons constaté la multiplication des attaques de déni de services provoqués par des réseaux de zombies d’objets connectés. Un réseau de zombies est un ensemble d’objets connectés, serveurs ou ordinateurs infectés et contrôlés à distance par un programme malicieux. Nous souhaitions donc comprendre les mécanismes permettant à des attaquants d’infecter des centaines de milliers d’objets connectés pour ensuite les coordonner et provoquer de grandes attaques de déni de services. Pour ce faire, nous avons d’abord étudié les objets connectés en général, les principales applications et les principaux mécanismes de sécurité. Nous avons analysé en détail deux des protocoles de communication les plus utilisés dans le monde des objets connectés. Ensuite, nous nous sommes concentrés sur les objets assurant le pont entre le réseau Internet et le réseau local d’objets connectés. En effet, ce sont ces objets directement connectés à Internet qui se font massivement exploiter pour former des réseaux de zombies. Nous avons étudié divers réseaux de zombies afin de lister et comprendre chacune de leurs fonctionnalités. Les buts ici sont multiples : créer une taxonomie pour réseaux de zombies d’objets connectés et dans un second temps, essayer de comprendre l’évolution de ces réseaux en étudiant l’évolution de leur fonctionnalité. Ainsi, nous avons mis en place une taxonomie comportant 46 taxons représentant chacun une fonctionnalité. Ces taxons sont classés en plusieurs familles, basées sur le cycle de vie des réseaux de zombies. Notre taxonomie comporte 8 taxons spécifiques aux réseaux de zombies d’objets connectés. Grâce à cette taxonomie, nous avons pu mettre en place une nouvelle représentation de l’évolution de ces réseaux de zombies. Nous avons dessiné les graphes de propagation de fonctionnalités permettant de montrer à quel moment est apparue une fonctionnalité, quels sont les réseaux qui l’implémentent, etc. Enfin, pour mieux comprendre pourquoi, certaines fonctionnalités disparaissaient au profit d’autres, nous avons supposé que ces dernières devaient être plus efficaces (permettre à un réseau de zombies d’infecter plus d’objets dans un temps plus court). Nous supposons que d’autres facteurs peuvent intervenir, comme la difficulté d’implémentation de la fonctionnalité. Cependant, afin de tester notre hypothèse principale, nous avons développé un modèle de simulation d’infection. Ce modèle est inspiré par les modèles épidémiologiques utilisés en médecine afin de modéliser les propagations des maladies infectieuses au sein des populations. Cependant, au lieu d’utiliser un ensemble d’équations différentielles, nous avons développé un programme Python sous forme d’un jeu tour par tour. Cette implémentation permet d’abstraire plusieurs paramètres, comme le temps par exemple. Grâce à ce modèle, nous avons pu montrer l’efficacité d’une méthode de recherche de victime aléatoire par rapport à une méthode séquentielle. Cette large supériorité d’efficacité explique pourquoi la méthode de scan aléatoire a très vite remplacé la méthode de scan séquentielle. Nous pensons que ce modèle pourra servir plus tard, afin d’imaginer de nouvelles fonctionnalités, les tester et ainsi prévoir une partie des fonctionnalités qui apparaitront au sein des réseaux de zombies."}
  
  const paper3 = {title: "An analysis of the use of CVEs by IoT malware",
  authors: "Raphaël Khoury, Benjamin Vignau, Sylvain Hallé, Abdelwahab Hamou-Lhadj, Asma Razgallah",
  editor: "Foundations and Practice of Security: 13th International Symposium, FPS 2020, Montreal, QC, Canada, December 1–3, 2020, Revised Selected Papers 13",
  year: "2021",
  abstract:"In recent years, IoT malware has become a significant threat to the IoT infrastructure, to the point where it even hinders the deployment of this promising technology. A distinctive aspect of this threat is its reliance on vulnerabilities as an infection vector. Many of these vulnerabilities are CVEs (Common Vulnerability Enumeration) selected from the National Vulnerability Database (NVD). In this study, we investigate the use of CVEs by IoT malware, with the ultimate aim of predicting which CVEs are more likely to be targeted by malware developers. Our results show that the CVEs exploited by IoT malware developers are sufficiently distinguished from those CVEs that IoT developers refrain from using to permit effective automated prediction. We detail these differences, develop other observations about the use of vulnerabilities by IoT malware and compile data on this topic that may be useful to security researchers."}
  
  const paper4 = {title: "The evolution of IoT Malwares, from 2008 to 2019: Survey, taxonomy, process simulator and perspectives",
  authors: "Benjamin Vignau, Raphaël Khoury, Sylvain Hallé, Abdelwahab Hamou-Lhadj",
  editor: "Journal of Systems Architecture",
  year: "2021/4/20",
  abstract:"The past decade has seen a rapidly growing interest in IoT-connected devices. But as is usually the case with computer systems and networks, malicious individuals soon realized that these objects could be exploited for criminal purposes. The problem is particularly salient since the firmware used in many Internet connected devices was developed without taking into consideration the expertise and best security practices gained over the past several years by programmers in other areas. Consequently, multiple attacks on IoT devices took place over the last decade, culminating in the largest ever recorded DDoS attack, the Mirai botnet, which took advantage of weaknesses in the security of the IoT. In this survey, we seek to shed light on the evolution of the IoT malware. We compare the characteristic features of 28 of the most widespread IoT malware programs of the last decade and propose a novel methodology for classifying malware based on its behavioral features. Our study also highlights the common practice of feature reuse across multiple malware programs."}
  
  const papersA=[paper4,paper3,paper2,paper1]
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_PAPERS} | {APP_TITLE}
        </title>
      </Helmet>
      <div>
        <TitledParagraph title="Publications" text="Sur cette page vous trouverez l'ensemble de mes publications. Si vous souhaitez le manuscrit d'un de mes papiers, vous le trouverez sur ma page " page="Scholar" lien=" https://scholar.google.com/citations?user=a6tP_aQAAAAJ&hl=fr"/>
      </div>
      <div>
      {papersA.map((value, key) => {
          return (
            <Citation title={value['title']} text={value['abstract']} authors={value['authors']} year={value['year']} editor={value['editor']}>  </Citation>
          )
          }
      )}
        
      </div>

    </>
  );
};

export default Papers;
