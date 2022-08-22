import React, { useMemo, useState } from 'react';
import styled from 'styled-components';


function Order() {
    const [ order, setOrder ] = useState('createdAt');
    
    const handleNewest = () => setOrder('createdAt');
    const handleLowprice = () => setOrder();
    const handleHighprice = () => setOrder();

    return(
        <div>
            <button onClick={handleNewest}>최신순</button>
            <button onClick={handleLowprice}>낮은 가격순</button>
            <button onClick={handleHighprice}>높은 가격순</button>
        </div>
    )
}



export default Order;