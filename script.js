/** =========================
 * Recipe Database (20 items)
 * Each ingredient has { name, qty, unit } for scaling
 * Nutrition is per serving; totals will scale with servings
 ==========================*/
const RECIPES = [
  {
    id: 1, name: "Tea", cuisine: "Global", difficulty: "Easy", cooking_time: 10,
    diet: ["vegetarian","gluten-free"],
    ingredients: [
      {name:"water", qty:250, unit:"ml"},
      {name:"tea leaves", qty:2, unit:"tsp"},
      {name:"milk", qty:100, unit:"ml"},
      {name:"sugar", qty:2, unit:"tsp"}
    ],
    steps: [
      "Bring water to a boil in a pot.",
      "Add tea leaves and simmer for 2-3 minutes.",
      "Pour in milk and sugar, then bring to a boil again.",
      "Strain the tea into cups and serve hot."
    ],
    nutrition: {calories:150, protein:3, fat:4, carbs:25}
  },
  {
    id: 2, name: "Fried Rice", cuisine: "Chinese", difficulty: "Easy", cooking_time: 20,
    diet: [],
    ingredients: [
      {name:"rice", qty:200, unit:"g"},
      {name:"soy sauce", qty:1.5, unit:"tbsp"},
      {name:"vegetables", qty:150, unit:"g"},
      {name:"oil", qty:1, unit:"tbsp"}
    ],
    steps: [
      "Heat oil in a large pan or wok over high heat.",
      "Add chopped vegetables and stir-fry for 3-4 minutes.",
      "Add cooked rice and break up any clumps.",
      "Pour in soy sauce and toss until heated through."
    ],
    nutrition: {calories:420, protein:9, fat:10, carbs:74}
  },
  {
    id: 3, name: "Omelette", cuisine: "Global", difficulty: "Easy", cooking_time: 8,
    diet: ["gluten-free"],
    ingredients: [
      {name:"eggs", qty:2, unit:"pcs"},
      {name:"salt", qty:.25, unit:"tsp"},
      {name:"oil", qty:1, unit:"tsp"}
    ],
    steps: [
      "Beat eggs with salt.",
      "Heat oil, pour in eggs.",
      "Cook 2-3 minutes, fold and serve."
    ],
    nutrition: {calories:190, protein:12, fat:15, carbs:1}
  },
  {
    id: 4, name: "Grilled Cheese Sandwich", cuisine: "American", difficulty: "Easy", cooking_time: 10,
    diet: ["vegetarian"],
    ingredients: [
      {name:"bread", qty:2, unit:"slices"},
      {name:"cheese", qty:2, unit:"slices"},
      {name:"butter", qty:1, unit:"tbsp"}
    ],
    steps: [
      "Butter bread, add cheese, grill both sides until golden."
    ],
    nutrition: {calories:380, protein:14, fat:22, carbs:30}
  },
  {
    id: 5, name: "Lemonade", cuisine: "Global", difficulty: "Easy", cooking_time: 5,
    diet: ["vegan","gluten-free"],
    ingredients: [
      {name:"lemon", qty:1, unit:"pc"},
      {name:"water", qty:250, unit:"ml"},
      {name:"sugar", qty:2, unit:"tbsp"}
    ],
    steps: [
      "Squeeze lemon, mix with water and sugar. Stir until dissolved."
    ],
    nutrition: {calories:120, protein:0, fat:0, carbs:30}
  },
  {
    id: 6, name: "Pasta", cuisine: "Italian", difficulty: "Easy", cooking_time: 25,
    diet: ["vegetarian"],
    ingredients: [
      {name:"pasta", qty:120, unit:"g"},
      {name:"salt", qty:.5, unit:"tsp"},
      {name:"olive oil", qty:1, unit:"tbsp"},
      {name:"tomato sauce", qty:150, unit:"g"}
    ],
    steps: [
      "Boil pasta in salted water.",
      "Drain; toss with tomato sauce and olive oil."
    ],
    nutrition: {calories:520, protein:14, fat:12, carbs:88}
  },
  {
    id: 7, name: "Salad", cuisine: "Global", difficulty: "Easy", cooking_time: 10,
    diet: ["vegan","gluten-free"],
    ingredients: [
      {name:"lettuce", qty:80, unit:"g"},
      {name:"tomato", qty:1, unit:"pc"},
      {name:"cucumber", qty:0.5, unit:"pc"},
      {name:"salt", qty:.25, unit:"tsp"},
      {name:"olive oil", qty:1, unit:"tbsp"}
    ],
    steps: [
      "Chop vegetables, season with salt, drizzle olive oil, toss."
    ],
    nutrition: {calories:160, protein:3, fat:10, carbs:14}
  },
  {
    id: 8, name: "French Fries", cuisine: "American", difficulty: "Easy", cooking_time: 25,
    diet: ["vegan","gluten-free"],
    ingredients: [
      {name:"potato", qty:2, unit:"pcs"},
      {name:"oil", qty:400, unit:"ml"},
      {name:"salt", qty:.5, unit:"tsp"}
    ],
    steps: [
      "Cut potatoes, deep fry until golden, season with salt."
    ],
    nutrition: {calories:450, protein:6, fat:24, carbs:54}
  },
  {
    id: 9, name: "Vegetable Soup", cuisine: "Global", difficulty: "Easy", cooking_time: 30,
    diet: ["vegan","gluten-free"],
    ingredients: [
      {name:"vegetables", qty:200, unit:"g"},
      {name:"water", qty:500, unit:"ml"},
      {name:"salt", qty:.5, unit:"tsp"},
      {name:"pepper", qty:.25, unit:"tsp"}
    ],
    steps: [
      "Boil vegetables in water, season and simmer until tender."
    ],
    nutrition: {calories:140, protein:4, fat:2, carbs:28}
  },
  {
    id:10, name: "Chicken Curry", cuisine: "Indian", difficulty: "Medium", cooking_time: 40,
    diet: ["gluten-free"],
    ingredients: [
      {name:"chicken", qty:350, unit:"g"},
      {name:"onion", qty:1, unit:"pc"},
      {name:"tomato", qty:1, unit:"pc"},
      {name:"oil", qty:1, unit:"tbsp"},
      {name:"spices", qty:2, unit:"tsp"}
    ],
    steps: [
      "Sauté onion, add tomato and spices.",
      "Add chicken and cook until tender."
    ],
    nutrition: {calories:520, protein:38, fat:28, carbs:18}
  },
  {
    id:11, name: "Fruit Smoothie", cuisine: "Global", difficulty: "Easy", cooking_time: 5,
    diet: ["vegetarian","gluten-free"],
    ingredients: [
      {name:"banana", qty:1, unit:"pc"},
      {name:"milk", qty:200, unit:"ml"},
      {name:"sugar", qty:1, unit:"tbsp"}
    ],
    steps: [
      "Blend banana, milk and sugar until smooth."
    ],
    nutrition: {calories:220, protein:7, fat:6, carbs:36}
  },
  {
    id:12, name: "Chapati", cuisine: "Indian", difficulty: "Medium", cooking_time: 20,
    diet: ["vegan"],
    ingredients: [
      {name:"flour", qty:150, unit:"g"},
      {name:"water", qty:100, unit:"ml"},
      {name:"salt", qty:.25, unit:"tsp"},
      {name:"oil", qty:1, unit:"tsp"}
    ],
    steps: [
      "Knead dough; roll and cook on hot pan with light oil."
    ],
    nutrition: {calories:360, protein:9, fat:6, carbs:66}
  },
  {
    id:13, name: "Pancakes", cuisine: "American", difficulty: "Easy", cooking_time: 20,
    diet: ["vegetarian"],
    ingredients: [
      {name:"flour", qty:120, unit:"g"},
      {name:"milk", qty:180, unit:"ml"},
      {name:"egg", qty:1, unit:"pc"},
      {name:"sugar", qty:1, unit:"tbsp"},
      {name:"butter", qty:1, unit:"tbsp"}
    ],
    steps: [
      "Mix batter; cook on pan both sides until golden."
    ],
    nutrition: {calories:420, protein:12, fat:14, carbs:64}
  },
  {
    id:14, name: "Poha", cuisine: "Indian", difficulty: "Easy", cooking_time: 20,
    diet: ["vegetarian"],
    ingredients: [
      {name:"poha", qty:120, unit:"g"},
      {name:"onion", qty:1, unit:"pc"},
      {name:"oil", qty:1, unit:"tbsp"},
      {name:"salt", qty:.5, unit:"tsp"},
      {name:"spices", qty:1, unit:"tsp"}
    ],
    steps: [
      "Rinse poha; sauté onion with spices; mix poha and cook briefly."
    ],
    nutrition: {calories:360, protein:7, fat:10, carbs:58}
  },
  {
    id:15, name: "Upma", cuisine: "Indian", difficulty: "Easy", cooking_time: 20,
    diet: ["vegetarian"],
    ingredients: [
      {name:"semolina", qty:120, unit:"g"},
      {name:"onion", qty:1, unit:"pc"},
      {name:"oil", qty:1, unit:"tbsp"},
      {name:"water", qty:300, unit:"ml"},
      {name:"salt", qty:.5, unit:"tsp"}
    ],
    steps: [
      "Roast semolina; sauté onion; add water & salt; stir in semolina."
    ],
    nutrition: {calories:380, protein:9, fat:10, carbs:62}
  },
  {
    id:16, name: "Maggi Noodles", cuisine: "Indian", difficulty: "Easy", cooking_time: 5,
    diet: [],
    ingredients: [
      {name:"noodles", qty:1, unit:"pack"},
      {name:"water", qty:250, unit:"ml"},
      {name:"spices", qty:1, unit:"pack"}
    ],
    steps: [
      "Boil water; cook noodles with spice mix for 2 minutes."
    ],
    nutrition: {calories:360, protein:7, fat:14, carbs:50}
  },
  {
    id:17, name: "Curd Rice", cuisine: "Indian", difficulty: "Easy", cooking_time: 10,
    diet: ["vegetarian","gluten-free"],
    ingredients: [
      {name:"rice", qty:200, unit:"g"},
      {name:"curd", qty:200, unit:"g"},
      {name:"salt", qty:.5, unit:"tsp"}
    ],
    steps: [
      "Mix cooked rice with curd and salt. (Optional tempering)."
    ],
    nutrition: {calories:420, protein:10, fat:8, carbs:78}
  },
  {
    id:18, name: "Dal Fry", cuisine: "Indian", difficulty: "Medium", cooking_time: 35,
    diet: ["vegan","gluten-free"],
    ingredients: [
      {name:"dal", qty:180, unit:"g"},
      {name:"onion", qty:1, unit:"pc"},
      {name:"tomato", qty:1, unit:"pc"},
      {name:"oil", qty:1, unit:"tbsp"},
      {name:"spices", qty:2, unit:"tsp"}
    ],
    steps: [
      "Cook lentils; make onion-tomato tempering with spices; simmer together."
    ],
    nutrition: {calories:380, protein:18, fat:10, carbs:54}
  },
  {
    id:19, name: "Masala Chai", cuisine: "Indian", difficulty: "Easy", cooking_time: 12,
    diet: ["vegetarian","gluten-free"],
    ingredients: [
      {name:"water", qty:200, unit:"ml"},
      {name:"ginger", qty:1, unit:"inch"},
      {name:"spices", qty:1, unit:"tsp"},
      {name:"tea leaves", qty:2, unit:"tsp"},
      {name:"sugar", qty:2, unit:"tsp"},
      {name:"milk", qty:120, unit:"ml"}
    ],
    steps: [
      "Boil water with ginger & spices, add tea; add milk & sugar; boil; strain."
    ],
    nutrition: {calories:160, protein:4, fat:5, carbs:26}
  },
  {
    id:20, name: "Vegetable Pulao", cuisine: "Indian", difficulty: "Medium", cooking_time: 35,
    diet: ["vegan","gluten-free"],
    ingredients: [
      {name:"rice", qty:220, unit:"g"},
      {name:"vegetables", qty:200, unit:"g"},
      {name:"oil", qty:1, unit:"tbsp"},
      {name:"spices", qty:2, unit:"tsp"},
      {name:"salt", qty:.75, unit:"tsp"}
    ],
    steps: [
      "Sauté vegetables with spices; add rice & water; cook until done."
    ],
    nutrition: {calories:520, protein:10, fat:10, carbs:96}
  }
];

