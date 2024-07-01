function coinFlip() 
{

    let num = Math.random();
    
    if (num < 0.5) {
        document.getElementById("result").innerHTML = "Heads";
    }
    else
    {
        document.getElementById("result").innerHTML = "Tails";
    }
}