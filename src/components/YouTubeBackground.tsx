interface YouTubeBackgroundProps {
  videoId: string;
}

const YouTubeBackground = ({ videoId }: YouTubeBackgroundProps) => {
  return (
    <div className="youtube-background">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
        title="YouTube background video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeBackground;

