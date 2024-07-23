import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/ConstrainedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import socialLinks from "@/data/socialLinks";
import ResumeButton from "./ui/ResumeButton";

const FrontSection = ({ id }: Readonly<{ id: string }>) => {
    return (
        <ResponsiveBox
            classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-small-white/[0.2] bg-grid-small-white/[0.2] min-h-screen items-center justify-center relative overflow-hidden rounded-md"
            id={id}
        >
            {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}

            <ConstrainedBox classNames="px-4 py-8 pt-16 z-20 items-center justify-center">
            <Column classNames="w-full items-center justify-center">
                <div className="inline-flex items-center">
                    <p className="text-2xl/normal sm:text-3xl/normal md:text-5xl/normal lg:text-6xl/normal xl:text-7xl/normal dark:text-[var(--textColor)] text-[var(--textColor)] font-bold text-center">
                        Hi there, I am Kristian Halim
                    </p>
                </div>
                <p className="text-sm/normal md:text-base/normal dark:text-[var(--textColorLight)] text-[var(--textColorLight)]">
                    Software Engineer & Machine Learning Enthusiast
                </p>

                <div className="mt-12 lg:mt-16 flex flex-col md:flex-row">
                    <ResumeButton />
                </div>
            </Column>

            <div className="mt-12 lg:mt-16 w-full flex flex-col items-center">
                <p className="text-base/6 font-medium">Follow me here</p>

                <Row classNames="mt-2 gap-2">
                {socialLinks.map((link, index) => {
                    return (
                    <Link
                        key={`social-link-${index}`}
                        href={link.url}
                        target="_blank"
                        className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                        aria-label={`${link.name}`}
                    >
                        <span className="text-base/6 text-[var(--whiteColor)]">
                            <FontAwesomeIcon icon={link.icon} />
                        </span>
                    </Link>
                    );
                })}
                </Row>
            </div>
            </ConstrainedBox>
        </ResponsiveBox>
    );
};

export default FrontSection;