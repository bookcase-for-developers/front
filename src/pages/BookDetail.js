import React, { useState } from 'react';
import '../css/BookDetail.css'

// 목업 데이터 예시
const mockBook = {
  id: 1,
  title: '클린 코드',
  author: '로버트 C. 마틴',
  cover: 'https://covers.openlibrary.org/b/id/9645106-L.jpg',
  rating: 4.2,
  reviews: [
    { user: 'dev1', rating: 5, text: '정말 유익한 책이에요!' },
    { user: 'dev2', rating: 4, text: '실무에 많은 도움이 됐어요.' },
  ],
};

function BookDetail() {
  const [reviews, setReviews] = useState(mockBook.reviews);
  const [userRating, setUserRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleRatingChange = (r) => setUserRating(r);
  const handleReviewChange = (e) => setReviewText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userRating || !reviewText) return;
    setReviews([
      ...reviews,
      { user: 'me', rating: userRating, text: reviewText },
    ]);
    setUserRating(0);
    setReviewText('');
  };

  return (
    <div className="book-detail-container">
      <div className="book-detail-header">
        <img src={mockBook.cover} alt={mockBook.title} className="book-detail-cover" />
        <div className="book-detail-info">
          <h2>{mockBook.title}</h2>
          <div className="book-detail-author">{mockBook.author}</div>
          <div className="book-detail-rating">평점: {mockBook.rating.toFixed(1)} / 5</div>
        </div>
      </div>
      <div className="book-detail-reviews">
        <h3>리뷰</h3>
        <form className="review-form" onSubmit={handleSubmit}>
          <div className="rating-input">
            <span>평점: </span>
            {[1,2,3,4,5].map((n) => (
              <button type="button" key={n} className={userRating >= n ? 'star selected' : 'star'} onClick={() => handleRatingChange(n)}>
                ★
              </button>
            ))}
          </div>
          <textarea
            value={reviewText}
            onChange={handleReviewChange}
            placeholder="리뷰를 입력하세요"
            required
          />
          <button type="submit" className="submit-review-btn">리뷰 작성</button>
        </form>
        <ul>
          {reviews.map((r, idx) => (
            <li key={idx} className="review-item">
              <span className="review-user">{r.user}</span> <span className="review-rating">★ {r.rating}</span>
              <div className="review-text">{r.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BookDetail;
