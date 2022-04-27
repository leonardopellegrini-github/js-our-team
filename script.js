/*

Viene fornito un layout di base in cui è presente **una card di esempio** inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e **dovrà quindi essere rimossa dall’html**.
Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: **Nome, Ruolo e Foto**.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.

*/

//modello che utilizzarò successivamente
const membro = {
  nome: 'Leonardo Pellegrini',
  ruolo: 'CEO',
  immagine: 'img/walter-gordon-office-manager.jpg'
};

//array che contiene una serie di oggetti membro
const arraySquadra = [
  {
    nome: 'Leonardo Pellegrini',
    ruolo: 'CEO',
    immagine: 'img/walter-gordon-office-manager.jpg'
  },
  {
    nome: 'Leonardo Pellegrini',
    ruolo: 'CEO',
    immagine: 'img/walter-gordon-office-manager.jpg'
  },
  {
    nome: 'Leonardo Pellegrini',
    ruolo: 'CEO',
    immagine: 'img/walter-gordon-office-manager.jpg'
  },
  {
    nome: 'Leonardo Pellegrini',
    ruolo: 'CEO',
    immagine: 'img/walter-gordon-office-manager.jpg'
  },
  {
    nome: 'Leonardo Pellegrini',
    ruolo: 'CEO',
    immagine: 'img/walter-gordon-office-manager.jpg'
  },
  {
    nome: 'Leonardo Pellegrini',
    ruolo: 'CEO',
    immagine: 'img/walter-gordon-office-manager.jpg'
  }
];

creaTeam(arraySquadra);

//funzione che mi permette di creare le card (uso Team come paramentro di default)
function creaTeam(Team){

  //inizializzo la costante dentro alla quale vado a inserire i valori
  const contenitore = document.querySelector('.team-container');
  
  //ciclo for per riprendere tutti gli oggetti presenti dentro all'array
  for (const key in Team) {

    //inserisco dentro al contenitore l'html con le key
    contenitore.innerHTML += 
    `
    <div class="team-card">
      <div class="card-image">
        <img src="${Team[key].immagine}" alt="${Team[key].nome}"/>
      </div>
      <div class="card-text">
         <h3>${Team[key].nome}</h3>
         <p>${Team[key].ruolo}</p>
      </div>
    </div>
    `;
  }
}

