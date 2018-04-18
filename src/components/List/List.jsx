import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ title, url, data }) => (
    <div>
        {title}:
        <ul>
            {data.map(id => <li>
                <Link to={`${url}${id}`}>{id}</Link>
            </li>)}
        </ul>
    </div>
)

export default List;
