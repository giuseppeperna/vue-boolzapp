
const boolzApp = new Vue({
  el:'#boolzApp',
  data: {
    mainUser: {
        name:"Nome Utente",
        avatar:"img/avatar_io.jpg",
      },
    contacts: [
      {
        name:"Michele",
        avatar: "img/avatar_1.jpg",
        lastAccess:"10:00 am",
      },
      {
        name:"Fabio",
        avatar: "img/avatar_2.jpg",
        lastAccess:"",
      },
      {
        name:"Samuele",
        avatar: "img/avatar_3.jpg",
        lastAccess:"",
      },
      {
        name:"Luisa",
        avatar: "img/avatar_6.jpg",
        lastAccess:"",
      }
    ]
  },
  methods: {

  }
})
