const IntroSlide = () => {
  return (
    <div className="slide-content" style={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      background: 'rgba(0, 0, 0, 0.9)'
    }}>
      <style>
        {`
          @font-face {
            font-family: 'Mabiyet';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/MabinogiClassicR.woff2') format('woff2');
            font-weight: normal;
            font-display: swap;
          }
          
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          
          @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }
          
          .pixel-text {
            font-family: 'Mabiyet', 'Courier New', monospace;
            text-shadow: 
              2px 2px 0px rgba(255, 255, 255, 0.2),
              4px 4px 0px rgba(255, 255, 255, 0.1);
          }
          
          .press-button {
            animation: blink 2s ease-in-out infinite;
            font-family: 'Mabiyet', 'Courier New', monospace;
            letter-spacing: 3px;
            font-weight: bold;
          }
        `}
      </style>

      <div style={{ marginBottom: '40px' }}>
        <h1 className="pixel-text" style={{ 
          fontSize: '3.5rem', 
          marginBottom: '15px',
          color: '#FFFFFF',
          fontWeight: 'bold',
          letterSpacing: '2px'
        }}>
          🎮 GAME SERVER
        </h1>
        <h2 className="pixel-text" style={{ 
          fontSize: '2.8rem',
          border: 'none',
          color: '#FFFFFF',
          fontWeight: 'bold',
          marginBottom: '10px'
        }}>
          DEVELOPER
        </h2>
      </div>
      
      <div style={{ 
        marginBottom: '40px',
        padding: '15px 30px',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '8px',
        background: 'rgba(255, 255, 255, 0.05)'
      }}>
        <h3 style={{ 
          fontSize: '2rem',
          color: '#FFFFFF',
          fontWeight: 'bold',
          margin: 0,
          fontFamily: 'Mabiyet, Courier New, monospace'
        }}>
          최진우
        </h3>
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'rgba(255, 255, 255, 0.8)', 
          marginTop: '10px',
          fontFamily: 'Mabiyet, monospace'
        }}>
          Com2us | 책임 | 8년 차
        </p>
      </div>
      
      <div style={{ 
        marginBottom: '60px',
        maxWidth: '700px'
      }}>
        <div style={{ 
          padding: '20px',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '10px',
          marginBottom: '15px',
          background: 'rgba(255, 255, 255, 0.05)'
        }}>
          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.8', 
            color: '#FFFFFF',
            margin: 0,
            fontFamily: 'Mabiyet, monospace'
          }}>
            ▸ PHP, Golang, C++<br />
            ▸ MMORPG & UGC Social Game<br />
            ▸ DevOps & CI/CD<br />
            ▸ High Performance Server Architecture
          </p>
        </div>
      </div>
      
      {/* Press Any Button */}
      <div className="press-button" style={{ 
        marginTop: 'auto',
        padding: '20px',
        fontSize: '1.5rem',
        color: '#FFFFFF',
        border: '3px solid rgba(255, 255, 255, 0.5)',
        borderRadius: '10px',
        background: 'rgba(255, 255, 255, 0.1)',
        minWidth: '400px'
      }}>
        ► PRESS ➡️ BUTTON ◄
      </div>
      
      <div style={{ 
        marginTop: '20px',
        fontSize: '0.9rem', 
        color: 'rgba(255, 255, 255, 0.5)',
        fontFamily: 'Mabiyet, monospace'
      }}>
        <p>Use Arrow Keys or Click Navigation</p>
      </div>
    </div>
  );
};

export default IntroSlide;
