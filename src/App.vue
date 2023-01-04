<template>
<div class="container mrgnbtm">
  <div>
   <CreateUser @createUser="userCreate($event)" />
  </div>
  <div class="row mrgnbtm">
    <DisplayUser :users="users"/>
  </div>
  </div>
</template>

<script>
import CreateUser from './components/CreateUser.vue'
import DisplayUser from './components/DisplayUser.vue'
import { getAllUsers, createUser } from './services/userService'

export default {
  name: 'App',
  components: {
      CreateUser,
      DisplayUser
  },
  data() {
    return {
      users: [],
    };
  },
  
  methods: {
    getAllUsers() {
      getAllUsers().then(response => {
        console.log(response)
        this.users = response

      })
    },
    userCreate(data) {
      console.log('data:::', data)
      createUser(data).then(response => {
        console.log(response);
        this.getAllUsers();
      });
    }
  },
  mounted () {
    this.getAllUsers();
  }
};
</script>