import React, {useEffect} from 'react';
import gsap from "gsap";

export function Animation() {
    useEffect(() => {
        const title = document.getElementById('title')
        const description = document.getElementById('description')

        const timeline = gsap.timeline();

        const titleAnimation = gsap.fromTo(
            title,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, ease: "easeInOut", duration: 1 },
        );
        const descriptionAnimation = gsap.fromTo(
            description,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, ease: "easeInOut", duration: 1 },
        );

        timeline.add(titleAnimation).add(descriptionAnimation, "-=0.2");

        return () => {
            timeline.clear()
        }
    }, []);
    return (
        <div>
            <h2 id="title">Hello title</h2>
            <p id="description">
                Hello description
            </p>
        </div>
    )
}