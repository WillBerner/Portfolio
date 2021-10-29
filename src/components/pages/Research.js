import React from 'react'

export default function Research() {

    const largePicStyle = {
        maxHeight: '500px',
        maxWidth: '600px'
    }

    const linkStyle = {
        color: 'black'
    }

    const researchPicsStyle = {
        maxHeight: '400px',
        maxWidth: '400px'
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center mb-4">
                <h2 className="text-center">Research Experience</h2>
                <p className="text-center"><a href="https://telepresence.web.unc.edu/people/" target="_blank" rel="noreferrer" style={linkStyle}> UNC Chapel Hill Telepresence (Graphics and Virtual Reality) Research Group</a></p>
                <p className="text-center"><small>April 2018 - August 2020</small></p>
            </div>

            <div className="row mb-4 justify-content-center">
                <div className="col-12">
                    <img src="./assets/images/Telepresence.jpg" className="rounded img-responsive center-block d-block mx-auto" alt="UNC Graphics and Virtual Reality Research Group" title="UNC Graphics and Virtual Reality Research Group" style={largePicStyle} />
                    <p className="text-center"> UNC-Chapel Hill's Telepresence (Graphics and VR) Research Group - 2019. I'm on the far right.</p>
                </div>
            </div>

            <div className="row justify-content-center mb-3">
                <div className="row mb-5">
                    <h6 className="text-center mb-4">
                        In addition to teaching the joys of coding to new programmers at UNC-Chapel Hill, as an undergraduate I assisted with research for over two years in the Computer Science Department under Distinguished Professor Dr Henry Fuchs as part of the Graphics and Virtual Reality Research Group.
                    </h6>
                    <h6 className="text-center">
                        My responsibilities differed depending on the ad-hoc teams with which I worked. My main duty was to assist a handful of graduate students and research scientists in the group with various studies and tests. I would attend weekly meetings with each group to go over any progress.
                    </h6>
                </div>
                <div className="row mt-5 justify-content-between">
                    <h4 className="text-center mb-4">
                        <a href="https://telepresence.web.unc.edu/research/dynamic-focus-augmented-reality-display/" target="_blank" rel="noreferrer" style={linkStyle}>
                            Dynamic Focus Augmented Reality Display
                        </a>
                    </h4>
                    <div className="col-lg-4 col-sm-12 mb-3">
                        <img src="./assets/images/Aliens.jpeg" style={researchPicsStyle} className="img-responsive center-block d-block mx-auto" alt="Deformable Membrane Display" title="Deformable Membrane Display" />
                        <p className="text-center">
                            Three aliens at adjustable focal depths seen through the near-eye deformable membrane display.
                        </p>
                    </div>
                    <div className="col-lg-4 col-sm-12 mb-3">
                        <img src="./assets/images/Setup.jpeg" style={researchPicsStyle} className="img-responsive center-block d-block mx-auto" alt="Deformable Membrane Display Setup" title="Deformable Membrane Display Setup" />
                        <p className="text-center">
                            Headstand display, controlled by a system of hoses, valves, speakers, motors, pressure sensors, and an Arduino.
                        </p>
                    </div>
                    <div className="col-lg-4 col-sm-12 mb-3">
                        <img src="./assets/images/ContrastTest.jpeg" style={researchPicsStyle} className="img-responsive center-block d-block mx-auto" alt="Contrast Tests I performed" title="Contrast Tests I performed" />
                        <p className="text-center">
                            Contrast test I ran to determine the effect of multiple beamsplitters on the luminance of an image.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-around mb-5">

                <p className="text-center">
                    The project I assisted with in the group first was the Dynamic Focus Augmented Reality Display project. I worked closely with PhD candidate and leader of the project David Dunn as we attempted to create a near-eye augmented reality display with dynamic focus using see-through deformable membranes. The membranes would deform with pressue from pumps to adjust for the user's near or far focal point. My largest responsibilty for the project was to create the sensitive deformable membranes in the cleanroom of <a href="https://chanl.unc.edu/" target="_blank" rel="noreferrer" style={linkStyle}>Chapel Hill's Analytical and Nanofabrication Laboratory</a> using processes such as degassing, spin-coating, sputter deposition, etc. We then used these membranes by placing them in housings and also sent them to our project collaborators at the <a href="https://www.mpi-inf.mpg.de/home" target="_blank" rel="noreferrer" style={linkStyle}>Max Planck Institut Informatik</a> for them to use.
                </p>

                <p className="text-center">
                    For the same project, I ran contrast tests to determine how the presence of one or more beamsplitters would impact the luminance of an image as there were concerns they would detract from the image's brightness. To test this I arranged two different sized beamsplitters, a HoloPro with a projector, and a back display behind one another in all possible permutations, taking photos each time to see how each layer contributed independently.
                </p>

                <img src="./assets/images/ContrastSetup.jpeg" style={researchPicsStyle} className="img-responsive center-block d-block mx-auto mt-4" alt="Beamsplitter contrast tests" title="Beamsplitter contrast tests" />
                <p className="text-center">
                    Contrast test setup. All permutations were tested and recorded.
                </p>

            </div>

            <div className="row mt-4 justify-content-between">
                <h4 className="text-center mb-2">
                    <a href="https://telepresence.web.unc.edu/research/3dreconstructiondynamic/" target="_blank" rel="noreferrer" style={linkStyle}>
                        3D Reconstruction of Dynamic Scenes
                    </a>
                </h4>

                <img src="./assets/images/Headset.jpg" style={largePicStyle} className="img-responsive center-block d-block mx-auto mt-4" alt="Egocentric headset and eyeglasses prototype" title="Egocentric headset and eyeglasses prototype" />
                <p className="text-center mb-5">
                    Early 2018 prototype I built for checking eye and mouth-tracking camera angles.
                </p>

                <p className="text-center">
                    In addition to working towards our dynamic focus augmented reality display, I also regularly assisted our 3D Dynamic Scene Reconstruction team. Our goal was to be able to reconstruct a dynamic scene in a closed 3D environment using a relatively non-instrusive, inward-out looking egocentric headset. We attempted to, in real-time, virtually recreate both the user wearing the small form-factor headset as well as the closed environment that they were in accurately by using a series of many small, synchronous cameras attached to a pair of eyeglass frames. We had produced good reconstruction results previously, but with a large and bulky headset that wasn't practical for use outside of testing.
                </p>

                <p className="text-center">
                    My primary responsibility was to design and produce the eyeglass frames being used for the headset and work with graduate student Conny Lu to ensure the angles at which the miniture cameras were placed would produce good results from her eye, mouth, and body tracking software. The slightest of changes to the angle on any axis could produce much better or much worse results. Using such near-body cameras, occlusion was the primary issue.
                </p>

                <img src="./assets/images/CameraPositions.png" style={researchPicsStyle} className="img-responsive center-block d-block mx-auto mt-4" alt="Altering camera angles" title="Altering camera angles" />
                <p className="text-center mb-5">
                    Trying different locations for eye and mouth-tracking camera angles.
                </p>

                <h5 className="text-center">
                    To learn more about UNC Telepresence's past and present research, check out the <a href="https://telepresence.web.unc.edu/" target="_blank" rel="noreferrer" style={linkStyle}>group's webpage</a>.
                </h5>

            </div>

        </div>
    )
}
