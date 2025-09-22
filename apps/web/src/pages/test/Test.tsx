import {Button} from "@repo/ui";
import {useNavigate} from "react-router-dom";

export const Test = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>Test Page</div>
            <Button appName={'web'} onClick={() => navigate('/')}>홈으로 가기</Button>
        </>
    )
}