import {Container} from "semantic-ui-react";
import {Header} from "../../components/Header/Header";


export const BasicLayout = ({ children }) => {


    return (
        <Container fluid className='basic-layout'>
            <Header />
            <Container className='content'>
                <h2>{ children }</h2>
            </Container>
        </Container>
    );
};
