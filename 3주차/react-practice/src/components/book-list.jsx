const BookList = ({ bookList, handleSelectedBookChange }) => {

  return <>
    {bookList.map((book) => (
      <div key={book.id} onClick={() => handleSelectedBookChange(book.id)}>
        <span>{book.title}</span> - <span>{book.author}</span>
      </div>
    ))}
  </>
}

export default BookList;