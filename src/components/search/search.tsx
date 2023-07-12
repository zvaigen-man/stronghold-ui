import React, { useState, FC } from "react";
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

import './search.scss';

interface ISearchProps {
    search: (searchValue: string) => void
}
export const Search: FC<ISearchProps> = ({ search }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const resetInputField = () => {
        setSearchValue("");
    };

    const callSearchFunction = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        search(searchValue);
    };
    const _handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            callSearchFunction(e)
        }
    }
    return (
        <>
            <div className="search flex">
                <span className="search-icon" onClick={callSearchFunction} >
                    <SearchIcon width="18" height="18" ></SearchIcon>
                </span>
                <input
                    placeholder={"Search by project or user"}
                    value={searchValue}
                    onChange={handleSearchInputChanges}
                    onKeyDown={_handleKeyDown}
                    type="text"
                />

                {/* <div className="search-btn" onClick={() => callSearchFunction} > */}

            </div>
        </>

    );
};

