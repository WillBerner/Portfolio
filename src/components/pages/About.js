import React from 'react'

export default function About() {

    // Restrain profile image size
    const profilePicStyle = {
        maxHeight: '250px',
        maxWidth: '250px',
    }

    const SudoStyle = {
        maxHeight: '300px',
        maxWidth: '300px',
    }

    // Render some basic "about me" info
    return (
        <div className="container mt-5">

            <div className="row justify-content-center">
                <div className="col">
                    <h1 className="text-center">
                        About Me
                    </h1>
                </div>
            </div>

            <div className="row mb-4 justify-content-center">
                <div className="col-md-auto">
                    <img src="./assets/images/Me.jpeg" className="rounded-circle my-4 img-responsive center-block d-block mx-auto" alt="Me - Will Berner" title="Me - Will Berner" style={profilePicStyle} />
                </div>
            </div>

            <div className="row mx-3">
                <h6 className="my-5 text-center">My name is Will and I'm a recent Computer Science B.S. graduate of the University of North Carolina at Chapel Hill.</h6>
                <p className="mb-4">
                    I'm a long time resident of central North Carolina - specifically Chapel Hill. I became interested in computer science when I was in middle school by building custom computers. I thought technology and computers were incredibly important considering how much I used them daily, so I thought I'd demystify the magic myself and learn how they work.
                </p>
                <p className="mb-4">
                    As a freshman I ended up loving my first programming course at UNC, was recruited to be a TA, and went on to help teach intro courses for the next five semesters. With languages such as Java, Typescript, and Python, I've taught a wide range of topics such as Object-Oriented vs Functional Programming, ES6 and higher-order functions, the difference between reference and value types, and parsing scientific data for analysis. In addition, I assisted with research on multiple projects in the Computer Science Department for over two years as part of the Graphics and Virtual Reality Research Group.
                </p>
                <p className="mb-4">
                    I'm currently working as a Software Engineer at Fidelity Investments on the NetBenefits Homepage team. I love any sort of programming from OOP to Functional, but enjoy web development the most.
                </p>
                <p className="mb-4 mb-5">
                    When I don't have VSCode pulled up I'm either out exercising, at home watching European Football, or playing with my two-year-old dog, Sudo.
                </p>
            </div>

            <div className="row mb-4 justify-content-center">
                <div className="col-12">
                    <img src="./assets/images/Sudo.jpg" className="rounded img-responsive center-block d-block mx-auto" alt="My dog Sudo" title="My dog Sudo" style={SudoStyle} />
                    <p className="text-center">Sudo (git) fetch!</p>
                </div>
            </div>

        </div>
    )
}
