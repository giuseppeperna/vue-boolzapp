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
      message: "Attiva notifiche desktop",
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
            time:"09:26",
          },
          {
            text:"Ti va bene alle 12:00 in piazza?",
            userId: 0,
            time:"09:50",
          },
          {
            text:"Se faccio tardi, ti avviso.",
            userId: 0,
            time:"10:00",
          },
          {
            text:"Perfetto! A dopo.",
            userId: this.chatId,
            time:"10:15",
          },
        ],
      },
      {
        name:"Fabio",
        avatar: "img/avatar_2.jpg",
        lastAccess:date.toLocaleTimeString([],{timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit'}),
        chatId:2,
        isActive: false,
        chatMessages: [
          {
            text:"La cena di ieri è stata fantastica!",
            userId: 0,
            time:"15:18",
          },
          {
            text:"Vogliamo parlare del vino? TOP!",
            userId: this.chatId,
            time:"15:26",
          },
          {
            text:"Il vino era davvero ottimo, ma il dessert rimane insuperabile.",
            userId: 0,
            time:"15:32",
          },
        ],
      },
      {
        name:"Samuele",
        avatar: "img/avatar_3.jpg",
        lastAccess:date.toLocaleTimeString([],{timeZone: 'Europe/Athens', hour: '2-digit', minute: '2-digit'}),
        chatId:3,
        isActive: false,
        chatMessages: [
          {
            text:"Pronto per la partita?",
            userId: this.chatId,
            time:"19:03",
          },
          {
            text:"Sono carico a mille!",
            userId: 0,
            time:"19:07",
          },
          {
            text:"Dai che stasera vinciamo!",
            userId: this.chatId,
            time:"19:11",
          },
          {
            text:"Me lo sento.",
            userId: this.chatId,
            time:"19:12",
          },
        ],
      },
      {
        name:"Luisa",
        avatar: "img/avatar_6.jpg",
        lastAccess:date.toLocaleTimeString([],{timeZone: 'Asia/Shanghai', hour: '2-digit', minute: '2-digit'}),
        chatId:4,
        isActive: false,
        chatMessages: [
          {
            text:"Ciao Luisa! Com'è andato l'esame?",
            userId: 0,
            time:"11:26",
          },
          {
            text:"Ciao! Molto bene, grazie: 30 e lode!",
            userId: this.chatId,
            time:"12:30",
          },
          {
            text:"Grande! Congratulazioni.",
            userId: 0,
            time:"12:31",
          },
          {
            text:"Grazie :)",
            userId: this.chatId,
            time:"12:35",
          },
        ],
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
