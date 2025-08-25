import './App.css'
import Card from './components/Card'
import { Projects } from './components/Projects'

function App() {

  return (
    <div>
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0"><path fill="#9FE2FF" fill-opacity="1" d="M0,64L80,90.7C160,117,320,171,480,170.7C640,171,800,117,960,117.3C1120,117,1280,171,1360,197.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      </div>
      <div className="flex justify-center h-screen items-center flex-col">
        <h1 className="font-bold">Rakshi Rangaprasad</h1>
        <p>Sophomore 
          <span className="text-[#C4C4C4]"> Computer Engineering 💻 </span>  
          at 
          <span className="text-[#9FE2FF]"> Tufts University 🐘</span>.</p>
        <div className="flex flex-row m-10 gap-10">
          <a href="#about" className="main-link">About</a>
          <a href="#projects" className="main-link">Projects</a>
          <a href="#experience" className="main-link">Experience</a>
          <a href="#contact" className="main-link">Contact</a>
        </div>
      </div>
      <div id="about" className="p-20 flex flex-col md:flex-col items-center justify-center">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="rounded-full border-4 border-black p-1">
              <div className="rounded-full border-4 border-white p-1">
                <img
                  src="/rakshiimg.png"
                  alt="Profile"
                  className="w-64 h-64 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60%] mt-10 text-center">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-600 text-lg p-20 bg-gray-100 rounded-xl border-4 border-black">
            Hi 👋! I'm Rakshi (he/him), a sophomore at Tufts University pursuing a degree in Computer Engineering. 
            I'm passionate about web development and love creating beautiful, functional applications. 
            When I'm not coding, you can find me playing tennis 🎾, going to the gym 💪, 
            listening to the Weeknd and Tate McRae 🎵, watching Bollywood and Kollywood 🎥, learning 
            <a href="https://www.duolingo.com/profile/rakshi2006">&nbsp;Finnish</a>, and learning the flute 🪈.
            <br /><br />
            I'm a Congressional App Challenge winner 🏆. Check out
            <a href="https://www.congressionalappchallenge.us/23-ma06/">&nbsp;CarbonQuest</a>!
            <br /><br />
            At Tufts, I'm involved in the Hindu Students Association (HSA), where I serve as Treasurer.
            I'm also a member of <a href="https://jumbocode.org/">JumboCode</a>, where I am a developer for the English at Large project.
            I am also a Stern Scholar recipient, given to promising engineers at Tufts.
            <br /><br />
            Don't hesitate to reach out! Connect with me on <a href="https://www.linkedin.com/in/rakshit-rangaprasad/">LinkedIn</a>.
          </p>
        </div>
      </div>

      <div id="projects" className="p-20 flex flex-col gap-20 justify-center align-center">
        <div>
          <h1>Personal Projects 💻</h1> 
          <Projects>
            <Card
              image="/ECSS.png"
              title="ECSS"
              description="ECSS is an english implementation of CSS written in Javascript."
              extra=""
              link="https://github.com/rakshitranga/ecss/"
            />
          </Projects>
        </div>
        <div>
          <h1>Group Projects 🤝</h1>
          <Projects>
            <Card
              image="/carbonquest.png"
              title="CarbonQuest"
              description="A minimalist app for users to track their carbon emissions."
              extra="/caclogo.png"
              link="https://www.congressionalappchallenge.us/23-ma06/"
            />
            <Card
              image="/flowtab.png"
              title="FlowTab"
              description="The best elegant and beautiful new tab for your browser."
              extra="/chromewebstore.png"
              link="https://chromewebstore.google.com/detail/flowtab/ainabceojclhldicflamfgghhkmmcnlo"
            />
            <Card
              image="/flowshadeui.svg"
              title="FlowshadeUI"
              description="A modern UI library built on Tailwind CSS with built in dark mode."
              extra=""
              link="https://www.npmjs.com/package/flowshadeui"
            />
          </Projects>
        </div>
        <div>
          <h1>Hackathons 👨🏾‍💻</h1>
          <Projects>
            <Card
              image="/easely.png"
              title="easely"
              description="Check your assignments and get detailed plans to finish them."
              extra=""
              hackathon="HackUMass XI"
              link="https://devpost.com/software/easely"
            />
            <Card
              image="/nami.png"
              title="Nami"
              description="A digital solution that transforms medication adherence into an engaging, supportive journey through gamification."
              extra=""
              hackathon="Huawei #Tech4City Hackathon 2025"
              link="https://www.linkedin.com/feed/update/urn:li:activity:7357038504725364738/"
            />
            <Card
              image="/jumbuddy.png"
              title="JumBuddy"
              description="Meet new friends and organize hangouts at Tufts!"
              extra=""
              hackathon="JumboHack 2025"
              link="https://devpost.com/software/jumbuddy"
            />
            <Card
              image=""
              title="Coming up!"
              description="Sep 13-14"
              extra=""
              hackathon="HackMIT 2025"
              link=""
            />
          </Projects>
        </div>
      </div>
      <div id="experience" className="p-20">
        <h1>Experience 🎨</h1>
        <div className="flex m-5 flex-col">
          <div className="rounded-xl w-full p-30 bg-[#F9F9F9]">
            <h3 className="mb-3">Brillio — Software Engineering Intern</h3>
            <p>● Create a multi-agent platform using the OpenAI API and Python with FastAPI for users to directly ask questions
            pertaining to insurance, wellness, and general medical symptoms, and deploy to Azure Functions. <br />
            ● Use React, Typescript, and TailwindCSS to create a seamless front-end dashboard for users to view their progress to
            their selected health-related goals. Connect to a MongoDB and Node.js backend for user CRUD functions</p>
            <p className="text-blue-400 mt-5">June - July 2025</p>
          </div>
          <div className="rounded-xl w-full p-30 bg-[#F9F9F9]">
            <h3 className="mb-3">JumboCode — Software Engineer</h3>
            <p>● Develop software for an English-language acquisition library to assist 400+ learners in 24 communities around Greater
              Boston. <br />
              ● Communicate with team members on a weekly basis and coordinate interconnection of React and TailwindCSS code
              with Prisma database, and Node.js backend.</p>
            <p className="text-blue-400 mt-5">September 2024 - Present</p>
          </div>
        </div>
      </div>
      <div id="contact" className="bg-[#E8E8E8] p-20">
        <h1>Contact 📭</h1>
        <p>✉️ rakshit.rangaprasad [at] tufts [dot] edu</p>
        <p>🌐 <a href="https://github.com/rakshitranga">github</a></p>
        <p>🌐 <a href="https://linkedin.com/in/rakshit-rangaprasad">linkedin</a></p>
      </div>
    </div>
  )
}

export default App
