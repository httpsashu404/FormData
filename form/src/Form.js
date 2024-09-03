import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/form', { name, email, message });
            alert('Data saved successfully');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            alert('Error saving data');
        }
    };

    return (
        <div className='form'>
            <h1>Contact Form</h1><br />
            <form onSubmit={handleSubmit} autoComplete='off'>
                <div>
                    <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder=' Enter your fullName' required autoFocus /> <br /><br />
                </div>
                <div>
                    <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder=' Enter your emailAddress' required /> <br /><br />
                </div>
                <div>
                    <textarea id='msg' value={message} rows={3} onChange={(e) => setMessage(e.target.value)} placeholder=' Type your message....' required /> <br /><br />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
