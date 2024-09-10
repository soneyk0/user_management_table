import s from "./Table.module.css";
import {ChangeEvent} from "react";
import {UserType} from "../../../types/UserType";

type TableProps = {
    data: UserType[];
    applyFilter: (field: string, query: string) => void
}

const Table = ({data, applyFilter}: TableProps) => {

    const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        applyFilter(name, value)

    };

    return (
        <div className={s.container}>
            <table className={s.table}>
                <thead>
                <tr className={s.nameOfColumn}>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                <tr>
                    <th><input type="text"
                               onChange={handleFilterChange}
                               name={'name'}
                               placeholder={'Filter by name'}/>
                    </th>
                    <th><input type="text"
                               onChange={handleFilterChange}
                               name={'username'}
                               placeholder={'Filter by username'}/>
                    </th>
                    <th><input type="text"
                               onChange={handleFilterChange}
                               name={'email'}
                               placeholder={'Filter by email'}/>
                    </th>
                    <th><input type="text"
                               onChange={handleFilterChange}
                               name={'phone'}
                               placeholder={'Filter by phone'}/>
                    </th>
                </tr>
                </thead>
                <tbody>
                {data.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table