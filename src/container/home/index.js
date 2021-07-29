import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Form, Input } from "antd";
function Home(props) {
  useEffect(() => {
    console.log(22222, props.token);
  })
  return <div className="home">
    <div className="home-fileter">

    </div>
  </div>
}
const mapStateToProps = state => ({
  token: state.loginreducer.token
});
export default connect(mapStateToProps)(Home);