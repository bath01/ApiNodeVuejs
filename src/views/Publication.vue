<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="breadcrumb-option imgPub">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-6 text-center">
                    <div class="breadcrumb__text">
                        <h1>Les publications</h1>
                        <div class="breadcrumb__links">
                            <a href="/accueil">Acceuil > </a>
                            <span>Les publications</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container pb-5">
        <h1 style="font-weight: bold; text-decoration: underline;">
            Voici Les publications données par tous Merci de les regarder afin de découvrir d'autre exercice !
        </h1>
        <div class="row" :key="index"
          v-for="(publication, index) in publication">
            <div class="col-lg-12">
                <!-- espace pour les elements a afficher -->
                <h3>{{publication.typeExPub}}</h3>
                
                <p>
                    {{publication.lecritPub}}
                </p>
            </div>
        </div>
        <!-- <a href="#" class="btn btn-primary">Ajouter</a>
        <a href="#" class="btn btn-primary">Supprimer</a> -->

    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      publication: null,
    };
  },
  mounted() {
    this.getAlldata();
  },
  methods: {
    async getAlldata() {
      axios.get("http://localhost:3001/publication").then((response) => {
        this.publication = response.data;
        console.log(this.publication);
      });
    },
  },
};
</script>



<style scoped>
.imgPub{
    background: rgb(201, 100, 18);
}
</style>