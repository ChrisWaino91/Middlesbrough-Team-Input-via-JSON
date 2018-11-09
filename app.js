document.getElementById('button1').addEventListener('click', loadPlayers);
let select = document.getElementById('select');


loadEventListeners();

function loadEventListeners(){
  select.addEventListener('change', getPosition)
}

function getPosition(){
let position = document.getElementById('select').value;
//console.log(position);
}

// Load Players
function loadPlayers(e){
  const xhr = new XMLHttpRequest();
  

xhr.open('GET', 'players.json', true);

xhr.onload = function(){
  // This tests to ensure that the document can be loaded
  if(this.status === 200){

    // When recieving JSON information from a web server, the data type is always a string. This 
    // Allows us to parse the string as an object to work with more easily
    const players = JSON.parse(this.responseText);


    // Initialise the position within this function and set it to the user's input value
    let position = document.getElementById('select').value;
    

    // Initialise and Set the output area to be blank
    let output = '';



      // If the user selects "all", show all players
      if(position === "all"){
      players.forEach(function(players){
        output += `
        <ul>
              <li>Squad Number: ${players.squadNumber}</li>
              <li>Forename: ${players.forename}</li>
              <li>Surname: ${players.surname}</li>
              <li>Position: ${players.position}</li>
          </ul>
        `;

        document.getElementById('players').innerHTML = output;
        
      })
    }

     // If the user selects "Goalkeepers", show all GKs
    else if(position === "Goalkeepers"){
      players.forEach(function(players){
        if(players.position === "Goalkeeper"){
        output += `
        <ul>
              <li>Squad Number: ${players.squadNumber}</li>
              <li>Forename: ${players.forename}</li>
              <li>Surname: ${players.surname}</li>
              <li>Position: ${players.position}</li>
          </ul>
        `;

        document.getElementById('players').innerHTML = output;
        }  
      })
    }
  
     // If the user selects "Defenders", show all DEFs
    else if(position === "Defenders"){
      players.forEach(function(players){
        if(players.position === "Defender"){
          output += `
          <ul>
                <li>Squad Number: ${players.squadNumber}</li>
                <li>Forename: ${players.forename}</li>
                <li>Surname: ${players.surname}</li>
                <li>Position: ${players.position}</li>
            </ul>
          `;
  
          document.getElementById('players').innerHTML = output;
          }  
      })
    }


    // If the user selects "Midfielders", show all MIDs
    else if(position === "Midfielders"){
      players.forEach(function(players){
        if(players.position === "Midfield"){
          output += `
          <ul>
                <li>Squad Number: ${players.squadNumber}</li>
                <li>Forename: ${players.forename}</li>
                <li>Surname: ${players.surname}</li>
                <li>Position: ${players.position}</li>
            </ul>
          `;
  
          document.getElementById('players').innerHTML = output;
          }  
      })
    }
    
    // If the user selects "Strikers", show all Strikers
    else if(position === "Strikers"){
      players.forEach(function(players){
        if(players.position === "Striker"){
          output += `
          <ul>
                <li>Squad Number: ${players.squadNumber}</li>
                <li>Forename: ${players.forename}</li>
                <li>Surname: ${players.surname}</li>
                <li>Position: ${players.position}</li>
            </ul>
          `;
  
          document.getElementById('players').innerHTML = output;
          }  
      })
    } 











}
}

xhr.send();
}

