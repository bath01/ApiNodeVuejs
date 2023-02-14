<template>
  <div>
    <nav class="navbar navbar-light fixed-top" style="background: #f16e00">
      <div class="container-fluid">
        <a
          style="font-size: 30px; font-weight: bold; text-decoration: underline"
          class="navbar-brand"
          href="#"
          >L'<img
            src="./assets/image/graduation.png"
            alt=""
            style="width: 50px"
          />Ecole</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5
              class="offcanvas-title"
              id="offcanvasNavbarLabel"
              style="
                font-weight: bold;
                color: black;
                text-decoration: underline;
              "
            >
              L'<img
                src="./assets/image/graduation.png"
                style="width: 50px"
              />Ecole
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <router-link
                  to="/accueil"
                  class="nav-link active"
                  style="color: black; font-weight: 600"
                  aria-current="page"
                  href="./index.php"
                  >Acceuil</router-link
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  style="color: black; font-weight: 600"
                  href="./devoir.php"
                  >Devoir</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  style="color: black; font-weight: 600"
                  href="./interro.php"
                  >Interrogation</a
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  style="font-weight: bold; text-decoration: underline"
                  href="/programWeb.php"
                  id="offcanvasNavbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Programmation Web
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="offcanvasNavbarDropdown"
                >
                  <li>
                    <a
                      class="dropdown-item"
                      style="color: #ff7900; font-weight: 600"
                      href="./htCss.php"
                      >Html&Css</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      style="color: #ff7900; font-weight: 600"
                      href="./js.php"
                      >JavaScript</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      style="color: #ff7900; font-weight: 600"
                      href="./Php.php"
                      >Php</a
                    >
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      style="color: #ff7900; font-weight: 600"
                      href="./reseau.php"
                      >Réseau</a
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  style="font-weight: bold; text-decoration: underline"
                  href="/program.php"
                  id="offcanvasNavbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Programmation
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="offcanvasNavbarDropdown"
                >
                  <li>
                    <a
                      class="dropdown-item"
                      style="color: #ff7900; font-weight: 600"
                      href="./java.php"
                      >Java</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      style="color: #ff7900; font-weight: 600"
                      href="./csharp.php"
                      >C#</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      style="color: #ff7900; font-weight: 600"
                      href="./c.php"
                      >Langage C</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      style="color: #ff7900; font-weight: 600"
                      href="./python.php"
                      >Python</a
                    >
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      style="color: #ff7900; font-weight: 600"
                      href="./Algo.php"
                      >Algorithme</a
                    >
                  </li>
                </ul>
              </li>
              <router-link
                to="Projet"
                class="nav-link"
                style="color: black; font-weight: 600"
                href=""
                >Projet</router-link
              >
              <li class="nav-item">
                <router-link
                  to="/Commentaire"
                  class="nav-link"
                  style="color: black; font-weight: 600"
                  href=""
                  >Commentaire</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  to="/Inscrit"
                  class="nav-link"
                  style="color: black; font-weight: 600"
                  href=""
                  >Les Inscrits</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  to="/Publication"
                  class="nav-link"
                  style="color: black; font-weight: 600"
                  href="./publication.php"
                  >Les publications</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  to="/Contact"
                  class="nav-link"
                  style="color: black; font-weight: 600"
                  href="./contact.php"
                  >Contact</router-link
                >
              </li>
              <hr />
              <li class="nav-item">
                <div class="footer__social">
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                  <a href="#"><i class="fa fa-youtube-play"></i></a>
                </div>
              </li>
            </ul>
            <!-- <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form> -->
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
    <Piedpage />
  </div>
</template>

<script>
// import Entete from "./components/entete.vue";
import Piedpage from "./components/Piedpage.vue";
export default {
  name: "App",
  components: {
    Piedpage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
