import { useState, useEffect } from 'react'
import './App.css'
import Container from './components/container';
import mockBooks from '../mock'
import BookList from './components/book-list';

const App = () => {
  const [keyword, setKeyword] = useState('')
  const [displayedBooks, setDisplayedBooks] = useState(mockBooks ?? [])
  const [selectedBook, setSelectedBook] = useState(null)

  useEffect(() => {
    localStorage.setItem('keyword', keyword)
  }, [keyword])

  const handleInputChange = (e) => {
    setKeyword(e.target.value)
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      // 값을 업데이트
      const newBooks = mockBooks.filter((book) => 
        book.title.includes(keyword)
      )
      setDisplayedBooks(newBooks)
    }
  }

  const handleSelectedBookChange = (bookId) => {
    setSelectedBook(bookId)
  }

  return (
    <>
      <Container title="읽을 책">
        {selectedBook}
        <input
          type="text"
          value={keyword}
          onChange={handleInputChange}
          onKeyUp={handleEnter}
        />
        <BookList
          bookList={displayedBooks}
          handleSelectedBookChange={handleSelectedBookChange}
        />
      </Container>
      <Container title="만든이">
        <div>김도연</div>
        <div>doyeonkim@gmail.com</div>
      </Container>
    </>
  )
}

export default App