/* ====== State & Storage ====== */
const store = {
  favorites: new Set(),
  ratings: {},
  save(){
    try {
      localStorage.setItem('favorites', JSON.stringify([...this.favorites]));
      localStorage.setItem('ratings', JSON.stringify(this.ratings));
    } catch (e) {
      console.error("Error saving to localStorage", e);
    }
  }
};

try {
  const storedFavorites = localStorage.getItem('favorites');
  if (storedFavorites) {
    store.favorites = new Set(JSON.parse(storedFavorites));
  }
  const storedRatings = localStorage.getItem('ratings');
  if (storedRatings) {
    store.ratings = JSON.parse(storedRatings);
  }
} catch (e) {
  console.error("Could not load from localStorage", e);
}


/* ====== Derived Unique Ingredients ====== */
function getAllIngredients(){
  const set = new Set();
  RECIPES.forEach(r => r.ingredients.forEach(i => set.add(i.name.toLowerCase())));
  return [...set].sort();
}

/* ====== UI Elements ====== */
const el = {
  ingredientChips: document.getElementById('ingredientChips'),
  ingredientSearch: document.getElementById('ingredientSearch'),
  customIngredient: document.getElementById('customIngredient'),
  addIngredient: document.getElementById('addIngredient'),
  diets: () => [...document.querySelectorAll('.diet:checked')].map(d=>d.value),
  difficulty: document.getElementById('difficulty'),
  time: document.getElementById('time'),
  cuisine: document.getElementById('cuisine'),
  servings: document.getElementById('servings'),
  minRating: document.getElementById('minRating'), // New element reference
  partialMatch: document.getElementById('partialMatch'),
  sortByRating: document.getElementById('sortByRating'), // New element reference
  findBtn: document.getElementById('findBtn'),
  resetAll: document.getElementById('resetAll'),
  clearSelected: document.getElementById('clearSelected'),
  results: document.getElementById('results'),
  matchMeta: document.getElementById('matchMeta'),
  favoritesSection: document.getElementById('favoritesSection'),
  favoritesMeta: document.getElementById('favoritesMeta'),
  suggestions: document.getElementById('suggestions')
};

