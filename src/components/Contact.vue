<template>
  <div>
    <div class="topnav">
      <router-link :to="{ name: 'profile' }">Profile</router-link>
      <router-link class="active" :to="{ name: 'contact' }"
        >Contact</router-link
      >
    </div>
    <div class="container">
      <h1>My Contact</h1>
    </div>
    <br />
    <div class="content">
      <li><b>E-mail :</b> {{ contact.email }}</li>
      <li><b>Phone Number :</b> {{ contact.phone }}</li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({
    contact: {
      email: "...@a-host.co.th",
      phone: "0xx-xxx-xxxx",
    },
  }),
};
</script>

<style>
#wrapper {
  background-color: #333;
}

h1 {
  text-align: center;
}

li {
  margin: 15px;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}
</style>