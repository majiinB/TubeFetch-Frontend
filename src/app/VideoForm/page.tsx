'use client'
import { useState } from 'react';
import styles from './VideoForm.module.css'; // Import CSS module
import axios from 'axios';
import MiniRectangle from '../components/miniRectangle/miniRectangle';

const VideoForm = () => {
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); // Allow error to be a string or null
  const [responseData, setResponseData] = useState<any>(null);
  const [videoTitle, setVideoTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://vn357l8p-8080.asse.devtunnels.ms/videoInfo', { url: videoUrl });
      // Assuming the response contains these properties
      const title = response.data.videoInfo.title;
      const thumbnailUrl = response.data.videoInfo.thumbnail.url;

      setVideoTitle(title);
      setImageUrl(thumbnailUrl);
      setResponseData(response.data);

      console.log('Video information:', response.data);
    } catch (err) {
      setError('An error occurred while fetching video data.');
      console.error(err);
    } finally {
      setLoading(false);
    }
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
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? 'Loading...' : 'Download Video'}
          </button>
        </div>
        {error && <p className={styles.error}>{error}</p>}
        {responseData && (
          <div className={styles['video-info']}>
            <h3>Video Information:</h3>
            <MiniRectangle 
              imageUrl={imageUrl}  // Pass the image URL here
              title={videoTitle}   // Pass the title here
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default VideoForm;
