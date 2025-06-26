import React, { useState, useEffect, useRef } from 'react';
import BookCover from '../components/BookCover';
import '../css/BookCoverList.css';

const books = [
  { title: '클린 코드', author: '로버트 C. 마틴', cover: 'https://covers.openlibrary.org/b/id/9645106-L.jpg' },
  { title: '자바스크립트 완벽 가이드', author: '데이비드 플래너건', cover: 'https://covers.openlibrary.org/b/id/10523338-L.jpg' },
  { title: '이펙티브 자바', author: '조슈아 블로크', cover: 'https://covers.openlibrary.org/b/id/8228691-L.jpg' },
  { title: '리팩터링', author: '마틴 파울러', cover: 'https://covers.openlibrary.org/b/id/10523339-L.jpg' },
  { title: '코드 컴플리트', author: '스티브 맥코넬', cover: 'https://covers.openlibrary.org/b/id/10523340-L.jpg' },
  { title: '프로그래밍 심리학', author: '제럴드 와인버그', cover: 'https://covers.openlibrary.org/b/id/10523341-L.jpg' },
  { title: 'GoF의 디자인 패턴', author: '에리히 감마 외', cover: 'https://covers.openlibrary.org/b/id/10523342-L.jpg' },
  { title: '러닝 파이썬', author: '마크 루츠', cover: 'https://covers.openlibrary.org/b/id/10523343-L.jpg' },
  { title: '파이썬 코딩의 기술', author: '브렛 슬라킨', cover: 'https://covers.openlibrary.org/b/id/10523344-L.jpg' },
  { title: '모던 자바스크립트 Deep Dive', author: '이웅모', cover: 'https://covers.openlibrary.org/b/id/10523345-L.jpg' },
  { title: 'Do it! 타입스크립트', author: '김민준', cover: 'https://covers.openlibrary.org/b/id/10523346-L.jpg' },
  { title: '실용주의 프로그래머', author: '앤드류 헌트', cover: 'https://covers.openlibrary.org/b/id/10523347-L.jpg' },
  { title: '클린 아키텍처', author: '로버트 C. 마틴', cover: 'https://covers.openlibrary.org/b/id/10523348-L.jpg' },
  { title: '함수형 자바스크립트', author: '마이클 포거스', cover: 'https://covers.openlibrary.org/b/id/10523349-L.jpg' },
  { title: '프로그래밍 대회에서 배우는 알고리즘 문제 해결 전략', author: '구종만', cover: 'https://covers.openlibrary.org/b/id/10523350-L.jpg' },
  { title: '유닉스의 역사', author: '브라이언 커니핸', cover: 'https://covers.openlibrary.org/b/id/10523351-L.jpg' },
  { title: '컴퓨터 시스템 구조', author: '앤드류 S. 타넨바움', cover: 'https://covers.openlibrary.org/b/id/10523352-L.jpg' },
  { title: '파이썬 알고리즘 인터뷰', author: '박상길', cover: 'https://covers.openlibrary.org/b/id/10523353-L.jpg' },
  { title: '러닝 타입스크립트', author: '레미 하비라', cover: 'https://covers.openlibrary.org/b/id/10523354-L.jpg' },
  { title: '코딩 인터뷰 완전 분석', author: '게일 맥도웰', cover: 'https://covers.openlibrary.org/b/id/10523355-L.jpg' },
  { title: '프로그래머의 뇌', author: '펠리나 헤르만스', cover: 'https://covers.openlibrary.org/b/id/10523356-L.jpg' },
  { title: 'SQL 첫걸음', author: '크리스 뉴컴', cover: 'https://covers.openlibrary.org/b/id/10523357-L.jpg' },
  { title: '리눅스 커널의 구조와 원리', author: '서영진', cover: 'https://covers.openlibrary.org/b/id/10523358-L.jpg' },
  { title: '파이썬으로 배우는 알고리즘 트레이딩', author: '이승준', cover: 'https://covers.openlibrary.org/b/id/10523359-L.jpg' },
  { title: '자바 ORM 표준 JPA 프로그래밍', author: '김영한', cover: 'https://covers.openlibrary.org/b/id/10523360-L.jpg' },
];

const PAGE_SIZE = 20;

function BookCoverList() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('title');
  const loader = useRef(null);

  // 검색 및 정렬 적용
  const filteredBooks = books
    .filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === 'title') return a.title.localeCompare(b.title);
      if (sort === 'author') return a.author.localeCompare(b.author);
      return 0;
    });

  useEffect(() => {
    setVisibleCount(PAGE_SIZE); // 검색/정렬 변경 시 첫 페이지로
  }, [search, sort]);

  useEffect(() => {
    const handleScroll = () => {
      if (!loader.current) return;
      const { top } = loader.current.getBoundingClientRect();
      if (top < window.innerHeight + 100) {
        setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, filteredBooks.length));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredBooks.length]);

  return (
    <div>
      <div className="book-controls">
        <div className='search'>
          <input
            type="text"
            placeholder="책 제목 또는 저자 검색"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="book-search"
          />
          <button className="book-search-btn">검색</button>
        </div>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="book-sort">
          <option value="title">제목순</option>
          <option value="author">저자순</option>
        </select>
      </div>
      <div className="book-list">
        {filteredBooks.slice(0, visibleCount).map((book) => (
          <BookCover key={book.title + book.author} book={book} />
        ))}
      </div>
      {visibleCount < filteredBooks.length && (
        <div ref={loader} className="loader">Loading...</div>
      )}
      {filteredBooks.length === 0 && (
        <div className="no-result">검색 결과가 없습니다.</div>
      )}
    </div>
  );
}

export default BookCoverList; 