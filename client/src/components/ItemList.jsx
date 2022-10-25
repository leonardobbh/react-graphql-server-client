import React, { useState } from 'react';
import "./ItemList.scss";
import Item from './Item';
import ActionItem from './ActionItem';
import { Spinner } from "reactstrap";


export default function ItemList({ items = [], addItem, editItem, deleteItem, loading }) {
    const [updatedId, setUpdate] = useState(null);

    if (loading) return (
        <div className="list loading">
            <Spinner color="primary" />
        </div>
    );

    return (
        <div className="main-container">
            <div className="list table">
                {!!items && items.map(({ id, task, description }, index) => {
                    return updatedId === id ? (
                        <ActionItem
                            action={editItem}
                            id={id}
                            description={description}
                            task={task}
                            setUpdate={setUpdate}
                        />
                    ) : (
                        <Item
                            key={index}
                            id={id}
                            description={description}
                            task={task}
                            deleteItem={deleteItem}
                            setUpdate={setUpdate}
                        />
                    )
                })}
                <ActionItem action={addItem} />
            </div>
        </div>
    );
};