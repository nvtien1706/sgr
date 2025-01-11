//----------------Funtion-------------------
//Câu 3
/*
let str= prompt('Nhập string');
let arr = str.split(''); 
function input(a)
{
    console.log("String: " + a);
}
input(arr)
function check(a)
{
    for(let i=0;i<a.length;i++)
    {
        if(a[i]<a[i-1])
        {
            console.log('False');
            return;
        }       
    }
    console.log('True');
}
check(arr)


//Câu 6

const arr = prompt('Array: ').split(' ');
function input(a)
{
    console.log("Array: " + a);
}
input(arr)
    value=0
    res=0
function check(a)
{
    count=0
    for(let i =0;i<a.length;i++)
    {
        for(let j =0;j<a.length;j++)
        {
            if(a[j]==a[i])
                count++;  
        }
        if(count>=res)
        {
            value = a[i]
            res=count
        }
        count = 0
    }
    console.log('Gia tri: ')
    console.log(value);
    console.log('So lan: ')
    console.log(res);  
}
check(arr)


//Câu 7

let str= prompt('Nhập string');
function input(a)
{
    console.log("String: " + a);
}
input(str)
function check(a)
{
    for(let i=0;i<a.length-3;i++)
    {
        if(a[i]+a[i+1]+a[i+2]+a[i+3]==='java')
        {
            console.log('True');
            return;
        }       
    }
    console.log('False');
}
check(str)

//câu 9

let str= prompt('Nhập string');
function input(a)
{
    console.log("String: " + a);
}
input(str)
function check(a)
{
    let count = 0;
    let maxcount = 0;
    let position = 0;
    for(let i = 0;i<=a.length;i++)
    {
        if(a[i]!=' ')
        {
            count++;

        }
        else
        {
            if(count > maxcount){
                maxcount = count;
                position = i - count;
            }
            count = 0;
        }
    }
    let longest = a.substring(position,maxcount+position)
    console.log(longest);
    
}
check(str)

*/
/*
//-----------------Date-----------------------
// Bai 1

function getDate1()
{
    const date = new Date
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    console.log(`${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`);
}
getDate1()


// Bai 2

function getDate2()
{
    const date = new Date
    console.log(`${date.getMonth()+1}/${date.getDay()}/${date.getFullYear()}`);
    console.log(`${date.getMonth()+1}-${date.getDay()}-${date.getFullYear()}`);
    console.log(`${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`);
}
getDate2()


//Bai 8
let str= prompt('Nhập Tháng');
let month = Number(str); 
function getMonth()
{
    if(month <=12 && month >0)
    {

        let arr = ['Một', 'Hai', 'Ba', 'Bốn', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín', 'Mười', 'Mười Một', 'Mười Hai']
        console.log('Tháng',arr[month-1]);
    }
    else
    {
        console.log('lỗi');
        
    }
}
getMonth()
*/


const arr = [
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", P_name:"Charmander"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", P_name:"Chameleon"},
    {src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", P_name:"Charizard"}  
]
const ptr = document.getElementById("img")
const Name = document.getElementById("pokemon_name")
let count = 0
function ChangeImg()
{
    count = (count + 1) % arr.length
    ptr.src = arr[count].src
    Name.innerText = arr[count].P_name
}











