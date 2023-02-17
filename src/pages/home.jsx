import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import Contact from "@/widgets/layout/contact";
import { Capabilities } from "@/widgets/layout/capabilities";


export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
    
        <div className="absolute top-0 h-full w-full bg-[url('https://scitechdaily.com/images/AI-Technology-Creation-Concept.gif')] bg-cover bg-center" />
        
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="text-7xl mb-6 leading-tight bg-gradient-to-r from-blue-200 via-green-500 to-indigo-600 inline-block text-transparent bg-clip-text"
              >
                Empower Your Business Now with Cutting-Edge AI
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Your AI partner in your success
              </Typography>
            </div>
          </div>
        </div>
      </div>
      
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h1"
                className="mb-3 font-bold bg-gradient-to-r from-blue-200 via-green-500 to-indigo-600 inline-block text-transparent bg-clip-text"
                color="blue-gray"
              >
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Working with our AI services company will give you access to cutting-edge technology and expertise in the field of artificial intelligence. 
                <br />
                <br />
                Our team is dedicated to delivering tailored solutions that will help you achieve your business goals and stay ahead of the competition.
              </Typography>
              {/* <Button variant="outlined">read more</Button> */}
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="https://informationage-staging.s3.amazonaws.com/uploads/2022/10/AdobeStock_80990906-e1523265330758-1568x933.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                  We provide top-notch service by delivering high-quality, customized AI solutions that meet the unique needs of each of our clients.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-20 pb-48 bg-black/90">
        <div className="container mx-auto">
          <PageTitle heading="Our Team" mode="dark">
          Our exceptional team of AI experts possesses an unparalleled level of skill and dedication, constantly striving to exceed expectations and deliver groundbreaking solutions that revolutionize the industry.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                mode="dark"
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name, url }) => (
                      <a href={url}><IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton></a>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 bg-blue-gray-50/50">
        <div className="container mx-auto">
          <PageTitle heading="Let's Build Something Cool">
          With our ability to tackle unique, complex problems and our arsenal of readily available, cutting-edge solutions, partnering with us means unlocking unparalleled potential and leaving the competition in the dust.
          </PageTitle>
          <div className="mx-auto mt-20 mb-2 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          {/* <PageTitle heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form> */}
        </div>
      </section>

      <section className="relative py-24 px-4">
        <div className="">
          <PageTitle heading="What we do" mode="light">
          Octowit AI offers support to companies in developing AI and ML solutions at every phase, starting from initial trials to the final production stage. Our team provides strategic planning, consulting, and engineering services to help turn your concepts into reality with cutting-edge AI technologies. By leveraging our AI-powered digital transformation capabilities, you can stay ahead in the competitive business landscape.
          </PageTitle>
          <Capabilities mode="light"/>
        </div>
      </section>
      
      <div className="bg-blue-gray-50/50">
        <Contact />
      </div>

      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
