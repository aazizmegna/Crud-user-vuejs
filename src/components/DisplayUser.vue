<template>
    <div class="row mrgnbtm">
        <div class="container">
        <h2>Users</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in users.users" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.user_name }}</td>
                  <td>{{ item.user_email }}</td>
                  <td>{{ item.user_password }}</td>
              </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>

    export default {
        name: 'DisplayUser',
        props: ['users']
     }
</script>