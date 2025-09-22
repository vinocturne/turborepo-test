import {Button} from "@repo/ui";
import {useNavigate} from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <div style={{marginBottom: '20px'}}>web project</div>
            <Button appName={'web'} onClick={() => navigate('/test')}>테스트로 가기 버튼</Button>
        </>
    )
}