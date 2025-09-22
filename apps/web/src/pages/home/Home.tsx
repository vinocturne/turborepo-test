import {AntButton, AntInput, AntModal, AntTable, Button, styled} from "@repo/ui";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const Home = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <Container>
            <div style={{marginBottom: '20px'}}>web project</div>
            <StyledButton appName={'web'} onClick={() => navigate('/test')}>테스트로 가기 버튼</StyledButton>
            <AntButton>Antd 버튼</AntButton>
            <AntInput placeholder={'Antd Input'} style={{ width: '30%' }}/>
            <AntTable columns={[{title: '컬럼1'}, {title: '컬럼2'}, {title: '컬럼3'}]}/>
            <AntButton onClick={() => setModalOpen(true)}>모달 버튼</AntButton>
            <AntModal open={modalOpen} onCancel={() => setModalOpen(false)}>
                <div>Modal 열림</div>
            </AntModal>
        </Container>
    )
}

const Container = styled.div`
    margin: 0 auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`

const StyledButton = styled(Button)`
    display: flex;
    border-radius: 12px;
    border: 1px solid #f2f2f2;
    background-color: #f0f0f0;
    cursor: pointer;
    &:hover {
        background-color: #ddd;
        transition: all 0.2s ease-in-out;
        color: #aaa;
    }
`