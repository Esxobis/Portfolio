<template>
  <div class="topnav">
    <router-link class="active" :to="{ name:'profile'}">Profile</router-link>
    <router-link :to="{ name:'contact'}">Contact</router-link>
  </div>
  <div class="container">
    <h1>My Profile</h1>
    <img class="image" :src="`${profile.image}`"/>
  </div>
  <div class="content">
    <li><b>Name :</b> {{profile.name}}</li>
    <li><b>Age :</b> {{profile.age}} years old</li>
    <li><b>Education :</b> {{profile.educate}}</li>
    <li><b>Skill :</b> {{profile.skill}}</li>
  </div>
</template>

<script>

  export default{
    name: 'Profile',
    data: () => ({
      profile: {
        name: 'Visarut Hassaphanu',
        age: 21,
        educate: 'Bangkok University - School of Information Technology and Innovation',
        skill: 'XAML, C#, Java, Python, HTML, SQL',
        image: 'https://scontent.fbkk22-8.fna.fbcdn.net/v/t1.6435-9/37268337_10156546801743838_1959333951239618560_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeE3i9f7k8ZI8X9tReiLm7Q3_HMEwQ96WpX8cwTBD3palUJ9ubsIxHaj925Qi_8PIyzeg17LIHhYNSEZgLdk71tu&_nc_ohc=McYO4rrHwxQAX8_vQoo&_nc_ht=scontent.fbkk22-8.fna&oh=00_AT_HkRkaiL_2E3L9FrDCYFOJ4XPheD8gYgTF50YNDo_t2A&oe=620FFFDE',
      },
    }),
  }
</script>

<style>

  
  body {
    background-color: #333;
  }

  h1{
    text-align: center; 
    color: #f2f2f2;   
  }

  .image{
    width: 500px;
    height: auto;
    object-fit: cover; 
    object-position: 0 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  li{
    margin: 15px;
    color: #f2f2f2;
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