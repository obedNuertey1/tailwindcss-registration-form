function loadingAnimation(query:string):any{
    const loading:any = document.querySelector(query);
    const myInterval:any = setInterval(()=>{
      loading.innerText = "Loading..."
      setTimeout(()=>{
        loading.innerText = "Loading.";
        setTimeout(()=>{
          loading.innerText = "Loading..";
          setTimeout(()=>{
            loading.innerText = "Loading...";
          }, 340)
        },330);
      },330)
    }, 1000);
    
    return ()=>{
      clearInterval(myInterval);
    };
}
export default loadingAnimation;