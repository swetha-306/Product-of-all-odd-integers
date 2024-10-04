let m=parseInt(prompt("enter the num1:"));
let n=parseInt(prompt("enter the num2"));
if(m>n)
    alert(1);
else{
    let product =1;
    for(let i=m;i<=n;i++){
        if(i%2!=0){
            product=product*i;
        }
    
    }
    alert(product);
}