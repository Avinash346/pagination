export const Data=async()=>{
    const res=await fetch("https://dummyjson.com/products?limit=400");
    const data=await res.json();
    
    return data;
}