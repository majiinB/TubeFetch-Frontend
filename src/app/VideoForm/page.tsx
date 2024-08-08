'use client'
import { useState } from 'react';
import styles from './VideoForm.module.css'; // Import CSS module

const VideoForm = () => {
  const [videoUrl, setVideoUrl] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Submitted video URL:', videoUrl);
  };

  return (
    <div className={styles.container}>
      <h2>YouTube Video Downloader</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor="videoUrl">Enter YouTube Video URL:</label>
          <input
            type="text"
            id="videoUrl"
            name="videoUrl"
            placeholder="E.g., https://www.youtube.com/watch?v=videoID"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles['form-group']}>
          <button type="submit" className={styles.button}>Download Video</button>
        </div>
      </form>
    </div>
  );
};

export default VideoForm;
