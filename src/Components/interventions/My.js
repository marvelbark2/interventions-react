import { useEffect } from 'react';

function My({ title }) {
    useEffect(() => {
        const setTitle = () => {
            title('Mes Interventions');
        }
        setTitle();
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default My
