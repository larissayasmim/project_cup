function createGame(player1, hour, player2) {
    return `
      <li>
        <img src="./images/icon-${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
        <img src="./images/icon-${player2}.svg" alt="Bandeira da ${player2}" />
      </li>
    `
  }
  
  function createCard(date, day, games) {
    return `
      <div class="card">
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
      </div>
    `
  }
  
  document.querySelector("#app").innerHTML = `
    <header>
      <img src="./images/logonlw.svg" alt="Logo da NLW" />
    </header>
    <main id="cards">
      ${createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia"))}
      ${createCard("28/11","segunda", createGame("switzerland", "13:00", "brazil") + createGame("portugal", "16:00", "uruguai"))}
      ${createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))}
    </main>
  `