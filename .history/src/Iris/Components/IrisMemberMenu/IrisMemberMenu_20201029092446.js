import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './IrisMemberMenu.scss';
import { ReactComponent as UserProfileIcon } from './Images/user_profile.svg';
import { ReactComponent as BeastieIcon } from './Images/beastie_icon.svg';
import { ReactComponent as OrderIcon } from './Images/order_icon.svg';
import { ReactComponent as PlateIcon } from './Images/plate_icon.svg';
import { ReactComponent as GroupOrderIcon } from './Images/group_order.svg';
import { ReactComponent as MyFavIcon } from './Images/my_fav.svg';
import { ReactComponent as MyCommentIcon } from './Images/my_comment.svg';

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
            </div>
            {/* ---------- menu ----------- */}
            <div class="iris-mune-item-wrapper d-flex d-flex flex-wrap">
              <div class="iris-menu-item">
                <UserProfileIcon class="iris-menu-icon" />
              </div>
              <div class="iris-menu-hr"></div>
              <div class="iris-menu-item">
                <BeastieIcon class="iris-menu-icon" />
              </div>
              <div class="iris-menu-hr"></div>
              <div class="iris-menu-item">
                <OrderIcon class="iris-menu-icon" />
              </div>
              <div class="iris-menu-hr"></div>
              <div class="iris-menu-item">
                <PlateIcon class="iris-menu-icon" />
              </div>
              <div class="iris-menu-hr"></div>
              <div class="iris-menu-item">
                <GroupOrderIcon class="iris-menu-icon" />
              </div>
              <div class="iris-menu-hr"></div>
              <div class="iris-menu-item">
                <MyFavIcon class="iris-menu-icon" />
              </div>
              <div class="iris-menu-hr"></div>
              <div class="iris-menu-item">
                <MyCommentIcon class="iris-menu-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IrisMemberMenu;
