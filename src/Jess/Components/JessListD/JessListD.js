import React, { useState, useEffect } from 'react';
import './JessListD.scss';

function JessListD() {
  return (
    <>
      <div className="container-fluid">
        <div className="container mt-5 jess-proD-bg">
          <h2 className="jess-text-30orange text-center">商品評論</h2>
          <div className="row">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th colspan="2">First</th>
                  <th scope="col text-right">Last</th>
                </tr>
              </thead>
              <tbody>
                <tr rowspan="2">
                  <td>安安 我是</td>
                  <td>the Bird</td>
                </tr>
                <tr>
                  <td colspan="2">Jacob</td>
                </tr>
                <tr>
                  <td colspan="2">Larry</td>
                  <td>the Bird</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default JessListD;
