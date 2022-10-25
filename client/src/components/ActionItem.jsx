import React, { useRef, useState } from 'react';
import { Button, Card, CardBody, Form } from 'reactstrap';
import FormInput from './FormInput';
import "./ActionItem.scss";

const onSubmit = (event, data, action, setUpdate) => {
    event.preventDefault();
    const { task = '', description = '', id } = data;
    console.log(data);
    if (task && description) {
        if (id) {
            action({ variables: { id, input: { description, task } } });
            setUpdate(null);
            return;
        }
        action({ variables: { input: { description, task } } });
    }
};

const handleInputChange = ({ target: { name, value } }, data, setData) => {
    setData({ ...data, [name]: value });
};

const getInitialState = (id, description, task) => {
    if (!id) return {};
    return {
        id,
        task,
        description
    }
};

export default function ActionItem({ action, setUpdate, id, description, task }) {
    const [data, setData] = useState(getInitialState(id, description, task));
    const formRef = useRef();

    return (
        <Card className="new-item-container">
            <CardBody>
                <Form ref={formRef} onSubmit={event => onSubmit(event, data, action, setUpdate)}>
                    <FormInput
                        name="Task"
                        onChange={event => handleInputChange(event, data, setData)}
                        value={data && data.task}
                    />
                    <FormInput
                        name="Description"
                        onChange={event => handleInputChange(event, data, setData)}
                        value={data && data.description}
                    />
                    <Button type="submit" color="primary">{!!id ? 'Update' : 'Add'}</Button>
                </Form>
            </CardBody>
        </Card>
    )
};