/* ====== Ingredient Chip Rendering ====== */
let selectedIngredients = new Set();
let dynamicIngredients = new Set(); // from user-added items

function renderIngredientChips(filter=""){
  const all = [...new Set([...getAllIngredients(), ...dynamicIngredients])];
  const terms = filter.toLowerCase().split(/\s+/).filter(Boolean);
  el.ingredientChips.innerHTML = "";
  all
    .filter(name => terms.length === 0 || terms.every(t => name.includes(t)))
    .forEach(name=>{
      const id = `ing-${name.replace(/\s+/g,'_')}`;
      const wrap = document.createElement('label');
      wrap.className='chip';
      wrap.title = name;
      wrap.innerHTML = `
        <input type="checkbox" id="${id}" ${selectedIngredients.has(name)?'checked':''}>
        <span>${name}</span>
      `;
      wrap.querySelector('input').addEventListener('change', (e)=>{
        if(e.target.checked) selectedIngredients.add(name);
        else selectedIngredients.delete(name);
      });
      el.ingredientChips.appendChild(wrap);
    });
}

/* ====== Helpers ====== */
function scaleQty(qty, servings){
  // Basic validation
  if (typeof qty !== 'number' || isNaN(qty)) {
    return qty; // Return original value if not a valid number
  }
  
  // Round nicely for display
  const v = qty * servings / 2; // base recipes roughly for 2 servings
  if (v < 1 && v !== 0) return Math.round(v*4)/4; // quarters
  if (v < 10) return Math.round(v*2)/2; // halves
  return Math.round(v);
}

