import React, { useRef } from 'react';
import { Emitter, useEventEmitter } from 'Utils/CustomHooks';
import { Input, Button } from 'antd';
import { Arbitrary } from 'Src/types/replaceAny';

const MessageBox: React.FC<{ focus$: Emitter<void> }> = props => {
  return (
    <>
      <h1>Components communication:</h1>
      <p>* The button and the input belons to different components.</p>
      <p>You received a message</p>
      <Button
        type='primary'
        onClick={() => {
          props.focus$.emit();
        }}
      >
        Reply
      </Button>
    </>
  );
};

const InputBox: React.FC<{ focus$: Emitter<void> }> = props => {
  const inputRef = useRef<Arbitrary>();
  props.focus$.useSubscription(() => {
    inputRef.current.focus();
  });
  return <Input ref={inputRef} placeholder='Enter reply' />;
};

const EventEmitter: React.FC = () => {
  const focus$ = useEventEmitter();

  return (
    <div>
      <MessageBox focus$={focus$} />
      <InputBox focus$={focus$} />
    </div>
  );
};

export default EventEmitter;
