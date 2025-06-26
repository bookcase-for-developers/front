import React, { useState } from 'react';
import '../css/AddBook.css';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [cover, setCover] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제로는 서버로 전송, 여기선 콘솔 출력
    console.log({ title, author, cover, desc });
    alert('책이 추가되었습니다! (실제 저장은 구현 필요)');
    setTitle(''); setAuthor(''); setCover(''); setDesc('');
  };

  return (
    <div className="add-book-container">
      <h2>새 책 추가</h2>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <label>
          제목
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        </label>
        <label>
          저자
          <input type="text" value={author} onChange={e => setAuthor(e.target.value)} required />
        </label>
        <label>
          커버 이미지 URL
          <input type="url" value={cover} onChange={e => setCover(e.target.value)} placeholder="https://..." required />
        </label>
        <label>
          간단한 설명 (선택)
          <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="책에 대한 간단한 설명" />
        </label>
        <button type="submit" className="add-book-btn">책 추가</button>
      </form>
    </div>
  );
}

export default AddBook; 