<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="breadcrumb-option imgCont">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-6 text-center">
          <div class="breadcrumb__text">
            <h1>Modifiaction</h1>
            <div class="breadcrumb__links">
              <a href="./index.php">Acceuil > </a>
              <span>Modifiaction</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact Section Begin -->
  <section class="contact" style="margin-bottom: 250px">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-1 col-md-6 col-sm-7">
          <div class="contact__form">
            <h2>Modifiaction</h2>
            <form @submit.prevent="updateOneInscris">
              <input v-model="name" type="text" placeholder="Your Name" />
              <input type="email" v-model="email" placeholder="Email" />
              <input type="text" v-model="contact" placeholder="Contact" />
              <button type="submit">Envoyer</button>
            </form>
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
      name: "",
      email: "",
      contact: "",
      updateInscris:[],
    };
  },
  mounted() {
        axios.get('http://localhost:3001/one/' + this.$route.params.id)
            .then(reponse => {
                console.log(reponse.data);
                this.name = reponse.data[0].name
                this.email = reponse.data[0].email
                this.contact = reponse.data[0].contact
            })
    },
  // méthode pour enregistrer
     methods: {
        async updateOneInscris(){
            const toSend ={
                name: this.name,
                email: this.email,
                contact: this.contact,
            }

         await axios.put('http://localhost:3001/' + this.$route.params.id, toSend).then((res) => {     
            console.log(res)
                window.location.href='/Inscrit'
        }).catch((err) => {
            console.log(err)
        });
        },
    }
};
</script>

<style scoped>
.imgCont {
  background: rgb(201, 100, 18);
}
</style>
