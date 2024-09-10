import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../services/redux/store";
import {useEffect} from "react";
import {applyFilter, fetchUsersData} from "../../../services/redux/reducers/usersSlice";
import Table from "../../common/Table/Table";

const UsersList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {currentData} = useSelector((state: RootState) => state.users)

    useEffect(() => {
        dispatch(fetchUsersData());
    }, []);

    const handleFilter = (field: string, query: string) => {
        dispatch(applyFilter({field, query}))
    }

    return (
        <div>
            <Table data={currentData} applyFilter={handleFilter}/>
        </div>
    )
}

export default UsersList