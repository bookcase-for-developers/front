import '../css/BookCover.css'

const BookCover = ({book}) => {
  return (
    <div className="book-item" key={book.idx}>
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