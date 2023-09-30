export default(time:number):Promise<any>=>{
    return new Promise((resolve:any):any=>{
        setTimeout(resolve, time);
    });
};