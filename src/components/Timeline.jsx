import React from "react";
import WOW from "wow.js"
import { Timeline } from "rsuite";
import CreditCardIcon from '@rsuite/icons/legacy/CreditCard';
import PlaneIcon from '@rsuite/icons/legacy/Plane';
import TruckIcon from '@rsuite/icons/legacy/Truck';
import UserIcon from '@rsuite/icons/legacy/User';
import CheckIcon from '@rsuite/icons/legacy/Check';
import 'rsuite/dist/rsuite.min.css';

const  wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animate__animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();

const TimelineComponent = () => {


  return (
    <div>
          <Timeline className="custom-timeline" align="alternate">
    <Timeline.Item dot={<CreditCardIcon />}>
      <p className=" wow animate__fadeInRight">March 1, 10:20</p>
      <p className=" wow animate__fadeInRight">Your order starts processing</p>
    </Timeline.Item>
    <Timeline.Item>
      <p className=" wow animate__fadeInLeft">March 1, 11:34</p>
      <p className=" wow animate__fadeInLeft">The package really waits for the company to pick up the goods</p>
    </Timeline.Item>
    <Timeline.Item>
      <p className=" wow animate__fadeInRight">March 1, 16:20</p>
      <p className=" wow animate__fadeInRight">[Packed]</p>
      <p className=" wow animate__fadeInRight">Beijing company has received the shipment</p>
    </Timeline.Item>
    <Timeline.Item dot={<PlaneIcon />}>
      <p className=" wow animate__fadeInLeft">March 2, 06:12</p>
      <p className=" wow animate__fadeInLeft">[In transit]</p>
      <p className=" wow animate__fadeInLeft">Order has been shipped from Beijing to Shanghai</p>
    </Timeline.Item>
    <Timeline.Item dot={<TruckIcon />}>
      <p className=" wow animate__fadeInRight">March 2, 09:20</p>
      <p className=" wow animate__fadeInRight">[In transit]</p>
      <p className=" wow animate__fadeInRight">Sended from the Shanghai Container Center to the distribution center</p>
    </Timeline.Item>
    <Timeline.Item dot={<UserIcon />}>
      <p className=" wow animate__fadeInLeft">March 3, 14:20</p>
      <p className=" wow animate__fadeInLeft">[Delivery]</p>
      <p className=" wow animate__fadeInLeft">Shanghai Hongkou District Company Deliverer: Mr. Li, currently sending you a shipment</p>
    </Timeline.Item>
    <Timeline.Item dot={<CheckIcon style={{ background: '#15b215', color: '#fff' }} />}>
      <p className=" wow animate__fadeInRight">March 3, 17:50</p>
      <p className=" wow animate__fadeInRight">[Received]]</p>
      <p className=" wow animate__fadeInRight">Your courier has arrived and the signer is the front desk</p>
    </Timeline.Item>
  </Timeline>
    </div>
  );
};

export default TimelineComponent;
