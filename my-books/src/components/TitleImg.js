import React from "react";
// import '../css/TitleImg.scss'
import '../css0/TitleImg.css'

function TitleImg() {
    return (
        <div className="TitleImg">
            <div className="max-wrap">
                <h2 className="TitleText">Book Search</h2>
                <div className="filter"></div>
                {/* <input className="TitleInput" type='text' placeholder='도서명을 검색하세요.'></input> */}
            </div>
        </div>
    )
}

export default TitleImg;