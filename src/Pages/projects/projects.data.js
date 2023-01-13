import {useTranslation} from "react-i18next";
import {ProjectsImagesData} from "../../assets/images/Projects Images/projectsImagesData";


export const ProjectsData = [
  {
    id         : 1,
    name       : "Zay Shop",
    img        : [{
      id: 1, img: ProjectsImagesData.zayshop_home,
    }, {
      id: 2, img: ProjectsImagesData.zayshop_about,
    }, {
      id: 3, img: ProjectsImagesData.zayshop_footer,
    }, {
      id: 4, img: ProjectsImagesData.zayshop_shop,
    }, {
      id: 5, img: ProjectsImagesData.zayshop_product2,
    }],
    description: "about_me",
    link       : "",
  },
  {
    id         : 2,
    name       : "Admin",
    img        : [{
      id: 6, img: ProjectsImagesData.admin_login,
    }, {
      id: 7, img: ProjectsImagesData.admin_home,
    }, {
      id: 8, img: ProjectsImagesData.admin_registration,
    }, {
      id: 9, img: ProjectsImagesData.admin_product,
    }, {
      id: 10, img: ProjectsImagesData.admin_crud,
    }],
    description: 'about_me',
    
    link: "",
    
  }, {
    id         : 3,
    name       : "Todo",
    img        : [{
      id: 11, img: ProjectsImagesData.todo_main,
    }],
    description: "about_me",
    link       : "",
    
  },

];