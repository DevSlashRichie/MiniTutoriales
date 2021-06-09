import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

export default function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function req() {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            const data = response.data;
            const names = Object.values(data).map(value => {
                return value.name;
            });
            setUsers(names);
        }

        req();
    }, []);

    return (
        <div className="App">
            {
                users.map(value => {
                    return <div style={{
                        color: "RED",
                        padding: "10px",
                        border: "1px solid black"
                    }
                    }>{value}</div>
                })
            }
        </div>
    );

}
