export const getLocationState = (location: any) =>{
    let activePage = location.pathname.split('/')[1] || '';

    return {
        activePage:activePage
    }         
}