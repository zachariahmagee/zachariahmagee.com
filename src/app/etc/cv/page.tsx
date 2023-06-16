

export default function CV() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-stone-200">
     <section className={'w-3/5'}>
        {/* <div className="text-end"> */}
        {/*   <p><a href="Linkedin.com/in/ZachariahMagee">LinkedIn</a></p>  */}
        {/*   <p><a href="GitHub.com/isZachariah">GitHub</a></p>  */}
        {/*   <p>zachariahmagee@gmail.com</p> */}
        {/*   <p>(360) 684 0482</p> */}
        {/* </div>  */}
        {/* <br/> */}
        
        <p><strong>Languages:</strong> C++, Java, Kotlin, Python, JavaScript, TypeScript, HTML/ CSS, SQL</p>
        <p><strong>Frameworks:</strong> Arduino, NodeJS, Express, React, NextJS, NGINX, Serverless, Jetpack Compose</p>
        <p><strong>Tools:</strong> Git, AWS, DigitalOcean, Vim, VSCode, Prisma</p>
        
        <br/>

        <p><strong><u>Experience</u></strong></p>

        <br/>

        <div className={''}>
          <p className="pl-12 pb-2"><strong>Software Engineer</strong>, <em>Triple Ring Technologies</em>, <em>Jan 2023 – Present</em></p>
          <ul className="pl-16 list-disc">
            {/*<br/>*/}

            <li><p>Worked on a multidisciplinary team, contributing to the
            development of both hardware and software components of a wearable
            device aimed at assessing a pilot's readiness to fly, for a DARPA-funded
            project.</p></li>
        

            <li><p>Developed efficient and robust C++ drivers for electrical
            components.</p></li>

            <li><p>I independently created a versatile and user-friendly plotting
            application in Java (SASP), streamlining the testing and analysis of
            hardware data for the project team and allowing for quick identification
            of system issues.</p></li>
 
            <li><p>Exhibited outstanding self-motivation and ability to work
            independently, while collaborating seamlessly with the project team to
            achieve common goals, regularly sharing progress updates, and providing
            feedback on project tasks and timelines.</p></li>
          </ul>
        </div>

        <br/>

        <p><strong><u>Projects</u></strong></p>

        <br/>

        <div>
          <p className="pl-12 pb-2"><strong>Stand-Alone Serial Plotter (Java)</strong></p>
          <ul className="pl-16 list-disc">
            <li><p>Developed a highly functional multi-platform Stand-Alone Serial Plotter (SASP) to visualize data from an Arduino-type processor over serial.</p></li>
            <li><p>Implemented features to eliminate jitter, tearing, or any visual defects, ensuring a low-friction connection.</p></li>
            <li><p>Enabled handling of multiple traces with labels, plotted within a multi-threaded environment for speedy performance and no data loss.</p></li>
            <li><p>Implemented optional configuration commands for precise control over the data perspective.</p></li>
          </ul>
        </div>

        <br/>

        <div>
          <p className="pl-12 pb-2"><strong>ADS1210 and ADF4351 Drivers (C++)</strong></p>
          <ul className="pl-16 list-disc">
            <li><p>Created drivers for the ADS1210 Analog to Digital Converter and the ADF4351 Wideband Synthesizer.</p></li>
            <li><p>Designed to make manipulating device settings accessible for users through a simple API.</p></li>
            <li><p>Optimized drivers for maximum performance while ensuring compatibility with a broad range of platforms.</p></li>
          </ul>
        </div>
        <br/>
        <p><strong><u>Education</u></strong></p>

        <br/>

        <p className="pl-12 pb-2"><strong>Associate of Applied Science</strong> · Software Development, <em>Whatcom Community College, 2021 to 2023</em></p>
        <div>
          <ul className="pl-16 list-disc">
            <li><p>I learned various web frameworks, such as React/ Next.js, Svelte,
            and have experimented with others.</p></li>
            <li><p>I learned embedded systems programming with C++, utilizing Arduino to experiment with both the Raspberry Pi Pico and the 
            Teensy development board, I am familiar with the SPI protocol and ARM architecture.</p></li>
            <li><p>Python for data analysis with an interest in machine learning and natural language processing.</p></li>
            <li><p>Developed native android applications with Kotlin utilizing an SQL database and coroutines.</p></li>
            <li><p>Through these projects, I learned to approach problems with an open mind and to not let a lack of familiarity with a specific tool or
            language hold me back from finding a solution.</p></li>
          </ul>
        </div>

        <br/>
        
        <p className="pl-12 pb-2"><strong>Bachelor of the Fine Arts</strong>, <em>University of Washington, 2011 to 2015</em></p>
        <div>
          <ul className="pl-16 list-disc">
            <li><p>I learned critical thinking, communication skills, and how to harness creativity and self-expression.</p></li>
            <li><p>I gained a deep understanding of color theory and modern design patterns.</p></li>
          </ul>
        </div>
      </section> 
    </main>
  )
}
