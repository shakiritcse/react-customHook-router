export const loader = async () => {
  const res = await fetch(`http://localhost:3000/todo`);
  const data = await res.json();
  return data;
};
export const action=async({request})=>{
 const formData=await request.formData();
 const title=formData.get("title")
 await fetch(`http://localhost:3000/todo`,{
    method:"POST",
    body:JSON.stringify({
        title:title,
        completed:false
    }),
    headers:{
        "Content-Type":"application/json"
    }
 })
}