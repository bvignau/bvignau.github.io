// icons
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import PersonIcon from '@material-ui/icons/Person';
import GitHubIcon from '@material-ui/icons/GitHub';


// components
import Home from '../pages/Home';
import Papers from '../pages/Papers';
import RProjects from '../pages/RProjects';
import CV from '../pages/CV';




// interface
import RouteItem from '../model/RouteItem.model';

// define app routes
export const routes: Array<RouteItem> = [
    {
        key: "router-home",
        title: "Accueil",
        tooltip: "Home",
        path: "/",
        enabled: true,
        component: Home,
        icon: HomeIcon,
        appendDivider: true
    },
    {
        key: "router-papers",
        title: "Publications",
        tooltip: "Papers",
        path: "/papers",
        enabled: true,
        component: Papers,
        icon: LibraryBooks
    },
    {
        key: "router-cv",
        title: "CV",
        tooltip: "CV",
        path: "/CV",
        enabled: true,
        component: CV,
        icon: PersonIcon
    },
    {
        key: "router-rproject",
        title: "Projets de recherche",
        tooltip: "Rprojects",
        path: "/Rprojects",
        enabled: true,
        component: RProjects,
        icon: GitHubIcon
    },
]