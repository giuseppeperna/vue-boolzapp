/**
@file BoolzApp: una web app di messaggistica clone di WhatsApp.
Milestone 1 = Creazione layout Html & CSS. Basi per lo sviluppo con Vue.

@author Giuseppe Perna <giuseppeperna.cg@gmail.com>
*/

// Init Vue Object
const boolzApp = new Vue({
  el:'#boolzApp',
  data: {
    mainUser: { // Main user infos
        name:"Nome Utente",
        avatar:"img/avatar_io.jpg",
      },
    contacts: [ // Contacts infos
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
});
