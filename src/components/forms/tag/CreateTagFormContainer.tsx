import React, { useState, SetStateAction } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { message } from 'antd';
import CreateTagFormComponent from './CreateTagFormComponent';
import { State } from '../../../store/initialState';
import createTag from '../../../store/tag/actions';
import { genId } from '../../../utils';

export default function CreateTagFormContainer(): JSX.Element {
  const { tags } = useSelector((state: State) => state);

  const dispatch = useDispatch();
  const boundCreateTag = bindActionCreators(createTag, dispatch);

  const [input, setInput] = useState('');

  const tagNames = Object.keys(tags.byNames);
  const tagExists = tagNames.includes(input);
  const disabled = tagExists || input === '';

  const handleSubmit = (): void => {
    boundCreateTag({ id: genId(20), name: input });
    message.success(`Tag ${input} was successfully created`);
    setInput('');
  };
  const handleChange = (e: SetStateAction<string>): void => setInput(e);

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
