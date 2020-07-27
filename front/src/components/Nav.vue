<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light col-12">
      <a class="navbar-brand" href="#">GITB</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link active" href="index.html">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="tournois.html">Tournois</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="players.html">Joueurs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contacts.html">Contacts</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
</template>

<script>
export default {
    name:"Nav"

}
</script>

<style>

</style>