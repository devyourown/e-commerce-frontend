import React, {useState, MouseEvent} from 'react';
import {Link} from "react-router-dom";
import useAsync from "../../hooks/useAsync";
import {findPasswordApi} from "../../api";

function FindPasswordPage() {
    const [email, setEmail] = useState("");
    const [isLoading, loadingError, findPasswordAsync] = useAsync(findPasswordApi);
    const handleValueChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleSend = async () => {

        const regex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        if (!regex.test(email)) {
            alert('이메일 형식이 올바르지 않습니다.');
            return;
        }

        const result = await findPasswordAsync({email : email});
        if (!result) return ;

        console.log(`Link send to ${email}`);
    }

    return (
        <>
            <h2>비밀번호 재설정하기</h2>
            <div>새로운 비밀번호를 설정할 수 있는 링크를 이메일로 전송해 드려요.</div>
            <label>email</label>
            <input
                className="input-field"
                type="text"
                name="email"
                value={email}
                onChange={handleValueChange}
                placeholder="email"
            />
            <button disabled={isLoading} onClick={handleSend}>재설정 링크 전송하기</button>
            {loadingError?.message ? <p>loadingError.message</p> : undefined}
            <Link to={"/login"}><div>로그인 페이지로 돌아가기</div></Link>
        </>
    );
}

export default FindPasswordPage;