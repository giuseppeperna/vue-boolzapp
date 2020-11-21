/**
@file BoolzApp: una web app di messaggistica clone di WhatsApp.
Milestone 1 = Creazione layout Html & CSS. Basi per lo sviluppo con Vue.

@author Giuseppe Perna <giuseppeperna.cg@gmail.com>
*/
let date = new Date();

// Init Vue Object
const boolzApp = new Vue({
  el:'#boolzApp',
  data: {
    textInput:"",
    search:"",
    notifications: {
      icon:"fa-bell-slash",
      message: "Attiva notifiche desktop"
    } ,
    activeChat: null,
    mainUser: { // Main user infos
        name:"Nome Utente",
        avatar:"img/avatar_io.jpg",
        userId:0,
      },
    contacts: [ // Contacts infos
      {
        name:"Michele",
        avatar: "img/avatar_1.jpg",
        lastAccess: date.toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'}),
        chatId:1,
        isActive: false,
        chatMessages: [
          {
            text:"A che ore ci incontriamo?",
            userId: this.chatId,
          },
          {
            text:"Ti va bene alle 12:00 in piazza?",
            userId: 0,
          },
          {
            text:"Se faccio tardi, ti avviso.",
            userId: 0,
          },
          {
            text:"Perfetto! A dopo.",
            userId: this.chatId,
          },
        ]
      },
      {
        name:"Fabio",
        avatar: "img/avatar_2.jpg",
        lastAccess:date.toLocaleTimeString([],{timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit'}),
        chatId:2,
        isActive: false,
      },
      {
        name:"Samuele",
        avatar: "img/avatar_3.jpg",
        lastAccess:date.toLocaleTimeString([],{timeZone: 'Europe/Athens', hour: '2-digit', minute: '2-digit'}),
        chatId:3,
        isActive: false,
      },
      {
        name:"Luisa",
        avatar: "img/avatar_6.jpg",
        lastAccess:date.toLocaleTimeString([],{timeZone: 'Asia/Shanghai', hour: '2-digit', minute: '2-digit'}),
        chatId:4,
        isActive: false,
      }
    ]
  },
  methods: { // Activate selected chat
    activate (element) {
      if ((element.chatId == this.activeChat) && (element.isActive === true)) {
        this.activeChat = null;
        element.isActive = false;
      } else {
        this.activeChat = element.chatId
        element.isActive = true;
      }
    },
    notificationsToggle () {
      if (this.notifications.icon === "fa-bell-slash") {
        this.notifications.icon = "fa-bell";
        this.notifications.message = "Disattiva notifiche desktop";
      } else {
        this.notifications.icon = "fa-bell-slash";
        this.notifications.message = "Attiva notifiche desktop";
      }
    }
  },

  computed: { // Search chat filter
    filterContacts() {
      return this.contacts.filter(contact => {
        return contact.name.toLocaleLowerCase().includes(this.search.toLowerCase())
      })
    },
  }
});
