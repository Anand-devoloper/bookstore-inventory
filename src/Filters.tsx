// Filters.tsx
import React from 'react';

interface FiltersProps {
  onFilterByGenre: (genre: string) => void;
  onFilterByAuthor: (author: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterByGenre, onFilterByAuthor }) => {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Filter by genre"
        onChange={(e) => onFilterByGenre(e.target.value)}
        className="form-control"
      />
      <input
        type="text"
        placeholder="Filter by author"
        onChange={(e) => onFilterByAuthor(e.target.value)}
        className="form-control"
      />
    </div>
  );
};

export default Filters;
