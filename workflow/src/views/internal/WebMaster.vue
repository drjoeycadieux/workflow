<script setup></script>

<template>
  <div>
    <div class="internal">
      <fieldset>
        <h1 style="text-align: center; font-family: sans-serif">Internal Access</h1>
        <form id="fbLogin" action="">
          <div class="form-group">
            <input type="email" placeholder="Email" name="email" id="email" />
          </div>
          <br />
          <div class="form-group">
            <input type="password" placeholder="Password" name="password" id="password" />
          </div>
          <br />
          <input type="submit" value="Login" />
        </form>
      </fieldset>
    </div>
  </div>
</template>

<style scoped>
.internal {
  padding: 125px;
}

fieldset {
  padding: 25px;
  width: 600px;
  margin: auto;
  border-radius: 15px;
}

::placeholder {
  font-weight: bold;
}

.form-group {
  text-align: center;
}

label {
  font-weight: bold;
  font-family: sans-serif;
}

input[type='submit'] {
  background-color: #4caf50;
  display: block;
  border: none;
  color: white;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  transition-duration: 0.4s;
}

#fbLogin {
  padding: 5px;
  text-align: center;
}

input[type='email'],
input[type='password'] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
