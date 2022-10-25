import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

export default function FormInput({ name, onChange, value }) {
    return (
        <FormGroup>
            <Label for={name.toLowerCase()}>{name}</Label>
            <Input
                type="text"
                id={name.toLowerCase()}
                name={name.toLowerCase()}
                placeholder={name}
                onChange={onChange}
                value={value}
            />
        </FormGroup>
    );
};
