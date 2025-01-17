const arr = [
    
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", P_name:"Bulbasaur"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", P_name:"Ivysaur"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", P_name:"Venusaur"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", P_name:"Charmander"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", P_name:"Chameleon"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", P_name:"Charizard"},  
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", P_name:"Squirtle"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png", P_name:"Wartotle"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png", P_name:"Blastoise"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png", P_name:"Caterpie"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png", P_name:"Metapod"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png", P_name:"Butterfree"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png", P_name:"Weedle"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png", P_name:"Kakuna"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png", P_name:"Beedrill"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png", P_name:"Pidgey"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png", P_name:"Pidgeotto"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png", P_name:"Pidgeot"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png", P_name:"Rattata"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png", P_name:"Raticate"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png", P_name:"Spearow"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png", P_name:"Fearow"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png", P_name:"Ekans"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png", P_name:"Arbok"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", P_name:"Pikachu"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png", P_name:"Raichu"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png", P_name:"Sandshrew"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png", P_name:"Sandslash"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png", P_name:"Nidoran-F"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png", P_name:"Nidorana"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png", P_name:"Nidoqueen"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png", P_name:"Nidoran-M"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png", P_name:"Nidorino"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png", P_name:"Nidoking"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png", P_name:"Clefairy"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png", P_name:"Clefable"}
]


const output = document.getElementById("out");
function AddPokemon(i)
{

        output.innerHTML += `
        <div class="container">
        <img class="img" src="${arr[i].src}" alt="pokemon">
        <p class="pokemon_name">
        ${arr[i].P_name}
        </p>
        </div>
        `
    
}
function Addinsecond()
{
    const count = document.getElementById("pokemon-number").value; 
    output.innerHTML = "";
    let i = 0
    const intervalId = setInterval(() => {
        if (i < count) {
            AddPokemon(i);
            i++;
        } else {
            clearInterval(intervalId); 
        }
    }, 1000);


}










