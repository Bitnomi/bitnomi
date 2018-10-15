import React from 'react';
import './footer.css';
import { ftruncate } from 'fs';
import { Icon } from 'antd';

class MyFooter extends React.Component{
   render(){
      return(
         <div className="f-ft">
            <div className="f-wrapper">
               <div className="color-line"></div>
               <div className="ft-content">
                  <div className="media-box">
                     <p className="slogan">
                        DevScore Icon
                     </p>
                     <p className="mt-10 fs-24 ff-light">The brand new Digital Coin Exchange</p>
                        <a target="_blank" href="#"><Icon type="facebook" /></a>
                        <a target="_blank" href="#"><Icon type="twitter" /></a>
                        <a target="_blank" href="#"><Icon type="medium" /></a>
                        <a target="_blank" href="#"><Icon type="android" /></a>
                        <a target="_blank" href="#"><Icon type="apple" /></a>
                     <div className="medias mt-10">
                     </div>
                  </div>
                  <div className="linksWrap">
                     <div className="linkBox">
                        <p className="boxTitle">
                           Product
                        </p>
                        <a href="#" target="_self">Exchange</a>
                        <a rel="noopener" href="#" target="_blank">Pool</a>
                        <a rel="noopener" href="#" target="_blank">Explorer</a>
                     </div>

                     <div className="linkBox">
                        <p className="boxTitle">
                           About
                        </p>
                        <a href="#" target="_self">About us</a>
                        <a rel="noopener" href="#" target="_blank">Join us</a>
                        <a rel="noopener" href="#" target="_blank">About CET</a>
                     </div>

                     <div className="linkBox">
                        <p className="boxTitle">
                           Agreements
                        </p>
                        <a href="#" target="_self">Terms of Service</a>
                        <a rel="noopener" href="#" target="_blank">Privacy Policy</a>
                        <a rel="noopener" href="#" target="_blank">Fees</a>
                     </div>

                     <div className="linkBox">
                        <p className="boxTitle">
                           Support
                        </p>
                        <a href="#" target="_self">FAQ</a>
                        <a rel="noopener" href="#" target="_blank">Ticket</a>
                        <a rel="noopener" href="#" target="_blank">API</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default MyFooter;