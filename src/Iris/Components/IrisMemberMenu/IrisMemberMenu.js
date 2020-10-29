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
      <div class="container iris-membermenu-container col-3">
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
              <div class="iris-menu-item d-flex">
                <UserProfileIcon class="iris-menu-icon" />
                <div class="iris-menu-text">個人資料</div>
              </div>
              <div class="iris-menu-hr"></div>
              <div class="iris-menu-item d-flex">
                <UserProfileIcon class="iris-menu-icon" />
                <div class="iris-menu-text">怪獸幣</div>
              </div>
              <div class="iris-menu-hr"></div>
              <div class="iris-menu-item d-flex">
                <OrderIcon class="iris-menu-icon" />
                <div class="iris-menu-text">訂單管理</div>
              </div>
              <div class="iris-menu-hr"></div>
              <div class="iris-menu-item d-flex">
                <PlateIcon class="iris-menu-icon" />
                <div class="iris-menu-text">購買紀錄</div>
              </div>
              <div class="iris-menu-hr"></div>
              <div class="iris-menu-item d-flex">
                <GroupOrderIcon class="iris-menu-icon" />
                <div class="iris-menu-text">揪團</div>
              </div>
              <div class="iris-menu-hr"></div>
              <div class="iris-menu-item d-flex">
                <UserProfileIcon class="iris-menu-icon" />
                <div class="iris-menu-text">我的最愛</div>
              </div>
              <div class="iris-menu-hr"></div>
              <div class="iris-menu-item d-flex">
                <MyCommentIcon class="iris-menu-icon" />
                <div class="iris-menu-text">我的投稿</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IrisMemberMenu;
