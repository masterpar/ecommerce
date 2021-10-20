import {Header} from "../../components/Header/Header";


export const BasicLayout = ({ children }) => {


    return (
        <>
            <Header />
            <div className='wrapper'>
                <p>{ children } </p>
            </div>
        </>
    );
};
