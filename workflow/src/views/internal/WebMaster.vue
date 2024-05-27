<template>
  <div class="login-container">
    <form @submit.prevent="login" class="login-form">
      <h2>Login</h2>
      <div class="form-group">
        <input type="email" v-model="email" placeholder="Email" required />
      </div>
      <div class="form-group">
        <input type="password" v-model="password" placeholder="Password" required />
      </div>
      <button type="submit" class="btn-login">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_API_KEY')

    const login = async () => {
      try {
        const { user, error } = await supabase.auth.signIn({
          email: email.value,
          password: password.value
        })

        if (error) {
          console.error('Login error:', error.message)
        } else {
          console.log('Login successful:', user)
          // Redirect or perform any other action upon successful login
        }
      } catch (error) {
        console.error('Login error:', error.message)
      }
    }

    return { email, password, login }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

input[type='email'],
input[type='password'] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-login {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.btn-login:hover {
  background-color: #0056b3;
}
</style>
