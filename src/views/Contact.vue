<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="breadcrumb-option imgCont">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-6 text-center">
          <div class="breadcrumb__text">
            <h1>Contact</h1>
            <div class="breadcrumb__links">
              <a href="./index.php">Acceuil > </a>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact Section Begin -->
  <section class="contact">
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
            <div class="contact__widget__time">
              <h4 style="color: black; font-weight: bold">Notre Temps</h4>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="contact__widget__time__item">
                    <ul>
                      <li>Lundi - Vendredi</li>
                      <li><span>8 h - 21 h</span></li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="contact__widget__time__item">
                    <ul>
                      <li>Samedi - Dimanche</li>
                      <li><span>8 h - 12 h</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 col-md-6 col-sm-7">
          <div class="contact__form">
            <h2>Contact</h2>
            <form action="">
              <input v-model="name" type="text" placeholder="Your Name" />
              <input type="email" v-model="email" placeholder="Email" />
              <input type="text" v-model="contact" placeholder="Contact" />
              <button v-on:click="addInscris()" type="submit">Envoyer</button>
            </form>
          </div>
        </div>
        <div
          style="
            text-align: center;
            margin-bottom: 10px;
            margin-top: 10px;
            font-size: 20px;
          "
        >
          <b style="padding-bottom: 10px">Donnez votre avis svp</b><br /><a
            href="/Commentaire"
            class="btn btn-primary"
            >Commentaire</a
          >
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
      name: "",
      email: "",
      contact: "",
    };
  },
  // méthode pour enregistrer
  methods: {
    async addInscris() {
      let result = await axios.post("http://localhost:3001", {
        name: this.name,
        email: this.email,
        contact: this.contact,
      });
      console.warn(result);
    },
  },
};
</script>

<style scoped>
.imgCont {
  background: rgb(201, 100, 18);
}
</style>
