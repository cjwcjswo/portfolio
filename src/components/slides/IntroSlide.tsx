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
        marginBottom: '50px',
        padding: '25px 40px',
        border: '3px solid rgba(99, 226, 183, 0.6)',
        borderRadius: '15px',
        background: 'linear-gradient(135deg, rgba(99, 226, 183, 0.1), rgba(99, 226, 183, 0.05))',
        boxShadow: '0 0 30px rgba(99, 226, 183, 0.3)',
        maxWidth: '100%',
        boxSizing: 'border-box'
      }}>
        <h3 style={{ 
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          color: '#63e2b7',
          fontWeight: 'bold',
          margin: 0,
          fontFamily: 'Mabiyet, Courier New, monospace',
          textShadow: '0 0 10px rgba(99, 226, 183, 0.5)'
        }}>
          최진우
        </h3>
        <p style={{ 
          fontSize: 'clamp(1rem, 3vw, 1.4rem)', 
          color: '#FFFFFF', 
          marginTop: '15px',
          fontFamily: 'Mabiyet, monospace',
          fontWeight: 'bold'
        }}>
          Com2us 책임 | 8년 차 게임 서버 개발자
        </p>
      </div>
      
      <div style={{ 
        marginBottom: '60px',
        maxWidth: '100%',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '15px',
        padding: '0 10px',
        boxSizing: 'border-box'
      }}>
        <div style={{ 
          padding: '15px',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
          minHeight: '120px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '8px' }}>⚔️</div>
          <p style={{ 
            fontSize: 'clamp(0.8rem, 2.5vw, 1rem)', 
            color: '#FFFFFF',
            margin: 0,
            fontFamily: 'Mabiyet, monospace',
            fontWeight: 'bold',
            lineHeight: '1.3'
          }}>
            MMORPG<br />서버 개발
          </p>
        </div>
        
        <div style={{ 
          padding: '15px',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
          minHeight: '120px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '8px' }}>🎵</div>
          <p style={{ 
            fontSize: 'clamp(0.8rem, 2.5vw, 1rem)', 
            color: '#FFFFFF',
            margin: 0,
            fontFamily: 'Mabiyet, monospace',
            fontWeight: 'bold',
            lineHeight: '1.3'
          }}>
            UGC Social<br />게임 개발
          </p>
        </div>
        
        <div style={{ 
          padding: '15px',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
          minHeight: '120px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '8px' }}>🚀</div>
          <p style={{ 
            fontSize: 'clamp(0.8rem, 2.5vw, 1rem)', 
            color: '#FFFFFF',
            margin: 0,
            fontFamily: 'Mabiyet, monospace',
            fontWeight: 'bold',
            lineHeight: '1.3'
          }}>
            고성능<br />서버 아키텍처
          </p>
        </div>
      </div>
      
      {/* Press Any Button */}
      <div className="press-button" style={{ 
        marginTop: 'auto',
        padding: 'clamp(15px, 4vw, 20px)',
        fontSize: 'clamp(1rem, 3vw, 1.5rem)',
        color: '#FFFFFF',
        border: '3px solid rgba(255, 255, 255, 0.5)',
        borderRadius: '10px',
        background: 'rgba(255, 255, 255, 0.1)',
        minWidth: 'clamp(300px, 80vw, 400px)',
        maxWidth: '100%',
        boxSizing: 'border-box',
        textAlign: 'center'
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
