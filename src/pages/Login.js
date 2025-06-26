import React, { useState } from 'react';
import '../css/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('로그인 시도:', { email, password });
        // 로그인 로직 추가 예정
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>회원가입 / 로그인</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">이메일</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="이메일을 입력하세요"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="비밀번호를 입력하세요"
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">
                        회원가입 / 로그인
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;