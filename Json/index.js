const { constants } = require("http2");

const response = `{"info":{"count":826,"pages":42,"next":"https://rickandmortyapi.com/api/character?page=7","prev":"https://rickandmortyapi.com/api/character?page=5"},"results":[{"id":101,"name":"E. Coli","status":"Dead","species":"Disease","type":"","gender":"unknown","origin":{"name":"Anatomy Park","url":"https://rickandmortyapi.com/api/location/5"},"location":{"name":"Anatomy Park","url":"https://rickandmortyapi.com/api/location/5"},"image":"https://rickandmortyapi.com/api/character/avatar/101.jpeg","episode":["https://rickandmortyapi.com/api/episode/3"],"url":"https://rickandmortyapi.com/api/character/101","created":"2017-12-01T12:03:31.433Z"},{"id":102,"name":"Donna Gueterman","status":"Dead","species":"Robot","type":"","gender":"Female","origin":{"name":"unknown","url":""},"location":{"name":"Planet Squanch","url":"https://rickandmortyapi.com/api/location/35"},"image":"https://rickandmortyapi.com/api/character/avatar/102.jpeg","episode":["https://rickandmortyapi.com/api/episode/21"],"url":"https://rickandmortyapi.com/api/character/102","created":"2017-12-01T12:21:21.357Z"}]}`;
//objeto que adentro tiene un objeto info, otro que es result, result es un arreglo donde cada personaje es un arreglo

const convertJson = JSON.parse(response); // la convierto en un objeto javascript
const productContainer = document.getElementById("Conteinern1");

for (const pr of convertJson.results) {
    const card = document.createElement("article");
    const cardContent = `
        <h2>${pr.name}</h2>
        <img src="${pr.image}" alt="${pr.name}">
        <p>Status: ${pr.status}</p>
        <p>Species: ${pr.species}</p>
    `;

    card.innerHTML = cardContent;
    productContainer.appendChild(card);
}  