function matchScore(recipe, selected){
  const need = recipe.ingredients.map(i=>i.name.toLowerCase());
  const have = new Set([...selected].map(s=>s.toLowerCase()));
  const matched = need.filter(n => have.has(n)).length;
  return {matched, total: need.length, score: matched/need.length};
}

function getAverageRating(recipeId) {
    const ratings = Object.values(store.ratings).filter(r => r.id === recipeId);
    if (!ratings.length) return 0;
    const sum = ratings.reduce((acc, curr) => acc + curr.rating, 0);
    return sum / ratings.length;
}

function passesFilters(recipe){
  const diets = el.diets();
  if (diets.length && !diets.every(d => recipe.diet.includes(d))) return false;
  const diff = el.difficulty.value;
  if (diff && diff !== recipe.difficulty) return false;
  const tmax = +el.time.value || Infinity;
  if (recipe.cooking_time > tmax) return false;
  const cui = el.cuisine.value;
  if (cui && cui !== recipe.cuisine) return false;
  const minRate = +el.minRating.value || 0;
  if ((store.ratings[recipe.id] || 0) < minRate) return false;
  return true;
}

/* ====== Main Search ====== */
function searchAndRender(){
  const selected = selectedIngredients;
  const allowPartial = el.partialMatch.checked;
  const servings = Math.max(1, parseInt(el.servings.value||"2",10));
  
  // The matching algorithm:
  // 1. Filter recipes based on user-selected criteria (diet, difficulty, time, cuisine, rating).
  // 2. For the remaining recipes, calculate a match score based on how many selected ingredients are in the recipe.
  // 3. Filter the list again to include only full matches (score is 1) or, if partial matches are allowed, recipes with at least one matching ingredient.
  // 4. Sort the final list of recipes.
  let list = RECIPES
    .filter(r => passesFilters(r))
    .map(r => {
      const ms = matchScore(r, selected);
      return {...r, _match: ms};
    })
    .filter(r => allowPartial ? r._match.matched>0 : r._match.score===1);

  if (el.sortByRating.checked){
    list.sort((a,b) => (store.ratings[b.id] || 0) - (store.ratings[a.id] || 0) || a.cooking_time - b.cooking_time);
  } else {
    list.sort((a,b) => b._match.score - a._match.score || a.cooking_time - b.cooking_time);
  }
  
  el.matchMeta.textContent = `${list.length} found${selected.size?` • using ${selected.size} ingredient${selected.size>1?'s':''}`:''}`;

  renderRecipeCards(el.results, list, servings);
  renderFavorites(); // refresh favorites
  renderSuggestions(); // refresh suggestions
}

