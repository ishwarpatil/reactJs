export const loginAction=(fields)=>{
    if(fields.email!=='' && fields.email==='admin'){
        if(fields.password!=='' && fields.password==='admin'){
            return{
                type:'LOGIN',
                payload:'success'
            }
        }
    }
    else{
        return{
            type:'LOGIN',
            payload:'fail'
        }
    }
}

export const logoutAction=()=>{
        return{
            type:'LOGOUT',
            payload:'logout'
        }
}

export const fetchUser=()=>{
    return(dispatch=>{
        return fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
            console.log(response);
            return response.json();
        }).then((user)=>{
            console.log(user);
            dispatch({
                type:'FETCH_USER',
                user
            })
        });
    });
}

export const fetchTodos=()=>{
    return(dispatch=>{
        return fetch('https://jsonplaceholder.typicode.com/todos').then((response)=>{
            console.log(response);
            return response.json();
        }).then((todos)=>{

            dispatch({
                type:'FETCH_TODOS',
                todos
            })
        });
    });
}

export const fetchAlbums=()=>{
    return(dispatch=>{
        return fetch('https://jsonplaceholder.typicode.com/albums').then((response)=>{
            console.log(response);
            return response.json();
        }).then((albums)=>{

            dispatch({
                type:'FETCH_ALBUMS',
                albums
            })
        });
    });
}