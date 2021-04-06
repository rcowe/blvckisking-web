import React {useState, useEffect} from 'react';

function FetchAPI() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://blvckisking-api-app.herokuapp.com/")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return <div>
        null
    </div>
}

export default FetchAPI;