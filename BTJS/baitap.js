

  // Bài 1,2
    function displayDateTime() {
    const now = new Date();
    document.getElementById("datetime").textContent = now.toLocaleString();
    document.getElementById("fulldate").textContent = now.toISOString();
  }

displayDateTime()


  function submitTasks() {

    const outputs = document.getElementById("outputList");
    outputs.innerHTML = "";
    // Bài 3:
    const numberCheck = document.getElementById("numberCheck").value;
    let arr = numberCheck.split(''); 
    function check(a)
    {
    for(let i=1;i<a.length;i++)
    {
        if(a[i]<a[i-1])
        {
            outputs.innerHTML += `<li>False</li>`;
            return;
        }       
    }
    outputs.innerHTML += `<li>True</li>`;
    }
    check(arr)

    //Bài 4:
    const nextCharString = document.getElementById("nextCharString").value;
    function thenextindex(input) {
        let result = ""; 
        for (let i = 0; i < input.length; i++) {
            result += String.fromCharCode(input.charCodeAt(i) + 1);
        }
        return result; 
    }
    const nextCharResult = thenextindex(nextCharString);
    outputs.innerHTML += `<li>${nextCharResult}</li>`;


    //Bài 5
    function centersubstr(input) {
        if (input.length % 2 !== 0) {
            return input.charAt(Math.floor(input.length / 2)); 
        } 
        else {
            const mid1 = input.charAt(input.length / 2 - 1); 
            const mid2 = input.charAt(input.length / 2);
            return mid1 + mid2; 
        }
    }
    const centerString = document.getElementById("centerString").value;
    const centerResult = centersubstr(centerString);
    outputs.innerHTML += `<li>${centerResult}</li>`;

    // Bài 6:

    const arr6 = document.getElementById("findLetter").value;
    value=0
    res=0
function check6(a)
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
    outputs.innerHTML += `<li>Gia tri: ${value} (${res} lan)</li>`;
}
check6(arr6)

    //Bai 7

let str7=  document.getElementById("javaString").value;

function check7(a)
{
    for(let i=0;i<a.length-3;i++)
    {
        if(a[i]+a[i+1]+a[i+2]+a[i+3]==='java')
        {
            outputs.innerHTML += `<li>True</li>`;
            return;
        }       
    }
    outputs.innerHTML += `<li>False</li>`;
}
check7(str7)

    // Bai 8:

    let str8= document.getElementById("monthNumber").value;
let month = Number(str8); 
function getMonth8()
{
    if(month <=12 && month >0)
    {

        let arr = ['Một', 'Hai', 'Ba', 'Bốn', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín', 'Mười', 'Mười Một', 'Mười Hai']
        outputs.innerHTML += `<li>Tháng ${arr[month-1]}</li>`;

    }
    else
    {
        outputs.innerHTML += `<li>Lỗi</li>`;
        
    }
}
getMonth8()

    // Bai 9:

    let str9= document.getElementById("longestWord").value;

function check9(a)
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
    outputs.innerHTML += `<li>${longest}</li>`;
    
}
check9(str9)










  }


