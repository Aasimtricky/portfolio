import { ReactElement, useEffect } from "react";

import { Avatar, Card, CardBody, Chip, Tooltip } from "@nextui-org/react";

import { Education } from "../Education";
import { Employment } from "../Employment";
import { EmploymentType, IconType, educationType } from "@/app/types";
import aboutAnimation from "../../utils/aboutSectionAnimations";
import {
  educationList,
  employmentList,
  techonologyIconList,
  whoAmIData,
} from "@/app/utils";
import React from "react";

const IconComponent = React.forwardRef<HTMLDivElement, { icon: ReactElement }>(
  (props, ref): any => {
    return (
      <p
        ref={ref}
        {...props}
      >
        {props.icon}
      </p>
    );
  }
);
export const AboutV1 = () => {
  const { fullName, profession, whoAmI, quote } = whoAmIData;

  useEffect(() => {
    aboutAnimation.whoAmIAnimation();
    aboutAnimation.contactAnimation();
    aboutAnimation.technologiesTitleAnimation();
    aboutAnimation.techonologyIconListAnimation();
    aboutAnimation.educationTitleAnimation();
    aboutAnimation.educationContentAnimation();
    aboutAnimation.employmentTitleAnimation();
    aboutAnimation.employmentContentAnimation();
  }, []);

  return (
    <div className="grid grid-rows-8 grid-cols-4 gap-4">
      <Card className="col-span-full lg:row-span-2 lg:col-start-2 lg:col-span-2">
        <CardBody className="flex-col items-center justify-center gap-2">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="w-28 h-28 text-large"
          />
          <h1 className="text-4xl font-bold">{fullName}</h1>
        </CardBody>
      </Card>

      <Card className="col-span-full lg:row-span-2 lg:row-start-1 lg:col-span-1  opacity-0 whoAmICard">
        <CardBody className="gap-4">
          <h2 className="text-3xl font-bold">Who am I?</h2>
          <p className="text-lg text-gray-400">{whoAmI}</p>
        </CardBody>
      </Card>

      <Card className="col-span-2 lg:row-start-1 lg:col-start-4 lg:col-span-1 opacity-0 contactCard bg-blue ">
        <CardBody className="justify-center items-center">
          <h2 className="text-xl md:text-3xl font-bold  text-center">
            {profession}
          </h2>
        </CardBody>
      </Card>

      <Card className="col-span-2 lg:row-start-2 lg:col-start-4 lg:col-span-1 opacity-0 contactCard bg-blue bg-blue">
        <CardBody className="justify-center items-center lg:row-start-2 lg:cols-start-4">
          <div className="text-xl font-bold text-center">“{quote}"</div>
        </CardBody>
      </Card>

      <Card className="hidden lg:flex lg:row-start-3 lg:col-span-1 bg-blue opacity-0 technologiesTitle">
        <CardBody>
          <h2 className="text-3xl font-bold">Technologies I've worked with</h2>
        </CardBody>
      </Card>

      <Card className="col-span-full lg:row-start-3 lg:col-span-3 opacity-0 technologyIconList">
        <CardBody className="gap-4 justify-center">
          <h2 className="text-3xl font-bold lg:hidden">
            Technologies I've worked with
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {techonologyIconList.map(({ name, icon }: IconType) => (
              <Tooltip
                key={name}
                content={name}
              >
                {/* {icon} */}
                <IconComponent icon={icon} />
                {/* <Chip>{name}</Chip> */}
              </Tooltip>
            ))}
          </div>
        </CardBody>
      </Card>

      <Card className="hidden lg:flex lg:row-start-4 lg:col-span-1 bg-blue opacity-0 educationTitle">
        <CardBody className="justify-center items-center">
          <h2 className="text-3xl font-bold">Education</h2>
        </CardBody>
      </Card>

      <Card className="col-span-full lg:row-start-4 lg:col-span-3 opacity-0 educationContent">
        <CardBody className="gap-4 flex-wrap">
          <h2 className="text-3xl font-bold lg:hidden">Education</h2>

          <div className="flex flex-col gap-4 lg:flex-row lg:justify-evenly lg:items-center">
            {educationList.map((education: educationType) => (
              <Education
                key={education.career}
                career={education.career}
                years={education.years}
                description={education.description}
              />
            ))}
          </div>
        </CardBody>
      </Card>

      <Card className="hidden lg:flex lg:row-start-5 lg:col-span-1 bg-blue opacity-0 employmentTitle">
        <CardBody className="justify-center items-center">
          <h2 className="text-3xl font-bold">Employment</h2>
        </CardBody>
      </Card>

      <Card className="col-span-full lg:row-start-5 lg:col-span-3 opacity-0 employmentContent">
        <CardBody className="gap-4">
          <h2 className="text-3xl font-bold lg:hidden">Employment</h2>

          {employmentList.map((employment: EmploymentType) => (
            <Employment
              key={`employment-company-${employment.company}`}
              company={employment.company}
              years={employment.years}
              position={employment.position}
              description={employment.description}
              technologies={employment.technologies}
            />
          ))}
        </CardBody>
      </Card>
    </div>
  );
};