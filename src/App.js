function App() {
  return (
    <html>
        <head>
            <title>CAPORTFOLIO</title>
        </head>
        <div style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center', justifyItems: 'center', textAlign: 'center'}}>
            <h1 style={{fontFamily: 'Courier New'}}>Cesar Almendarez</h1>

            <ul style={{paddingLeft: 0}}>
            <li style={{display: "inline", marginRight: 10}}><a target="#" href="https://github.com/cesarealmendarez">GitHub</a></li>
            <li style={{display: "inline", marginRight: 10}}><a target="#" href="http://linkedin.com/in/cesar-almendarez-1b7191189">LinkedIn</a></li>
            <li style={{display: "inline", marginRight: 10}}><a target="#" href="https://docs.google.com/document/d/1gOlWXDIF459vwN1_SwSTT7xqEGfVsQZx/edit?usp=sharing&ouid=106413919968155890770&rtpof=true&sd=true">Resume</a></li>
            </ul>

            <h3>I make software that works most of the time!</h3>

            <p>Like this ASL interpreter using Convolutional Neural Networks and OpenCV:</p>
            <img style={{width: 500, height: 250, objectFit: 'cover', borderRadius: 5, marginBottom: 10}} src="https://user-images.githubusercontent.com/89669770/160533990-ae71afe4-67f4-4d21-93b4-8bf65fba739f.gif"/>
            <br></br>
            <a style={{marginRight: 10}} target="#" href="https://github.com/cesarealmendarez/DeepASL">DeepASL on GitHub</a>
            <a target="#" href="https://share.streamlit.io/cesarealmendarez/deep_asl_streamlit/app.py">DeepASL on Streamlit</a>
        </div>
    </html>
  );
}

export default App;
