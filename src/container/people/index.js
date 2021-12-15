import React, { useState } from "react";
import './people.less';
function People(props) {
  const [tabList, setTab] = useState([{ name: '全部', code: 0 }, { name: '待支付', code: 1 }, { name: '待收货', code: 2 }])
  const [curTab, setCurTab] = useState(0);
  return <div className="people-wrap">
    <ul className="tab-wrap">
      {tabList && tabList.map((item, index) => (
        <li key={index} className={curTab == index ? 'actved' : 'unactive'}>{item.name}</li>
      ))}
    </ul>
    <div className=''>

    </div>
  </div>
}
export default People;