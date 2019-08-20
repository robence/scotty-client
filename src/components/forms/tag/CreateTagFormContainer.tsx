import React, { useState } from 'react';
import CreateTagFormComponent from './CreateTagFormComponent';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from '../../../store/initialState';
import * as tagActionCreators from '../../../store/tag/actions';
import { message } from 'antd';
import { genId } from '../../../utils';

export default function CreateTagFormContainer() {
  const { tags } = useSelector(({ tags }: State) => ({ tags }));

  const dispatch = useDispatch();
  const { createTag } = bindActionCreators(tagActionCreators, dispatch);

  const [input, setInput] = useState('');

  const tagNames = Object.values(tags).map(({ name }) => name);
  const tagExists = tagNames.includes(input);
  const disabled = tagExists || input === '';

  const handleSubmit = () => {
    createTag({ id: genId(20), name: input });
    message.success(`Tag ${input} was successfully created`);
    setInput('');
  };
  const handleChange = (e: any) => setInput(e ? e.toString() : '');

  return (
    <CreateTagFormComponent
      input={input}
      tagExists={tagExists}
      disabled={disabled}
      tagNames={tagNames}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
}
