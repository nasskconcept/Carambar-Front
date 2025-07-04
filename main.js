const API_URL =
  "https://carambar-back-1-496f.onrender.com/api/v1/blagues/random";

async function getRandomBlague() {
  const questionBox = document.getElementById("question");
  const answerBox = document.getElementById("answer");

  questionBox.textContent = "chargement...";
  answerBox.textContent = "";

  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Erreur serveur");
    const blague = await res.json();
    questionBox.textContent = blague.question;
    answerBox.textContent = blague.answer;
  } catch (err) {
    questionBox.textContent = "Erreur lors du chargement";
    answerBox.textContent = "";
  }
}

document
  .getElementById("nouvelle-blague")
  .addEventListener("click", getRandomBlague);

getRandomBlague();

// Ajoute une classe pour l’animation
const blagueBox = document.getElementById("blague-box");
blagueBox.classList.remove("show-blague");
void blagueBox.offsetWidth; // trick to reset the animation
blagueBox.classList.add("show-blague");
