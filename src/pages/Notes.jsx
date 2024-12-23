import { Form, useLoaderData } from "react-router";

const Notes = () => {
  const notes=useLoaderData();
  console.log(notes);
  return (
   <div>
    <Form method="post">
      <input type="text" placeholder="Enter Your Text" name="title"  />
      <button >Create Notes</button>
    </Form>
    <ul>
      {notes.map(note=><li key={note.id}>{note.title}</li>)}
    </ul>
   </div>
     
  );
};



export default Notes;
