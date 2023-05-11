import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const AppContext = ({children}) => {

    const [user, setUser] = useState({name: null, id: null});

    useEffect(() => {
        const id = localStorage.getItem('id');
        if (id) {
            axios.get('https://63069afec0d0f2b8011f9944.mockapi.io/cadastro')
            .then((response) => {
                const usuario = response.data.find((item) => item.id === id);
                
                if (usuario) {
                setUser({name: usuario.user, id: usuario.id});
                }
            })
            .catch((error) => {
                console.log('Erro:', error);
            });
        }
    },[])

    return <MyContext.Provider value={{user, setUser}}>{children}</MyContext.Provider>
}

export default AppContext;