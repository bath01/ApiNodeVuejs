<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="breadcrumb-option imgInscrit">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-6 text-center">
            <div class="breadcrumb__text">
              <h1>Les Inscrits</h1>
              <div class="breadcrumb__links">
                <a href="/.index.php" style="text-shadow: black 0.5px 1px"
                  >Acceuil >
                </a>
                <span>Les Inscrits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Les Inscrits -->
    <div class="container" style="margin-bottom: 8%; margin-top: 8%">
      <div class="row pb-4">
        <h1>Liste des inscrits</h1>
        <div
          :key="index"
          v-for="(inscrit, index) in inscrit"
          class="card col-lg-12 col-md-6 text-center"
          style="width: 20rem; margin-left: 10px; margin-bottom: 10px"
        >
          <div class="card-body">
            <h5 class="card-title">Nom : {{ inscrit.name }}</h5>
            <h5 class="card-title">Email: {{ inscrit.email }}</h5>
            <p class="card-text">Contact : {{ inscrit.contact }}</p>
          </div>
          <div style="display: flex; margin-bottom: 10px">
            <router-link :to="{name: 'ContactModifier', params: {id: inscrit.id}}" href="" class="btn btn-primary"
              >Modifier</router-link
            >
            <span class="m-3"></span>
          </div>
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
      inscrit: null,
    };
  },
  mounted() {
    this.getAlldata();
  },
  methods: {
    async getAlldata() {
      axios.get("http://localhost:3001/").then((response) => {
        this.inscrit = response.data;
        console.log(this.inscrit);
      });
    },
  },
};
</script>

<style scoped>
.imgInscrit {
  background: rgb(201, 100, 18);
}
</style>
