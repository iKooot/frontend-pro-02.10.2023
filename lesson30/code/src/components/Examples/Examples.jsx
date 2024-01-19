import React, { Fragment } from "react";
import { ArrayRender } from "./ArrayRender";
import { PortalModal } from "./PortalModal";
import { Root } from "./Props/Root";
import { FTimer } from "./FTimer";
import { CTimer } from "./CTimer";
import { StateBatching } from "./StateBatching";
import { Event } from "./Event";

export class Examples extends React.Component {
  render() {
    // const random = Math.round(Math.random() * 100);

    // if (random > 50) {
    //   return random.toString()
    // }

    // const html = "Hello <span><strong>World</strong>!</span>";

    return (
      // <React.Fragment>
      // <Fragment>
      <>
        {/*{true}*/}
        {/*{false}*/}
        {/*{null}*/}
        {/*{undefined}*/}
        {/*<p>Hello component</p>*/}
        {/*{random > 50 && random.toString()}*/}
        {/*<ArrayRender />*/}
        {/*<p dangerouslySetInnerHTML={{ __html: html }}></p>*/}
        {/*<PortalModal />*/}
        {/*<Root />*/}
        {/*<div>*/}
        {/*  /!*<CTimer text="Dummy text" isBoolean={true}>*!/*/}
        {/*  <CTimer>*/}
        {/*    <p>Hello class timer</p>*/}
        {/*    <p>Description</p>*/}
        {/*  </CTimer>*/}
        {/*  <hr />*/}
        {/*  <FTimer text="Dummy text2" isBoolean={false}>*/}
        {/*    <p>Hello function timer</p>*/}
        {/*  </FTimer>*/}
        {/*</div>*/}
        {/*<StateBatching/>*/}
        <Event />
      </>
    );
  }
}
