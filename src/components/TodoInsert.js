import React, {useCallback, useState} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss'

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
            onInsert(value);
            setValue('');

            //서브밋은 브라우저에서 새로고침을함
            e.preventDefault();
        }, [onInsert, value]
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                type="text" placeholder="할 일 입력"
                onChange={onChange}
                value={value}
            />
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;
