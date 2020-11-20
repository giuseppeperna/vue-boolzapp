const usersAvatar = [
  "img/avatar_1.jpg",
  "img/avatar_2.jpg",
  "img/avatar_3.jpg",
  "img/avatar_4.jpg",
  "img/avatar_5.jpg",
  "img/avatar_6.jpg",
  "img/avatar_7.jpg",
  "img/avatar_8.jpg",
];

const boolzApp = new Vue({
  el:'#boolzApp',
  data: {
    mainUser: {
        name:"Nome Utente",
        avatar:"avatar_io.jpg",
      },
    contacts: [
      {
        name:"Nome Utente",
        avatar: "img/avatar_1.jpg",
        lastAccess:"",
      }
    ]
  },
  methods: {

  }
})
