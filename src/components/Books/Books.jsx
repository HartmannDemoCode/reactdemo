import { useState, useEffect } from 'react'

export default function Books() {
    const url = "http://localhost:4000/books";
    const [books, setBooks] = useState([{id:1, title:"title 1"}]);
    useEffect(()=>{
        const promise = fetch(url);
        promise.then((response)=>{
            return response.json();
        }).then(data=>{
            console.log(data);
            setBooks(data);
        })
    }, []);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const formObject = new FormData(form);
        const formData = Object.fromEntries(formObject.entries());
        console.log(formData);
        fetch(url, {method: form.method, body:JSON.stringify(formData)})
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setBooks([...books,data]);
        })
    }

  return (
    <>
    <form method="post" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="set title"/>
        <input type="text" name="author" placeholder="set author"/>
        <input type="text" name="rating" placeholder="set rating"/>
        <input type="submit" value="Enter book"/>
    </form>
    <table>
        <thead>
            <tr>
                <th>title</th>
                <th>author</th>
                <th>rating</th>
                </tr>
        </thead>
        <tbody>

    {
        books.map(book=><tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.rating}</td>
            </tr>)
    }
        </tbody>
    </table>
    </>
  )
}
