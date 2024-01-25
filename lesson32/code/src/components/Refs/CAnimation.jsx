import React from "react";
import gsap from "gsap";

export class CAnimation extends React.Component {
  elRef = {};
  componentDidMount() {
    const timeline = gsap.timeline();

    const titleAnimation = gsap.fromTo(
      this.elRef.title,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, ease: "ease-in-out", duration: 1 },
    );

    const descriptionAnimation = gsap.fromTo(
      this.elRef.description,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, ease: "ease-in-out", duration: 1 },
    );

    timeline.add(titleAnimation).add(descriptionAnimation, '-=0.3');
  }

  render() {
    return (
      <div>
        <h2 ref={(node) => (this.elRef.title = node)}>Hello title</h2>
        <p ref={(node) => (this.elRef.description = node)}>hello description</p>
      </div>
    );
  }
}
