import styles from './MiniRectangle.module.css'; // Ensure the path is correct

interface MiniRectangleProps {
  imageUrl: string;
  title: string;
}

const MiniRectangle: React.FC<MiniRectangleProps> = ({ imageUrl, title }) => {
  return (
    <div className={styles.rectangle}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};

export default MiniRectangle;
