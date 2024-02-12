const carouselText = [
    {"text": "cpp", "color": "#00599C"},
    {"text": "sh", "color": "#4E9A06"},
    {"text": "py", "color": "#FFD43B"},
    {"text": "js", "color": "#F7DF1E"},
    {"text": "html", "color": "#E44D26"},
    {"text": "css", "color": "#1572B6"},
    {"text": "git", "color": "#000000"},
    {"text": "deb", "color": "#A80030"},
    {"text": "json", "color": "#AEB7C0"},
    {"text": "db", "color": "#6A1B9A"}
  ]

  $( document ).ready(async function() {
    carousel(carouselText, "#feature-text")
  });

  async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }

  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }

  async function carousel(carouselList, eleRef) {
      var i = 0;
      while(true) {
        updateFontColor(eleRef, carouselList[i].color)
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if(i >= carouselList.length) {i = 0;}
      }
  }

  function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
  }

  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }