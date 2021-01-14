const app = document.getElementById("app");
const client = algoliasearch("0RHKO1QOFX", "ecac283cabaf8c7f2eca051a2e042797");
const index = client.initIndex("dev_search");

index.search("Hotel1").then(result => {
  const hits = result.hits.map(hit => `<p>${hit.title}</p>`);
  app.innerHTML = hits.join("");
});