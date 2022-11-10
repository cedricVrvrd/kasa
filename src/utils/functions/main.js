async function getCards() {
  return await (await fetch("../../dbLogements.json")).json();
}

async function getCard(id) {
  const cards = await (await fetch("../../dbLogements.json")).json();
  return cards.find(function (card) {
    return card.id === id;
  });
}

export { getCards, getCard };
