import React, { useState } from 'react';
import { Book } from './types'; // Assuming you have a Book type defined
import BookForm from './BookForm';
import BookTable from './BookTable';
import Filters from './Filters';
import './App.css';

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]); // Stores the books
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]); // Stores filtered books based on genre/author
  const [editingBook, setEditingBook] = useState<Book | null>(null); // Book currently being edited

  // Add or update a book
  const handleAddOrEditBook = (book: Book) => {
    if (editingBook) {
      // If editing an existing book, update the book list with the updated book
      setBooks((prevBooks) => prevBooks.map((b) => (b.id === book.id ? book : b)));
    } else {
      // If adding a new book, simply append it to the list
      setBooks((prevBooks) => [...prevBooks, book]);
    }
    
    setFilteredBooks((prevBooks) => [...prevBooks, book]); // Update the filtered list as well
    setEditingBook(null); // Clear the editing state after saving
  };

  // Delete a book by its id
  const handleDeleteBook = (id: string) => {
    setBooks(books.filter((book) => book.id !== id));
    setFilteredBooks(filteredBooks.filter((book) => book.id !== id)); // Remove from the filtered list
  };

  // Set the current book being edited
  const handleEditBook = (id: string) => {
    const book = books.find((b) => b.id === id);
    if (book) {
      setEditingBook(book); // Set the selected book for editing
    }
  };

  // Filter books by genre
  const handleFilterByGenre = (genre: string) => {
    setFilteredBooks(books.filter((book) => book.genre.toLowerCase().includes(genre.toLowerCase())));
  };

  // Filter books by author
  const handleFilterByAuthor = (author: string) => {
    setFilteredBooks(books.filter((book) => book.author.toLowerCase().includes(author.toLowerCase())));
  };

  return (
    <div className="container">
      <h1>Bookstore Inventory</h1>
      <div className="app-content">
        <div className="left-side">
          <Filters onFilterByGenre={handleFilterByGenre} onFilterByAuthor={handleFilterByAuthor} />
          <BookForm onSave={handleAddOrEditBook} existingBook={editingBook || undefined} />
        </div>
        <div className="right-side">
          <BookTable books={filteredBooks} onEdit={handleEditBook} onDelete={handleDeleteBook} />
        </div>
      </div>
    </div>
  );
};

export default App;
