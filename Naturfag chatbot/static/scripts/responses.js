function getBotResponse(input) {


const brod = ["brød", "brødvarer", "brødprodukter"]
  if (input == "hei") {
    return "Hva trenger du hjelp med?";
  } else  if (input == "bærekraft") {
    return "Ønsker du å høre om kjøtt, fisk, brødvarer, grønnsaker?";
  } else if (input == "kjøtt") {
    return 'Det mest bærekraftige kjøttet kommer fra høner, geit og vilt, men å spise hvittkjøtt istedet for rødt er også mer miljøvennlig. Du kan lese mer her: <a href="https://www.prior.no/artikkel/barekraftig-kjott-gir-barekraftig-mat">Prior.no</a>';
  } else if (input == "fisk") {
    return 'Mye fisk som oppdrettslaks kan ha spist fôr som inneholder problematiske råvarer og mye fisk blir filtrert i Kina som forurenser mye, derfor gå på <a href="https://www.wwf.no/sj%c3%b8matguiden">Sjømatguide</a> og les om de mest bærekraftige fiskene'
  } else if (brod.includes(input)) {
    return 'Brød er noe av det mest bærekraftige du kan spise og det eneste dårlige du kan gjøre med det er å kaste det i søppelet, les her hva du heller kan gjøre med det: <a href="https://brodogkorn.no/fakta/brodspising-er-baerekraftig/">BrødogKorn.no</a>'
  } else if (input == "grønnsaker") {
    return 'For å vite at du kjøper det mest bærekraftige av grønnsaker bør du se etter NytNorge-merket og sørge for at at du ikke kjøper for mye (For mer informasjon sjekk ut dette: <a href="https://bramat.no/kosthold/matvarer/2230-spis-ferske-norske-gronnsaker">BraMat.no</a>)'
  }
}
