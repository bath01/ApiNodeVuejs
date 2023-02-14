<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="breadcrumb-option imgProjet">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-6 text-center">
          <div class="breadcrumb__text">
            <h1>Vos Projets</h1>
            <div class="breadcrumb__links">
              <a href="./index.php" style="text-shadow: black 0.5px 1px"
                >Acceuil >
              </a>
              <span>Vos Projets</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container pt-5 pb-5" style="margin-bottom: 400px">
    <div class="row">
      <h2 style="font-weight: bold">Vos Projets</h2>
      <p style="font-size: 25px">
        <em
          >Donnez nous simplement <b>le titre</b> et <b>la description </b> du
          projet sur lequel vous avez travaillez etant encore Etudiant ,
          Veuillez rempli le formulaire ci-dessous Svp!</em
        >
      </p>
      <div class="contact__form">
        <form action="">
          <input
          v-model="titreProjet"
            type="text"
            placeholder="Le titre (ex: Conception d'une App web sur le Cacao)"
          />
          <textarea
            v-model="descripProjet"
            id=""
            cols="30"
            rows="10"
            placeholder="Description concernant votre projet..."
          ></textarea>
          <button v-on:click="addProjet()" type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  </div>

  <div class="container pb-5">
    <div class="row">
      <div class="col-lg-12">
        <h1 style="font-weight: bold; text-decoration: underline">
          Voici Les projets données par tous Merci de les regarder afin de
          découvrir d'autre projet !
        </h1>

        <!-- espace pour les elements a afficher -->
        <div :key="index" v-for="(inscritProjet, index) in inscritProjet">
          <h2>
            Le Projet:
            <b style="font-size: 40px">{{ inscritProjet.titreProjet }}</b>
          </h2>
          <div>
            <h3 style="font-weight: 600; text-decoration: underline">
              La Desciption
            </h3>
            <p>
              {{ inscritProjet.descripProjet }}
            </p>
          </div>
          <a href="#" class="btn btn-primary m-5">Ajouter</a>
          <a href="#" class="btn btn-primary">Modifier</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      inscritProjet: null,
      titreProjet: "",
      descripProjet: "",
    };
  },
  mounted() {
    this.getAlldata();
  },
  methods: {
    async addProjet() {
      let result = await axios.post("http://localhost:3001/projet", {
        titreProjet: this.titreProjet,
        descripProjet:this.descripProjet
      });
      console.warn(result);
    },

    async getAlldata() {
      axios.get("http://localhost:3001/projet").then((response) => {
        this.inscritProjet = response.data;
        console.log(this.inscritProjet);
      });
    },
  },
};
</script>
<style scoped>
.imgProjet {
  background: rgb(201, 100, 18);
}
</style>
