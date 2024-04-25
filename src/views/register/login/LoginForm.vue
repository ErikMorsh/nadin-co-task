<template>
  <div class="card">
    <h1 class="text-backgroundPrimary text-caption text-sm-h4">
      Hi Dear Guest! Login to enjoy.
    </h1>
    <router-link :to="{ name: 'dashboard' }">
      <v-btn v-ripple class="button mt-10"> Log In </v-btn>
    </router-link>
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  width: 70%;
  padding-top: 50px;
  padding-bottom: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}

.number {
  font-size: 4rem;
  font-weight: 900;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: rgba(255, 255, 255, 0.9);

  margin-bottom: 50px;
}

.button {
  position: relative;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.8);
  color: rgba(0, 0, 0, 0.8);

  text-transform: uppercase;
  font-family: "Trebuchet MS";
  font-weight: 300;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  overflow: hidden;
}

.button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 1);
}
.button:active {
  transform: translateY(0px);
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.3);
}
</style>
