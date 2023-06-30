<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
      <div id="fondo">
            <div id="title">
                  <h1>Cambiar correo y contraseña</h1>
            </div>
            <div id="container">
                  <div id="cuadro">
                        <form action="">
                              <div>
                                    <label class="lab-chan-inf" for="">Cambiar Nombre de Usuario</label><br><br>
                                    <input class="input-chan-inf" type="text" placeholder="Usuario"><br><br>
                              </div>
                              <div>
                                    <label class="lab-chan-inf" for="">Cambiar Correo</label><br><br>
                                    <input class="input-chan-inf" type="text" placeholder="Correo"><br><br>
                              </div>
                              <div>
                                    <label class="lab-chan-inf" for="">Cambiar Contraseña</label><br><br>
                                    <input class="input-chan-inf" type="text" placeholder="Contraseña"><br><br>
                              </div>
                              <input type="submit" id="btn-sub-chan-ing" value="Cambiar Información">
                        </form>
                  </div>
            </div>
      </div>
      <hr>
      <div id="fondo2">
            <div id="titulo-reporte">
                  <h1>Generar Reporte</h1>
            </div>
            <div>
                  <form action="">
                        <div>
                              <label for="">Nombre del Cliente</label>
                              <input type="text">
                        </div>
                        <div>
                              <label for="">Refacciones</label>
                              <input type="text">
                        </div>
                        <div>
                              <label for="">Detalle_maquina</label>
                              <input type="text">
                        </div>
                        <div>
                              <label for="">Fecha</label>
                              <input type="date" name="" id="">
                        </div>
                  </form>
            </div>
      </div>
      <hr>
      <div id="fondo3">
            <div id="proveedores">
                  <h1>Ver/Registrar Proveedores</h1>
                  <div id="prov">
                        <div id="reg-prov">
                              <form action="">
                                    <div>
                                          <input type="text" placeholder="No_proveedor">
                                    </div>
                                    <div>
                                          <input type="text" name="" id="" placeholder="Nombre">
                                    </div>
                                    <div>
                                          <input type="text" name="" id="" placeholder="Tipo de proveedor">
                                    </div>
                                    <div>
                                          <input type="text" name="" id="" placeholder="Teléfono">
                                    </div>
                                    <div>
                                          <input type="email" name="" id="" placeholder="Correo">
                                    </div>
                                    <div>
                                          <textarea style="resize: none;" name="" id="" cols="30" rows="10" placeholder="Dirección"></textarea>
                                    </div>
                                    <input id="btn-reg-pro" type="submit" value="Registrar">
                              </form>
                        </div>
                        <div id="ver-prov">
                              <div id="objets-list">
                                    <ul>
                                          <li>Id</li>
                                          <li>Nombre</li>
                                          <li>Tipo de Proveedor</li>
                                          <li>Teléfono</li>
                                          <li>Correo</li>
                                          <li>Dirección</li>
                                    </ul>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</template>

<style scoped>
      *
      {
            font-family: 'Raleway','Century Gothic', sans-serif;
            padding: 0;
            margin: 0;
            box-sizing: border-box
      }
      @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
      #fondo
      {
            width: 100%;
            height: 100%;
            background-color: white;
      }

      #title
      {
            display: flex;
            justify-content: flex-start;
      }

      #container
      {
            display: flex;
            justify-content: center;
      }

      #cuadro
      {
            margin-top: 30px;
            width: 300px;
            border: 3px solid darkgray;
            background-color: gray;
            padding: 20px;
            border-radius: 6px;
      }

      .lab-chan-inf
      {
            font-weight: bold;
      }

      #cuadro form
      {
            display: flex;
            flex-direction: column;
            align-items: center;
      }

      .input-chan-inf
      {
            padding: 10px;
            font-size: 20px;
            border: 1px solid rgb(46, 46, 46);
            border-radius: 4px;
      }

      .input-chan-inf:focus
      {
            color: black;
            padding: 15px;
            transition: all 0.4s;
      }

      #btn-sub-chan-ing
      {
            padding: 4px;
            border: 2px solid darkgreen;
            background-color: green;
            color: white;
            font-size: 19px;
      }

      #btn-sub-chan-ing:hover
      {
            background-color: rgb(0, 206, 0);
            border: 2px solid green;
            cursor: pointer;
            transition: all 0.4s;
      }
      /*Plano 2*/
      /*Plano3*/
      #proveedores
      {
            width: 92%;
            margin: 0 auto;
      }

      #proveedores h1
      {
            margin-bottom: 35px;
      }

      #prov
      {
            display: flex;
      }

      #reg-prov
      {
            width: 35%;
            border: 2px solid gray;
            margin: 20px;
            border-radius: 9px;
            padding: 16px;
      }

      #reg-prov form div
      {
            margin: 10px;
      }

      #reg-prov form div input[type="text"], input[type="email"]
      {
            padding: 6px;
            font-size: 19px;
      }

      #reg-prov form div input[type="text"]:focus
      {
            padding: 12px;
            transition: all .4s;
      }

      #reg-prov form div input[type="email"]:focus
      {
            padding: 12px;
            transition: all .4s;
      }

      textarea
      {
            padding: 6px;
            font-size: 19px;
      }

      textarea:focus
      {
            padding: 6px;
            font-size: 19px;
      }

      #ver-prov
      {
            width: 65%;
            border: 2px solid gray;
      }

      #objets-list ul li
      {
            list-style: none;
            display: block;
            padding: 10px;
            font-weight: bold;
      }

      #objets-list ul
      {
            display: flex;
            justify-content: space-around;
            background-color: lightgray;
      }

      #btn-reg-pro
      {
            background-color: green;
            border: 2px solid darkgreen;
            padding: 9px;
            color: white;
            font-size: 19px;
            border-radius: 5%;
      }

      #btn-reg-pro:hover
      {
            background-color: rgb(0, 206, 0);
            border: 2px solid green;
            transition: all .4s;
            cursor: pointer;
      }
</style>
