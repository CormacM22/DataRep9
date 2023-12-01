import BookItem from "./bookItem";

function Books(props){


    // Passing the book data as a prop
    return props.myBooks.map(
        (book)=>{
            return <BookItem myBook={book} key={book._id} Reload={()=>{props.ReloadData();}}></BookItem>
        }
    );

}

export default Books;