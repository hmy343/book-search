import React from "react";
import { bookSearch } from "../api";

function BookSearch() {
    return (
        <div>
            {/* <input type='text' placeholder='도서명을 검색하세요.'></input> */}
            <hr />
            <div>
                <select>
                    <option>9개</option>
                    <option>12개</option>
                    <option>15개</option>
                </select>
            </div>
        </div>
    )
}

export default BookSearch;