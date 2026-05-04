import React, { useState, useMemo } from "react";

function FilteredUser() {
    const [search, setSearch] = useState("");

    const users = [
        { id: 1, name: "John", active: true },
        { id: 2, name: "Alice", active: false },
        { id: 3, name: "Bob", active: true },
        { id: 4, name: "Eve", active: false },
        { id: 5, name: "Sarah", active: true },
        { id: 6, name: "Mona", active: true },
        { id: 7, name: "Tiya", active: true },
        { id: 8, name: "Tina", active: false },
        { id: 9, name: "Lora", active: true },
        { id: 10, name: "John", active: true },
    ];

    const filteredUsers = useMemo(() => {
        console.log("Filtering users...");

        const filteredUsers = users
            .filter(users => users.active)
            .filter(users => users.name.toLowerCase().includes(search.toLowerCase()));

        return filteredUsers;

    }, [users, search]);

    return (
        <div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />

            <ul>
                {filteredUsers.map(users => <li key={users.id}>{users.name}</li>)}
            </ul>
        </div>
    );
}
export default FilteredUser;