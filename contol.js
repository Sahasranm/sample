//it is for forEach loop
arr = ['1','2','3','4']
arr.forEach((element,i) => {
console.log(element,i);
});
///
// It is for await and async
arrfun = async()=>{
    setTimeout(()=>{
       console.log("hello")
    },4000)
    return(await "hello")
    
}
console.log(arrfun());
arrfun().then((a)=>
{
    console.log(a)
});
// to remove the promise we should use then 
//By using then we can overcome the promise message shown in the function