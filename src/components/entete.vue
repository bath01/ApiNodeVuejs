<template>
  <div>
    <!-- Carousel -->
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true"
                aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/image/1.jpg" alt="" height="600px" width="100%">
                <div class="container">
                    <div class="carousel-caption">
                        <h1 style="color:  #fff;text-shadow: black 1px 2px;">Bienvenue Dans Mon Domaine</h1>
                        <p style="color:  #ff7900; font-weight: bold; font-size: 20px;">Je suis dans le domaine
                            Informatique <i class="fa fa-desktop"></i></p>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/image/7.jpg" alt="" height="600px" width="100%">
                <div class="container">
                    <div class="carousel-caption text-start">
                        <h1 style="color:  #fff;text-shadow: black 1px 2px;">Science Informatique <i
                                class="fa fa-desktop"></i></h1>
                        <p style="color:  #ff7900; font-weight: bold; font-size: 20px;"> Inscrit en Licence Science
                            Informatique en 3 ans </p>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/image/banner1.jpg" alt="" height="600px" width="100%">
                <div class="container">
                    <div class="carousel-caption text-end">
                        <h1 style="color:  #fff;text-shadow: black 1px 2px;">Un Mélange de Formation</h1>
                        <p style="color:  #ff7900; font-weight: bold; font-size: 20px;">Plus précisement une combinaison
                            de programmation et de réseau informatique <i class="fa fa-desktop"></i></p>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div class="container">
        <div class="row">
            <h1 class="pb-4 pt-3" style="color: black; text-align:center; text-decoration: underline;">Bienvenue à toi
                </h1>
                <h2 style="color: black;">Je Suis Un Etudiant !</h2>

                <div class="col-lg-6 col-md-12 banner-image pb-4">
                    <img src="../assets/image/4.jpg" alt="banner-img" class="img-fluid rounded">
                </div>

                <div class="col-lg-6 col-md-12 site-title">
                    Je suis un Etudiant en Licence 3 en <strong>Science Informatique</strong>.
                            Je me spécialise dans ce domaine en Developpement web et mobile et sans oublier le réseau.

                            <p>
                                <b>Ce Site School est fait pour partager avec tous mes Devoirs et Interrogations</b>
                            </p>
                </div>
        </div>
    </div>

<!-- Devoir et Interrogation -->
    <div class="spad">
        <div class="site-section">
            <div class="container">
                <div class="row mb-5 justify-content-center">
                    <div class="col-md-7 text-center">
                        <div class="block-heading-1">
                            <h2 class="text-black" style="text-decoration: underline;">Devoir & Interrogation</h2>
                            <p>
                                Nous allons vous présentez simplement
                                des exercies(devoir et Interrogation) de chaque matière dans le domaine Science
                                informatique.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-lg-6 mb-5" data-aos="fade-right">
                        <img src="../assets/image/5.jpg" alt="Image" class="img-fluid rounded">
                    </div>
                    <div class="col-lg-5 ml-auto align-self-center dis">
                        <h3 class="text-black text-uppercase mb-4" style="font-weight: bold;">Devoir</h3>
                        <p class="mb-5">
                            <strong>
                                Au travers de cette partie devoirs nous allons vous présenter tout les devoirs
                                c'est-à-dire au minimum 2 par matière.
                            </strong> <br>
                            Cliquez ici pour en savoir plus <a href="./devoir.php" class="btn btn-primary">Devoir</a>
                        </p>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="col-lg-6 mb-5 order-lg-2" data-aos="fade-left">
                        <img src="../assets/image/1.jpg" alt="Image" class="img-fluid rounded">
                    </div>
                    <div class="col-lg-5 mr-auto align-self-center order-lg-1 dis">
                        <h3 class="text-black text-uppercase mb-4" style="font-weight: bold;">Interrogation</h3>
                        <p class="mb-5">
                            <strong>
                                Au travers de cette partie Interrogation nous allons vous présenter toutes les
                                Interrogations c'est-à-dire au minimum 2 par matière.
                            </strong> <br>
                            Cliquez ici pour en savoir plus <a href="./interro.php"
                                class="btn btn-primary">Interrogation</a>
                        </p>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="col-lg-6 mb-5 order-lg-2" data-aos="fade-left">
                        <img src="../assets/image/projectcycle-1024x614.jpeg" alt="Image" class="img-fluid rounded">
                    </div>
                    <div class="col-lg-5 mr-auto align-self-center order-lg-1 dis">
                        <h3 class="text-black text-uppercase mb-4" style="font-weight: bold;">Projet</h3>
                        <p class="mb-5">
                            <strong>
                                Au travers de cette partie projet nous allons juste partager nos connaissance en terme
                                de projet en donnant le titre et le contenu de votre projet
                            </strong> <br>
                            Cliquez ici pour en savoir plus <a href="./projet.php" class="btn btn-primary">Projet</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Présentation des matières -->
    <div class="pb-4 btn1">
        <div class="site-section">
            <div class="container">
                <h2 class="section-title center" style="color: black; text-decoration: underline;">Toutes les matières
                    possibles</h2>
                <div class="row">
                    <div class="col-lg-12 mb-5">
                        <p>
                            Dans cette partie nous allons voir toutes les matières dans lesquelles vous aurez mes
                            devoirs et Interrogations en image et texte.
                            Ces matières sont:
                        <ul>
                            <li><a style="color: #ff7900;" href="./programWeb.php">HTML && CSS</a></li>
                            <li><a style="color: #ff7900;" href="./programWeb.php">JAVASCRIPT</a></li>
                            <li><a style="color: #ff7900;" href="./programWeb.php">PHP</a></li>
                            <li><a style="color: #ff7900;" href="./programWeb.php">RESEAU</a></li>
                            <li><a style="color: #ff7900;" href="./program.php">JAVA</a></li>
                            <li><a style="color: #ff7900;" href="./program.php">C#</a></li>
                            <li><a style="color: #ff7900;" href="./program.php">LANGAGE C</a></li>
                            <li><a style="color: #ff7900;" href="./program.php">PYTHON</a></li>
                            <li><a style="color: #ff7900;" href="./program.php">ALGORITHME</a></li>
                            <li><a style="color: #ff7900;" href="./program.php">MATHS</a></li>
                            <li><a style="color: #ff7900;" href="./programWeb.php">ANGLAIS</a></li>
                        </ul>
                        </p>
                    </div>
                </div>
                Cliquez ici pour en savoir plus sur nos contacts <a href="./contact.php"
                    class="btn btn-primary">Contact</a>
            </div>
        </div>
    </div>
     
  </div>
</template>

<script>
// import Piedpage from './Piedpage.vue'
export default {
//   components: { Piedpage },
    // eslint-disable-next-line vue/multi-word-component-names
    name: "entete",
}


</script>

<style>

</style>