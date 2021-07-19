/**
 * 登陆后页面
 */
import React, { lazy, Suspense, useState, useEffect } from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import Loading from "Components/Loading";
import { Icon, Menu } from "antd";
import "./style.less";
const Home = lazy(() => import("../home"));
const People = lazy(() => import("../people"));
const Check = lazy(() => import("../check"));


const Main = (props) => {
  const [menuList, setMenu] = useState([]);
  const [selectedKey, setKey] = useState("");
  useEffect(() => {
    setMenu([
      { route: "home", name: "首页" },
      { route: "people", name: "审批人管理" },
      { route: "check", name: "复核管理" },
      { route: "pictrue", name: "影像管理" }
    ]);
  }, [menuList.length]);

  const {
    location: { pathname }
  } = props;
  let selectedKeys = [];
  const selected = menuList.find(item => pathname.includes(item.route));
  selected && selectedKeys.push(selected.route);
  return <React.Fragment>
    <header>
      <div className="logo"></div>
      <div className="info">
        <span>张三</span>
        <span>退出</span>
      </div>
    </header>
    <main>
      <nav>
        <Menu mode="inline" selectedKeys={selectedKeys}>
          {menuList.length > 0 && menuList.map(item => (
            <Menu.Item key={item.route} style={{ display: "block" }}>
              <Link to={`/${item.route}`}>
                <span>{item.name}</span>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </nav>
      <section>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path={`/home`} component={Home} />
            <Route path={`/people`} component={People} />
            <Route path={`/check`} component={Check} />
            <Redirect to={{ pathname: `/home` }} />
          </Switch>
        </Suspense>
      </section>
    </main>
  </React.Fragment >
}
export default Main;