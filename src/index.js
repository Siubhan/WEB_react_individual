import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


const dataArray = [
  {
    column_1: 2,
    column_2: 1,
    column_3: 4
  },
  {
    column_1: 5,
    column_2: 6,
    column_3: 1,
  },
  {
    column_1: 2,
    column_2: 7,
    column_3: 0
  },
  {
    column_1: 10,
    column_2: -5,
    column_3: 2
  }
];

function Table(props) {
  const [currentList, showTable] = React.useState([...props.list]);

  const [currentCol, changeCol] = React.useState('');

  const mySort = (event) => {
    if (currentCol === event.target.id) {
      changeCol('');
      document.getElementById(event.target.id).checked = false;
      showTable([...props.list]);
      return;
    }
    else {
      changeCol(event.target.id);
      let tempTable = currentList;
      tempTable.sort(function (first, second) {
        return first[event.target.id] - second[event.target.id];
      })
      showTable(tempTable);
    }
  }

  return (
    <div className="my-table">
      {Object.keys(currentList[0]).map((elem) => {
        return (
          <span>
            {elem}
            <input type="radio" id={elem} name="sortRadio" onClick={mySort}></input>
          </span>
        );
      })}
      <table>
        <thead>
          <tr>
            {Object.keys(currentList[0]).map((elem, index) => {
              return (
                <th>{elem}</th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {currentList.map((row) => {
            return (
              <tr>
                {Object.values(row).map((col) => {
                  return (
                    <td>{col}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Table list={dataArray} />
  </React.StrictMode>
);

reportWebVitals();