/* ====== Recipe Card Renderer ====== */
function renderRecipeCards(container, recipes, servings){
  container.innerHTML = "";
  if (!recipes.length){
    container.innerHTML = `<div class="muted">No recipes found.</div>`;
    if (container.id === 'results'){
      container.innerHTML = `<div class="muted">No recipes match your filters. Try enabling <b>partial matches</b> or removing a diet restriction.</div>`;
    }
    return;
  }
  recipes.forEach(r=>{
    const card = document.createElement('div');
    card.className = 'card recipe';

    // header line
    const head = document.createElement('div');
    head.style.display='flex';
    head.style.alignItems='center';
    head.style.justifyContent='space-between';
    head.innerHTML = `
      <div>
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <strong style="font-size:1.05rem">${r.name}</strong>
          <span class="badge">ID: ${r.id}</span>
          <span class="badge">${r.cuisine}</span>
          <span class="badge">${r.difficulty}</span>
          <span class="badge">⏱ ${r.cooking_time} min</span>
        </div>
        <div class="muted small">Diet: ${r.diet.length? r.diet.join(", ") : "—"}</div>
      </div>
      <div class="actions">
        <span class="stars" data-id="${r.id}" title="Rate">${renderStars(store.ratings[r.id] || 0)}</span>
        <span class="heart" data-id="${r.id}" title="Favorite" style="font-size:1.3rem">${store.favorites.has(r.id) ? '❤️' : '🤍'}</span>
      </div>
    `;
    card.appendChild(head);

    // match bar
    if (r._match){
      const pct = Math.round(r._match.score*100);
      const bar = document.createElement('div');
      bar.style = "height:8px;background:#0b1220;border:1px solid rgba(255,255,255,.08);border-radius:999px;overflow:hidden;margin-top:6px";
      bar.innerHTML = `<div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--accent),var(--accent-2))"></div>`;
      const t = document.createElement('div');
      t.className='muted small';
      t.textContent = `Match: ${r._match.matched}/${r._match.total} (${pct}%)`;
      card.appendChild(bar);
      card.appendChild(t);
    }

    // ingredients grid & steps
    const body = document.createElement('div');
    body.className = 'grid-2';
    // ingredients (scaled)
    const ing = document.createElement('div');
    const ingList = r.ingredients.map(i=>{
      const qty = (typeof i.qty === 'number') ? scaleQty(i.qty, servings) : '';
      const u = i.unit || '';
      return `<li>${qty!=='' ? `<b>${qty}</b> ${u} ` : ''}${i.name}</li>`;
    }).join('');
    ing.innerHTML = `
      <div class="section-header"><h4 style="margin:0">Ingredients</h4><span class="tag">${servings} serving${servings>1?'s':''}</span></div>
      <ul class="ing-list">${ingList}</ul>
    `;
    body.appendChild(ing);

    const steps = document.createElement('div');
    const stepsList = (r.steps || []).map(s=>`<li>${s}</li>`).join('');
    steps.innerHTML = `
      <h4 style="margin:0 0 6px 0">Steps</h4>
      <ol style="margin:0;padding-left:18px">${stepsList}</ol>
    `;
    body.appendChild(steps);
    card.appendChild(body);

    // nutrition
    const per = r.nutrition || {calories:0,protein:0,fat:0,carbs:0};
    const totals = {
      calories: Math.round(per.calories * servings),
      protein: Math.round(per.protein * servings),
      fat: Math.round(per.fat * servings),
      carbs: Math.round(per.carbs * servings)
    };
    const table = document.createElement('div');
    table.innerHTML = `
      <div class="section-header"><h4 style="margin:6px 0">Nutrition</h4><div class="muted small">per serving (totals for ${servings}): ${totals.calories} kcal</div></div>
      <table>
        <tr><th></th><th>Per serving</th><th>Total (${servings})</th></tr>
        <tr><td>Calories</td><td>${per.calories}</td><td>${totals.calories}</td></tr>
        <tr><td>Protein (g)</td><td>${per.protein}</td><td>${totals.protein}</td></tr>
        <tr><td>Fat (g)</td><td>${per.fat}</td><td>${totals.fat}</td></tr>
        <tr><td>Carbs (g)</td><td>${per.carbs}</td><td>${totals.carbs}</td></tr>
      </table>
    `;
    card.appendChild(table);

    container.appendChild(card);
  });

  // bind hearts & stars
  container.querySelectorAll('.heart').forEach(h=>{
    h.addEventListener('click',()=>{
      const id = +h.dataset.id;
      if (store.favorites.has(id)) store.favorites.delete(id);
      else store.favorites.add(id);
      store.save();
      h.textContent = store.favorites.has(id) ? '❤️' : '🤍';
      renderFavorites();
      renderSuggestions();
    });
  });
  container.querySelectorAll('.stars').forEach(s=>{
    s.addEventListener('click',(e)=>{
      const id = +s.dataset.id;
      const next = cycleStar(store.ratings[id] || 0);
      store.ratings[id] = next;
      store.save();
      s.innerHTML = renderStars(next);
      renderFavorites();
      renderSuggestions();
    });
  });
}

