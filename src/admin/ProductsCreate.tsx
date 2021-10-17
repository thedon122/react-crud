import React, {SyntheticEvent, useState} from 'react';
import Wrapper from './Wrapper';


const ProductsCreate = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/products', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title,
                image
            })
        });

        setRedirect(true);
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" name="title"
                           onChange={e => setTitle(e.target.value)}
                    />
                </div>
                </form>
                </Wrapper>
};