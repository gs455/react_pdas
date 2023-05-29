import 'bulma/css/bulma.css'
import ProfileCard from "./profileCard";
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App() {
  return(
    <div>
      <div>Personal Digital Assistants </div>
<div className="container">
  <div className="section">
    <div className="columns">
      <div className="column is-4">
      <ProfileCard title = 'alexaaaaaa' handle = 'alexa99' image={AlexaImage}/>
      </div>
      <div className="column is-4">
      <ProfileCard title = 'cortana' handle = 'cortana32' image={CortanaImage}/>
        </div>
        <div className="column is-4">
        <ProfileCard title = 'siri' handle = 'siri01' image={SiriImage}/>
        </div>
    </div>
  </div>
</div>



    </div>
  )
}

export default App