function renderStars(n){
  const full = '★'.repeat(n);
  const empty = '☆'.repeat(5-n);
  return `<span style="letter-spacing:2px">${full}${empty}</span>`;
}
function cycleStar(n){ 
  return n === 5 ? 0 : n + 1;
}

/* ====== Favorites Section ====== */
function renderFavorites(){
  const servings = Math.max(1, parseInt(el.servings.value||"2",10));
  const likedRecipes = RECIPES.filter(r => store.favorites.has(r.id) || (store.ratings[r.id] > 0));
  likedRecipes.sort((a,b) => (store.ratings[b.id] || 0) - (store.ratings[a.id] || 0));
  el.favoritesMeta.textContent = `${likedRecipes.length} recipe${likedRecipes.length==1?'':'s'}`;
  renderRecipeCards(el.favoritesSection, likedRecipes, servings);
}

/* ====== Suggestions ====== */
function renderSuggestions(){
  const diets = el.diets();
  const likedIds = new Set([...store.favorites, ...Object.keys(store.ratings).filter(id => store.ratings[id] >=4).map(Number)]);
  const liked = RECIPES.filter(r=>likedIds.has(r.id));
  const likedCuisines = new Set(liked.map(r=>r.cuisine));
  const likedDiets = new Set(liked.flatMap(r=>r.diet));
  const selected = [...selectedIngredients];

  // Score candidates not already liked
  let candidates = RECIPES.filter(r=>!likedIds.has(r.id));
  if (diets.length) candidates = candidates.filter(r=>diets.every(d=>r.diet.includes(d)));

  candidates = candidates.map(r=>{
    const ingScore = matchScore(r, new Set(selected)).matched; // overlap with current selection
    const cuisineBoost = likedCuisines.has(r.cuisine) ? 1 : 0;
    const dietBoost = diets.every(d=>r.diet.includes(d)) ? 1 : 0;
    const ratingHint = Object.values(store.ratings).length ? 0.5 : 0; // small boost if you've rated anything
    return {...r, _s: ingScore + cuisineBoost + dietBoost + ratingHint};
  }).sort((a,b)=>b._s - a._s || a.cooking_time - b.cooking_time)
    .slice(0,4);

  renderRecipeCards(el.suggestions, candidates, Math.max(1, parseInt(el.servings.value||"2",10)));
}
function averageRating(){
  const vals = Object.values(store.ratings);
  if (!vals.length) return 0;
  return vals.reduce((a,b)=>a+b,0)/vals.length;
}

