var par = document.getElementById('inner');
var container = [null];
function newquote() {
    var random_var = Math.floor(Math.random() * 5);
    var prv = random_var;
    container.push(random_var);
    if (prv === container[container.length - 2]) {
        par.innerHTML = `“Be yourself; everyone else is already taken.”</br>
            -- Oscar Wilde`;
    }
    else {
        if (random_var == 1)
            par.innerHTML = `“So many books, so little time.“</br>
    -- Frank Zappa`
        else if (random_var == 0)
            par.innerHTML = `“A room without books is like a body without a soul.”</br>
    -- Marcus Tullius Cicero`;
        else if (random_var == 2)
            par.innerHTML = `
    “You only live once, but if you do it right, once is enough.”</br>
    -- Mae West`;
        else if (random_var == 3)
            par.innerHTML = `“Be the change that you wish to see in the world.”</br>
    -- Mahatma Gandhi`;
        else if (random_var == 4)
            par.innerHTML = `
    “In three words I can sum up everything I've learned about life: it goes on.”</br>
    -- Robert Frost`;
    }
    container.shift();
}