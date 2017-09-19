import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Firebaseを利用したReactお小遣い帳アプリを考案してみたんだが</h2>
        </div>
        <p className="App-intro">
        <form id="form1">
          <ul>
            <li>
              <label><span>20170917</span></label>
              <label><span>KitKat(岩泉ヨーグルト味)</span></label>
              <label><span>500</span></label>
              <label><span><input type="button" value="削除"/></span></label>
            </li>
            <li>
              <label><span>20170917</span></label>
              <label><span>短角牛</span></label>
              <label><span>2000</span></label>
            </li>
          </ul>
        </form>
        
        <table>
          <tr>
            <th>日付</th>
            <th>品目</th>
            <th>金額</th>
          </tr>
          <tr>
            <td>20170917</td>
            <td>KitKat(岩泉ヨーグルト味)</td>
            <td>500</td>
          </tr>
          <tr>
            <td>20170917</td>
            <td>短角牛</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>20170917</td>
            <td>じゃがいも</td>
            <td>300</td>
          </tr>
        </table>
        </p>
      </div>
    );
  }
}

export default App;
