import React from 'react';

export default function CustomerProfile({ id, image, name }) {
    return (
        <div>
            <img src={image} alt='profile' />
            <h2>
                {name}({id})
            </h2>
        </div>
    );
}
