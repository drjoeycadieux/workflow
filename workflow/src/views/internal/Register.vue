<template>
  <form @submit.prevent="registerUser" class="register-form">
    <input type="email" v-model="email" placeholder="Email" required />
    <input type="password" v-model="password" placeholder="Password" required />
    <button type="submit">Register</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async registerUser() {
      const supabase = createClient('your-supabase-url', 'your-supabase-key')

      try {
        const { user, error } = await supabase.auth.signUp({
          email: this.email,
          password: this.password
        })

        if (error) {
          console.error(error.message)
          // Handle error
        } else {
          console.log(user)
          // Registration successful, redirect to dashboard
          this.$router.push('/dashboard') // Assuming you're using Vue Router
        }
      } catch (error) {
        console.error('Error registering user:', error.message)
      }
    }
  }
}
</script>

<style scoped>
.register-form {
  padding: 125px;
  max-width: 300px;
  margin: 0 auto;
}

input[type='email'],
input[type='password'],
button {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