/* ====== Event bindings ====== */
el.ingredientSearch.addEventListener('input', e=>renderIngredientChips(e.target.value));
el.addIngredient.addEventListener('click', ()=>{
  const v = el.customIngredient.value.trim().toLowerCase();
  if (!v) {
    alert("Please enter a valid ingredient."); // User-friendly alert for empty input
    return;
  }
  dynamicIngredients.add(v);
  selectedIngredients.add(v);
  el.customIngredient.value = "";
  renderIngredientChips(el.ingredientSearch.value);
  searchAndRender();
});
el.findBtn.addEventListener('click', searchAndRender);
el.resetAll.addEventListener('click', ()=>{
  document.querySelectorAll('.diet').forEach(d=>d.checked=false);
  el.difficulty.value=""; el.time.value=""; el.cuisine.value=""; el.minRating.value="0";
  el.servings.value=2; el.partialMatch.checked=true; el.sortByRating.checked=false;
  selectedIngredients.clear(); dynamicIngredients.clear();
  renderIngredientChips(el.ingredientSearch.value);
  searchAndRender();
});
el.clearSelected.addEventListener('click', ()=>{
  selectedIngredients.clear();
  renderIngredientChips(el.ingredientSearch.value);
  searchAndRender();
});

['change','input'].forEach(evt=>{
  el.servings.addEventListener(evt, searchAndRender);
  el.difficulty.addEventListener(evt, searchAndRender);
  el.time.addEventListener(evt, searchAndRender);
  el.cuisine.addEventListener(evt, searchAndRender);
  el.minRating.addEventListener(evt, searchAndRender);
  el.partialMatch.addEventListener(evt, searchAndRender);
  el.sortByRating.addEventListener(evt, searchAndRender);
  document.querySelectorAll('.diet').forEach(d=>d.addEventListener(evt, searchAndRender));
});

/* ====== Init ====== */
renderIngredientChips();
searchAndRender();
renderFavorites();