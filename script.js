let currentSet = 1;

async function fetchData() {
  try {
    const response = await fetch(
      "https://script.googleusercontent.com/a/macros/boiko.com.ua/echo?user_content_key=yoY_WPn2CL3GDKaAn6-jYnmRODMfKaipvBAUDPIvwjIVIwsa_BSzCBvBZKQYJiHe577d3oLJrnB6_L1cdARhneDB1Z8XPU2Xm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP-258R2IqhkregMCvU4a6qzelfDA88TH5qO-uYJd4gPyZU96GM3ThfOoZcd77-KrUA2dfGhgThburXF-UTA2WGnSJ-RbsigF1mMGZs5qHsGYfgXvUjRJwhY-DNxL6o35eo&lib=MJu-EdDM3SZYokobVoAGr22aF27sfQqfd"
    );
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    const container = document.getElementById("data-container");
    let griffinScore = document.getElementById("griffin-score");
    let dragonScore = document.getElementById("dragon-score");
    // console.log(data[1][1]);
    // console.log(data[1][2]);
    griffinScore.textContent = data[1][1];
    dragonScore.textContent = data[1][2];
    container.innerHTML = "";
    if (Array.isArray(data) && data.length > 1) {
      if (currentSet === 1) {
        // Перший набір рядків (3 до 13)
        for (let i = 3; i < 13; i++) {
          const row = data[i];
          if (row.length < 5) continue;

          const divContent = createContentRow(row);
          container.appendChild(divContent);
        }
        currentSet = 2; // Перемикаємося на другий набір після виконання
      } else {
        // Другий набір рядків (14 до 23)
        for (let i = 14; i < 24; i++) {
          const row = data[i];
          if (row.length < 5) continue;

          const divContent = createContentRow(row);
          container.appendChild(divContent);
        }
        currentSet = 1; // Перемикаємося назад на перший набір після виконання
      }
    } else {
      container.innerText = "Немає доступних даних";
    }
  } catch (error) {
    console.error("Помилка завантаження даних:", error);
  }
}
function createContentRow(row) {
  const divContent = document.createElement("div");
  divContent.classList.add("content");

  const divItem = document.createElement("div");
  divItem.classList.add("content__item");

  const score1 = document.createElement("span");
  score1.classList.add("content__score");
  score1.textContent = row[1]; // Значення з таблиці

  const label = document.createElement("div");
  label.classList.add("content__label");
  label.textContent = row[0]; // Назва або опис

  const score2 = document.createElement("span");
  score2.classList.add("content__score");
  score2.textContent = row[2]; // Значення з таблиці

  divItem.appendChild(score1);
  divItem.appendChild(label);
  divItem.appendChild(score2);

  const agSpan = document.createElement("span");
  agSpan.classList.add("Ag");

  const bgSpan = document.createElement("span");
  bgSpan.classList.add("Bg");

  const fgSpanHome = document.createElement("span");
  fgSpanHome.classList.add("Fg");
  fgSpanHome.dataset.testid = "home";
  fgSpanHome.id = "home_assistant";
  fgSpanHome.style.width = `${row[3] * 100}%`; // Встановлюємо ширину з 4-го стовпця

  const fgSpanAway = document.createElement("span");
  fgSpanAway.classList.add("Fg");
  fgSpanAway.dataset.testid = "away";
  fgSpanAway.id = "away_assistant";
  fgSpanAway.style.width = `${row[4] * 100}%`; // Встановлюємо ширину з 5-го стовпця

  bgSpan.appendChild(fgSpanHome);
  agSpan.appendChild(bgSpan);

  const cgSpan = document.createElement("span");
  cgSpan.classList.add("Cg");
  cgSpan.appendChild(fgSpanAway);

  agSpan.appendChild(cgSpan);
  divContent.appendChild(divItem);
  divContent.appendChild(agSpan);

  return divContent;
}
fetchData();
setInterval(fetchData, 15000);
