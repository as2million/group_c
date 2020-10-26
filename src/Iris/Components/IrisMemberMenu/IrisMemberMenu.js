import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./IrisMemberMenu.scss";

function IrisMemberMenu() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="iris-menu-background d-flex">
            {/* ---------- info ----------- */}
            <div class="iris-profile-photo"></div>

            <div class="iris-user-name">Christina Wang</div>

            <div class="iris-brief-info-wraper d-flex flex-wrap">
              <div class="iris-brief-info">
                <div>我的組合</div>
                <div>8</div>
              </div>
              <div class="iris-vl"></div>
              <div class="iris-brief-info">
                <div>我的最愛</div>
                <div>8</div>
              </div>
              <div class="iris-vl"></div>
              <div class="iris-brief-info">
                <div>怪獸幣</div>
                <div>480</div>
              </div>
              {/* ---------- menu ----------- */}
              <div class="iris-menu-item">1234</div>
              <div class="iris-menu-hr"></div>
              <div class="iris-menu-item">1234</div>
              <div class="iris-menu-hr"></div>
              <div class="iris-menu-item">1234</div>
              <div class="iris-menu-hr"></div>
              <div class="iris-menu-item">1234</div>
              <div class="iris-menu-hr"></div>
              <div class="iris-menu-item">1234</div>
              <div class="iris-menu-hr"></div>
              <div class="iris-menu-item">1234</div>
              <div class="iris-menu-hr"></div>
              <div class="iris-menu-item">1234</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IrisMemberMenu;
