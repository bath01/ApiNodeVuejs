<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="breadcrumb-option imgCom">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-6 text-center">
          <div class="breadcrumb__text">
            <h1>Commentaire</h1>
            <div class="breadcrumb__links">
              <a href="./index.php">Acceuil > </a>
              <span>Commentaire</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Commentaire -->
  <section class="contact" style="margin-bottom: 1000px">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-6 col-sm-5">
          <div class="contact__widget">
            <div class="contact__widget__item">
              <h4>Contact Nous</h4>
              <ul>
                <li>(+225) 01-43-39-65-52</li>
                <li>bathdorgeleskouakou@gmail.com</li>
              </ul>
            </div>
            <div class="contact__widget__item">
              <h4>Address</h4>
              <p>Abidjan(Bonou) Yaou <br />Cote d'ivoire</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 col-md-6 col-sm-7">
          <div class="contact__form">
            <h2>Votre Commentaire</h2>
            <div
              class="col-lg-12 mb-4"
              style="color: red; text-align: center; font-weight: bold"
            ></div>
            <form action="">
              <input
                type="text"
                v-model="comment"
                id=""
                placeholder="Commentaire"
              />
              <button v-on:click="addCom()" type="submit">Envoyer Commentaire</button>
            </form>
          </div>
        </div>
        <div class="col-lg-12 offset-lg-1 col-md-6 col-sm-7">
          <div class="contact__form" style="margin-bottom: 400px">
            <h2>Vos Commentaires</h2>
            <!-- Soit on mettra des -->
            <div>
              <div
                class="info"
                :key="index"
                v-for="(inscritCom, index) in inscritCom"
              >
                <h3></h3>
                <p style="font-size: 45px">{{ inscritCom.comment }}</p>
                <hr>
                <!-- <a href="#" class="btn btn-primary">Modifier</a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      inscritCom: null,
      comment:"",
    };
  },
  mounted() {
    this.getAlldata();
  },
  methods: {
    async addCom(){
      let result = await axios.post("http://localhost:3001/commentaire",{
        comment: this.comment
      });
      console.warn(result);
    },

    async getAlldata() {
      axios.get("http://localhost:3001/commentaire").then((response) => {
        this.inscritCom = response.data;
        console.log(this.inscritCom);
      });
    },
  },
};
</script>

<style scoped>
.imgCom {
  background: rgb(201, 100, 18);
}
</style>
