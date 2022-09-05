import { useState } from 'react';

import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

import styles from './message-field.module.css';

interface MessageFieldProps {
  onSendMessage: (content: string) => Promise<void>;
}

export function MessageField({ onSendMessage }: MessageFieldProps) {
  const [content, setContent] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    const trimmedContent = content.trim();

    event.preventDefault();

    if (trimmedContent) {
      onSendMessage?.(trimmedContent);
    }
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles['container']}>
        <TextField
          value={content}
          onChange={handleChange}
          className={styles['field']}
          variant="outlined"
          placeholder="Send a message…"
        />
        <button aria-label="Send" className={styles['sendButton']}>
          <SendIcon />
        </button>
      </div>
    </form>
  );
}

export default MessageField;
