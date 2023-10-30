// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <table>
          <p>
            Enter donor and recipient information below.
          </p>
          <column>
            <row>
              Donor Information
              <br></br>
            </row>
            <row>
              <label for="donor-group">Group:</label>
              <select name="donor-group" id="donor-group">
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="ab">AB</option>
                <option value="o">O</option>
              </select>
              <br></br>
            </row>
            <row>
              <label for="donor-rh-factor">Rh factor:</label>
              <select name="donor-rh-factor" id="donor-rh-factor">
                <option value="positive">+</option>
                <option value="negative">-</option>
              </select>
              <br></br>
            </row>
            <row>
              <br></br>
              Patient Information
              <br></br>
            </row>
            <row>
              <label for="patient-group">Group:</label>
              <select name="patient-group" id="patient-group">
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="ab">AB</option>
                <option value="o">O</option>
              </select>
              <br></br>
            </row>
            <row>
              <label for="patient-rh-factor">Rh factor:</label>
              <select name="patient-rh-factor" id="patient-rh-factor">
                <option value="positive">+</option>
                <option value="negative">-</option>
              </select>
              <br></br>
            </row>
          </column>
        </table>
        {/* <p>
          Jake added some text here.
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
