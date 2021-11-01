import React, {useState, useEffect} from 'react';
import {BasicLayout} from "../layouts/BasicLayout/BasicLayout";
import { useRouter} from "next/router";
import useAuth from "../hooks/useAuth";
import {getMeApi} from "../api/user";

const Account = () => {

    //Todo state
    const [user, setUser] = useState(undefined);
    const {auth, logout} = useAuth()

    //Todo router
    const router = useRouter()

    useEffect(() => {
        (async() => {
            const response = await getMeApi(logout)
            setUser( response || null)
        })()
    }, [auth]);

    //verificando usuario
    if(user === undefined) return null

    //validando sesión
    if(!auth && !user){
        router.replace('/');
        return null
    }
    return (
        <BasicLayout>
            <h2> Account </h2>
        </BasicLayout>
    );
};

export default Account
