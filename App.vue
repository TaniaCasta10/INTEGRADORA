<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
 
      console.log('Login successful');
    }
  }
};

</script>
<template>
  <div class="container text-primary">
    <h1 class="titulo" >iniciar sesion </h1>
    <form @submit.prevent="login">
      <div class="form-group1">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  background-color: rgb(127, 133, 131);
  margin-top: 100px;
  text-align: center;
height: 500px;
  width: 500px;
  align-items: center;
  flex-direction: column;
  justify-content:space-evenly;
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-bottom: 2px;
}

button{
  position: absolute;
  top: 87%;
  left: 32%;
  transform: translate(-50%, -50%);
}
.form-group1{
  position: absolute;
  top: 55%;
  left: 32%;
  transform: translate(-50%, -50%);

}
.titulo{
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>
