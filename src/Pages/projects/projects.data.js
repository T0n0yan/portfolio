import {useTranslation} from "react-i18next";
import {ProjectsImagesData} from "../../assets/images/Projects Images/projectsImagesData";


export const ProjectsData = [{
  id         : 1, name: "Zay Shop",
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
  description: "zey_shop_description",
  link       : "https://zayshop.vercel.app/",
}, {
  id             : 2, name: "Admin", img: [{
    id: 6, img: ProjectsImagesData.admin_login,
  }, {
    id: 7, img: ProjectsImagesData.admin_home,
  }, {
    id: 8, img: ProjectsImagesData.admin_registration,
  }, {
    id: 9, img: ProjectsImagesData.admin_product,
  }, {
    id: 10, img: ProjectsImagesData.admin_crud,
  }], description: "admin_description", link: "https://admin-alpha-six.vercel.app/login",
  
}, {
  id             : 3, name: "Todo", img: [{
    id: 11, img: ProjectsImagesData.todo_main,
  }], description: "todo_description", link: "https://todoo-tau.vercel.app/",
  
}, {
  id         : 4, name: "Simple House",
  img        : [{
    id: 12, img: ProjectsImagesData.s_house1,
  }, {
    id: 13, img: ProjectsImagesData.s_house2,
  }, {
    id: 14, img: ProjectsImagesData.s_house3,
  }, {
    id: 15, img: ProjectsImagesData.s_house4,
  }],
  description: "s_house_description",
  link       : "https://simple-house.vercel.app/",
  
}];