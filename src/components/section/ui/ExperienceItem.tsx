import type { IExperienceItem } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import CardBox from "@/components/core/CardBox";
import Column from "@/components/core/Column";

const ExperienceItem = ({ data }: { data: IExperienceItem }) => {
  return (
    <CardBox classNames="p-4 bg-[var(--textColor10)] min-h-80">
      <Column classNames="w-full gap-4">
        <Column classNames="items-center justify-start w-full">
          <FontAwesomeIcon
            icon={faTrophy}
            className="text-3xl/6 md:text-4xl/6 text-[var(--primaryColor)]"
          />

          <p className="text-lg/6 font-semibold mt-4">{data.jobTitle}</p>
          <p className="text-[var(--textColorLight)] text-base/6 font-medium">
            {data.company}
          </p>
          <p className="text-[var(--textColorLight)] text-base/6 font-medium">
          {data.location}
          </p>
          <div
            className={`flex flex-row relative gap-1 items-center justify-center px-2 py-0.5 my-2 border border-[var(--textColor)] text-[var(--textColor)]"
            } rounded-[var(--borderRadius)]`}
          >
            <p className="text-xs/6 font-medium">{data.startDate} - {data.isCurrentJob ? "Present" : data.endDate}</p>
          </div>
        </Column>
        
        {data.description.map((desc, index) => {
          return (
          <Column 
            key={`desc-item-${index}`}
            classNames="justify-start w-full"
          >
            <p className="text-base/6 font-normal"  dangerouslySetInnerHTML={{ __html: desc.text }}/>
            
            {desc.bullets.length > 0 ? (
              <ul className="list-disc mt-3 pl-5 text-left">
                {desc.bullets.map((b, index) => {
                  return (
                    <li key={`desc-item-bullets-${index}`}> {b} </li>
                  )
                })}
              </ul>
            ): null}
          </Column>)
        })}
      </Column>
    </CardBox>
  );
};

export default ExperienceItem;