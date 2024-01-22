import { useState } from 'react';
import './App.css';
import Messenger from './Messenger';

function App() {
  const [rangeValue, setRangeValue] = useState(50);
  const handleRangeChange = (event) => {
    const value = event.target.value;
    setRangeValue(value);
    document.body.style.setProperty('--pos', `${value}%`);
  };
  return (
    <>
      <Messenger />
      <div className="compare">
        <section className="before">
          <small>BALANCED</small>
          <h2 className="balanced">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="balanced">
            Voluptates incidunt in at cumque quidem. Reiciendis maxime
            veniam molestias vero quae sequi exercitationem, nemo
            ullam excepturi dicta unde minus aliquid modi?
          </p>
          <br />
          <small>PRETTY</small>
          <h2 className="pretty">
            Tortor id aliquet lectus proin nibh nisl id donec.
          </h2>
          <p className="pretty">
            Nec nam aliquam sem et tortor. Non sodales neque sodales
            ut etiam sit amet. Enim lobortis scelerisque fermentum dui
            faucibus in ornare quam. Quis risus sed vulputate odio ut
            enim blandit volutpat maecenas condimentum.
          </p>
        </section>
        <section className="after">
          <small>NOT BALANCED</small>
          <h2>Lorem ipsum, dolor sit amet consectetur elit.</h2>
          <p>
            Voluptates incidunt in at cumque quidem. Reiciendis maxime
            veniam molestias vero quae sequi exercitationem, nemo
            ullam excepturi dicta unde minus aliquid modi?
          </p>
          <br />
          <small>NOT PRETTY</small>
          <h2>Tortor id aliquet lectus proin nibh nisl id donec.</h2>
          <p>
            Nec nam aliquam sem et tortor. Non sodales neque sodales
            ut etiam sit amet. Enim lobortis scelerisque fermentum dui
            faucibus in ornare quam. Quis risus sed vulputate odio ut
            enim blandit volutpat maecenas condimentum.
          </p>
        </section>
        <input
          type="range"
          id="range"
          value={rangeValue}
          onChange={handleRangeChange}
        />
      </div>
    </>
  );
}

export default App;
