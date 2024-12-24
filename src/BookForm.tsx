// BookForm.tsx
import React, { useState, useEffect } from 'react';
import { Book } from './types';

interface BookFormProps {
  onSave: (book: Book) => void;
  existingBook?: Book; // Optional prop for editing an existing book
}

const BookForm: React.FC<BookFormProps> = ({ onSave, existingBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState(0);

  // Populate the form fields if there's an existing book being edited
  useEffect(() => {
    if (existingBook) {
      setTitle(existingBook.title);
      setAuthor(existingBook.author);
      setGenre(existingBook.genre);
      setPrice(existingBook.price);
    }
  }, [existingBook]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBook: Book = {
      id: existingBook ? existingBook.id : Math.random().toString(36).substr(2, 9), // Use existing id if editing
      title,
      author,
      genre,
      price,
    };
    onSave(newBook); // Call the onSave handler with the book data
    setTitle('');
    setAuthor('');
    setGenre('');
    setPrice(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Author</label>
        <input
          type="text"
          className="form-control"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Genre</label>
        <input
          type="text"
          className="form-control"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {existingBook ? 'Update Book' : 'Add Book'}
      </button>
    </form>
  );
};

export default BookForm;
