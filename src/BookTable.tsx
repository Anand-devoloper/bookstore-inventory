// BookTable.tsx
import React from 'react';
import { Book } from './types';

interface BookTableProps {
  books: Book[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const BookTable: React.FC<BookTableProps> = ({ books, onEdit, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
            <td>{book.price}</td>
            <td>
              <button onClick={() => onEdit(book.id)} className="btn btn-primary">Edit</button>
              <button onClick={() => onDelete(book.id)} className="btn btn-danger">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
