import '../css/BookCover.css'
import { useNavigate } from 'react-router-dom';

const BookCover = ({book}) => {
  const navigate = useNavigate();

  const goToDetail = (id) => {
    navigate(`/book/${id}`);
  }

  return (
    <div className="book-item" key={book.idx} onClick={() => goToDetail(book.idx)}>
            <img src={book.cover} alt={book.title} className="book-cover" />
            <div className="book-info">
              <div className="book-title">{book.title}</div>
              <div className="book-author">{book.author}</div>
              <div className="book-comments">댓글 {10}개</div>
            </div>
    </div>
  );
};

export default BookCover;