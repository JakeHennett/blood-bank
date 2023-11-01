// import logo from './logo.svg';
import './App.css';

function Submit(){
  var response = "test"
  alert(response);
  return (
    response
      // var response =
      //     "Requested " + document.getElementById("party-size").value
      //     + " ticket(s) on " + document.getElementById("travel-date").value
      //     + " from " + document.getElementById("departure").value
      //     + " to " + document.getElementById("arrival").value
      //     + "."
      // alert(response);
  );
}

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
            <row>
              <br></br>
              <input type="submit" value="Submit">
                {/* alert(Submit()) */}
                </input>
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
      <script type="text/javascript">
      </script>
    </div>
  );
}

export default App;
