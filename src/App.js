function App() {
  return (
    <html>
      <head>
        <title>CAPORTFOLIO</title>
      </head>
      <div>
        <h1 style={{fontFamily: 'Courier New'}}>Cesar Almendarez</h1>

        <ul style={{paddingLeft: 0}}>
          <li style={{display: "inline", marginRight: 10}}><a target="#" href="https://github.com/cesarealmendarez">GitHub</a></li>
          <li style={{display: "inline", marginRight: 10}}><a target="#" href="http://linkedin.com/in/cesar-almendarez-1b7191189">LinkedIn</a></li>
          <li style={{display: "inline"}}><a target="#" href="https://cesarealmendarez.github.io/caportfolio/">Porfolio Website</a></li>
          <li style={{display: "inline"}}><a target="#" href="https://docs.google.com/document/d/1hr0LxKA7Bhq8POI7TNEQjE1KnEonh1hi50fFTNop1ck/edit?usp=sharing">Resume</a></li>
        </ul>

        <h3>I make software that works sometimes</h3>

        <p>Like this ASL Interpreter using Convolutional Neural Nets and and OpenCV:</p>
        <a target="#" href="https://share.streamlit.io/cesarealmendarez/deep_asl_streamlit/app.py">DeepASL on Streamlit</a>
      </div>
    </html>
  );
}

export default App;
