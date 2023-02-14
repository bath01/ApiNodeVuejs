import { createRouter, createWebHistory } from "vue-router";
import Contact from "@/views/Contact.vue";
import Publication from "@/views/Publication.vue";
import Commentaire from "@/views/Commentaire.vue";
import Inscrit from "@/views/Inscrit.vue";
import Projet from "@/views/Projet.vue";
import ContactModifier from "@/views/ContactModifier.vue";
import entete from "../components/entete.vue";
const routes = [
  {
    name: "Contact",
    path: "/Contact",
    component: Contact,
  },
  {
    name: "Publication",
    path: "/Publication",
    component: Publication,
  },
  {
    name: "entete",
    path: "/accueil",
    component: entete,
  },
  {
    name: "Commentaire",
    path: "/Commentaire",
    component: Commentaire,
  },
  {
    name: "Inscrit",
    path: "/Inscrit",
    component: Inscrit,
  },
  {
    name: "Projet",
    path: "/Projet",
    component: Projet,
  },
  {
    name: "ContactModifier",
    path: "/ContactModifier/:id",
    component: ContactModifier,
  },
];

// eslint-disable-next-line no-unused-vars
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
