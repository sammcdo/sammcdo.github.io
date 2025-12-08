(function(){
  const fragments = [
    'partials/cards/ml_authorship.html',
    'partials/cards/stylo_compare.html',
    'partials/cards/ipo_predictor.html',
    'partials/cards/kattis.html',
    'partials/cards/decision_tree.html',
    'partials/cards/frc_nomad_2022.html',
    'partials/cards/jane_austen_ai.html',
    'partials/cards/live_image_detection.html',
    'partials/cards/jha_safety.html'
    // 'partials/cards/web_editor.html',
  ];

  async function fetchText(path){
    const res = await fetch(path);
    if(!res.ok) throw new Error(`Failed to fetch ${path}: ${res.status}`);
    return await res.text();
  }

  function toElement(html){
    const wrapper = document.createElement('div');
    wrapper.innerHTML = html.trim();
    return wrapper.firstElementChild;
  }

  async function loadCards(){
    const carouselInner = document.getElementById('carouselInner');
    const gridCards = document.getElementById('gridCards');
    if(!carouselInner || !gridCards) return;
    let currentRow = null;
    for(let i=0;i<fragments.length;i++){
      try{
        const html = await fetchText(fragments[i]);
        const cardEl = toElement(html);

        // Append to grid in rows of 3
        const gridClone = cardEl.cloneNode(true);
        if(i % 3 === 0){
          currentRow = document.createElement('div');
          currentRow.className = 'row';
          gridCards.appendChild(currentRow);
        }
        if(!currentRow) currentRow = gridCards;
        currentRow.appendChild(gridClone);

        // Wrap for carousel
        const item = document.createElement('div');
        item.className = 'carousel-item' + (i===0 ? ' active' : '');
        item.appendChild(cardEl);
        carouselInner.appendChild(item);
      }catch(e){
        console.error('Error loading fragment', fragments[i], e);
      }
    }
  }

  document.addEventListener('DOMContentLoaded', loadCards);
})();
