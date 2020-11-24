/**
@file BoolzApp: una web app di messaggistica clone di WhatsApp.
Milestone 1
- Creazione layout Html & CSS. Basi per lo sviluppo con Vue.

Milestone 2
- Possibilita' di selezionare un contatto e mostrare la chat relativa a quel contatto nel box dei messagi ( nome, last seen e storico messaggi ).
- Il contatto selezionato nella sidebar cambia il suo background color.
- I messaggi, oltre al testo e alla data, hanno un determinato stato, ricevuto o inviato, e in base a questo deve mostrarsi come in figura.

Milestone 3
- Abilitare l'utente all'invio dei messaggi.
- Fare in modo che l'utente possa inserire un testo nell'input predisposto
 e che alla pressione del tasto 'Enter' questo messaggio si visualizzi correttamente nell'interfaccia
 ( diventa parte dello storico dei messaggi relativi a quell'utente... ).
 - Inoltre, dopo 3 secondi dall'evento di invio messaggio, simulare una risposta standard da parte del contatto attivo in quel momento.

Milestone 4
- Abilitare l'utente a filtrare i contatti nella sezione di sinistra.
Il filtraggio deve attivarsi quando l'utente inizia a inserire dei caratteri nell'input
ed il confronto deve essere fatto con il nome dei contatti 'in memoria'.

Altre Features implementate:
- Sostituzione dinamica dell'icona di invio messaggio solo quando c'è del testo nel campo input.
- Toggle On/Off dell'icona e della descrizione delle notifiche desktop.
- Trasformazione dinamica dell'ora di ultimo accesso alla chat e dell'ora dei messaggi inviati.
- Nella lista delle chat disponibili viene mostrata l'anteprima dell'ultimo messaggio e l'orario di invio/ricezione.
- Toggle sulla visibilità dei dropdown menus per ogni messaggio della chat.
- Possibilità di cancellare un messaggio dalla chat.
- Pannello emoji e possibilità di utilizzare queste ultime all'interno dei messaggi.

@author Giuseppe Perna <giuseppeperna.cg@gmail.com>
*/
// Init new Object Date
let date = new Date();
let day = String(date.getDate());
let month = String(date.getMonth() + 1);
let year = date.getFullYear();
let today = day + '/' + month + '/' + year;

const contacts = [ // Contacts infos
  {
    name:"Michele",
    avatar: "img/avatar_1.jpg",
    lastAccess: date.toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'}),
    chatId:"0",
    isActive: false,
    chatMessages: [
      {
        text:"A che ore ci incontriamo?",
        userId: this.chatId,
        time:"09:26",
        dropdownMenu: false,
      },
      {
        text:"Ti va bene alle 12:00 in piazza?",
        userId: 0,
        time:"09:50",
        dropdownMenu: false,
      },
      {
        text:"Se faccio tardi, ti avviso.",
        userId: 0,
        time:"10:00",
        dropdownMenu: false,
      },
      {
        text:"Perfetto! A dopo.",
        userId: this.chatId,
        time:"10:15",
        dropdownMenu: false,
      },
    ],
    randomAnswers: [
      "Per me va bene.",
      "Sei sicuro?",
      "Ti aspetto.",
      "Porta da bere, mi raccomando!"
    ],
  },
  {
    name:"Fabio",
    avatar: "img/avatar_2.jpg",
    lastAccess:date.toLocaleTimeString([],{timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit'}),
    chatId:"1",
    isActive: false,
    chatMessages: [
      {
        text:"La cena di ieri è stata fantastica!",
        userId: 0,
        time:"15:18",
        dropdownMenu: false,
      },
      {
        text:"Vogliamo parlare del vino? TOP!",
        userId: this.chatId,
        time:"15:26",
        dropdownMenu: false,
      },
      {
        text:"Il vino era davvero ottimo, ma il dessert rimane insuperabile.",
        userId: 0,
        time:"15:32",
        dropdownMenu: false,
      },
    ],
    randomAnswers: [
      "Dobbiamo replicare il prima possibile.",
      "Anche il conto era onesto.",
      "Conosci per caso il numero di telefono? Vorrei portarci una persona domani sera.",
      "Quando vuoi!"
    ],
  },
  {
    name:"Samuele",
    avatar: "img/avatar_3.jpg",
    lastAccess:date.toLocaleTimeString([],{timeZone: 'Europe/Athens', hour: '2-digit', minute: '2-digit'}),
    chatId:"2",
    isActive: false,
    chatMessages: [
      {
        text:"Pronto per la partita?",
        userId: this.chatId,
        time:"19:03",
        dropdownMenu: false,
      },
      {
        text:"Sono carico a mille!",
        userId: 0,
        time:"19:07",
        dropdownMenu: false,
      },
      {
        text:"Dai che stasera vinciamo!",
        userId: this.chatId,
        time:"19:11",
        dropdownMenu: false,
      },
      {
        text:"Me lo sento.",
        userId: this.chatId,
        time:"19:12",
        dropdownMenu: false,
      },
    ],
    randomAnswers: [
      "Vinciamo 3 a 0.",
      "Dobbiamo difendere meglio della partita scorsa.",
      "Abbiamo pareggiato solo grazie al portiere.",
      "Ci vediamo al campo."
    ],
  },
  {
    name:"Luisa",
    avatar: "img/avatar_6.jpg",
    lastAccess:date.toLocaleTimeString([],{timeZone: 'Asia/Shanghai', hour: '2-digit', minute: '2-digit'}),
    chatId:"3",
    isActive: false,
    chatMessages: [
      {
        text:"Ciao Luisa! Com'è andato l'esame?",
        userId: 0,
        time:"11:26",
        dropdownMenu: false,
      },
      {
        text:"Ciao! Molto bene, grazie: 30 e lode!",
        userId: this.chatId,
        time:"12:30",
        dropdownMenu: false,
      },
      {
        text:"Grande! Congratulazioni.",
        userId: 0,
        time:"12:31",
        dropdownMenu: false,
      },
      {
        text:"Grazie :)",
        userId: this.chatId,
        time:"12:35",
        dropdownMenu: false,
      },
    ],
    randomAnswers: [
      "Sei stato molto gentile a contattarmi per sapere dell'esame.",
      "Se ti va, la prossima settimana sono libera per un caffè.",
      "Hai già il mio numero.",
      "A presto :)"
    ],
  }]
const mainUser = { // Main user infos
    name:"Nome Utente",
    avatar:"img/avatar_io.jpg",
    userId:0,
}

const emoji = ["😀", "😄", "😁", "🤣", "😊", "😇", "🙃", "😉", "😍", "😛", "😡", "😨", "😰", "😥", "😓", "🤗", "🤔", "🤭",
 "👍", "💪", "👋", "🤚", "✋", "🖖", "👌", "🙏", "☝️", "👻", "👽", "👾", "🤖", "🎃", "👶", "🧒", "👦", "👧", "🧑", "👱", "👨",
 "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁"];

// Init Vue Object
const boolzApp = new Vue({
  el:'#boolzApp',
  data: {
    textInput:"", // Input for sending a message
    search:"", // Chat search bar input
    currentDate: today,
    notifications: { // Notification status On/Off
      icon:"fa-bell-slash",
      message: "Attiva notifiche desktop",
    },
    activeChat: null, // Current active chat
    mainUser,
    contacts,
    emoji,
    isActiveEmoji:false,
  },
  methods: {
    activate(element) { // Activate selected chat
      if ((element.chatId == this.activeChat) && (element.isActive === true)) {
        this.activeChat = null;
        element.isActive = false;
      } else {
        this.activeChat = element.chatId;
        element.isActive = true;
      }
    },
    notificationsToggle() { // Toggle notifications On/Off
      if (this.notifications.icon === "fa-bell-slash") {
        this.notifications.icon = "fa-bell";
        this.notifications.message = "Disattiva notifiche desktop";
      } else {
        this.notifications.icon = "fa-bell-slash";
        this.notifications.message = "Attiva notifiche desktop";
      }
    },
    sendMessage() { // Send new message in chat
      while (this.textInput !== "") {
        this.filterContacts[this.activeChat].chatMessages.push( {
            text: this.textInput,
            userId: 0,
            time: date.toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'}),
            dropdownMenu: false,
        })
        setTimeout(() => {this.automaticAnswer()},3000); // Send a random answer after 3 seconds;
        this.textInput = ""; // Reset message input value
        this.currentDate = today
        this.isActiveEmoji = false;
      }
    },
    automaticAnswer() { // Generate a random answer
      this.contacts[this.activeChat].chatMessages.push( {
          text: this.filterContacts[this.activeChat].randomAnswers[Math.floor(Math.random() * this.filterContacts[this.activeChat].randomAnswers.length)],
          time: date.toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'}),
          dropdownMenu: false,
      })
      this.contacts[this.activeChat].lastAccess = date.toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'});
    },
    dropdownMenuToggle(index) { // Toggle visibility - messages dropdown menu
      if (this.filterContacts[this.activeChat].chatMessages[index].dropdownMenu) {
        this.filterContacts[this.activeChat].chatMessages[index].dropdownMenu = false;
      } else {
        this.filterContacts[this.activeChat].chatMessages[index].dropdownMenu = true;
      }
    },
    deleteMessage(index) { // Delete a message in the chat
      if (this.filterContacts[this.activeChat].chatMessages.length == 1) {
        this.filterContacts[this.activeChat].chatMessages.length = 0
        this.currentDate = null;
      }else {
        this.filterContacts[this.activeChat].chatMessages.splice(index, 1);
      }
    },
    ToggleEmojiPanel() { // Toggle visibility - emoji panel
      if (this.isActiveEmoji) {
        this.isActiveEmoji = false;
      } else {
        this.isActiveEmoji = true;
      }
    },
    sendEmoji(index) { // Put emoji in input text.
      this.textInput += this.emoji[index];
    }

  },
  computed: { // Search chat filter
    filterContacts() {
      return this.contacts.filter(contact => {
        return contact.name.toLocaleLowerCase().includes(this.search.toLowerCase());
      })
    },
  }
});
