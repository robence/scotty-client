import React, { useState, SetStateAction } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateTagFormComponent from './CreateTagFormComponent';
import { State } from '../../../store/initialState';
import { createTagStart } from '../../../store/tag/actions';

export default function CreateTagFormContainer(): JSX.Element {
  const { tags, userId } = useSelector((state: State) => state);

  const dispatch = useDispatch();
  const boundCreateTag = bindActionCreators(createTagStart, dispatch);

  const [input, setInput] = useState('');

  const tagNames = Object.keys(tags.byNames);
  const tagExists = tagNames.includes(input);
  const disabled = tagExists || input === '';

  const handleSubmit = (): void => {
    boundCreateTag({ userId, name: input });
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
