import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
    EyeIcon,
    LanguageIcon,
    UserIcon,
    WrenchIcon,
  } from "@heroicons/react/24/solid";

export function Capabilities({mode="light"}) {

    const textColor = (mode == "light") ? "text-gray-900" : "text-gray-200";

    return (
        <section class="text-gray-500 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="flex flex-wrap w-full">
                <div class="lg:w-3/6 md:w-1/2 md:pr-10 md:py-6">
                    <div class="flex relative pb-12">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                        <LanguageIcon className="p-2"/>
                    </div>
                    <div class="flex-grow pl-4">
                        <h2 class={`font-medium title-font text-s ${textColor} mb-1 tracking-wider`}>NLP/NLU</h2>
                        <p class="leading-relaxed">Octowit simplifies business workflows with conversational NLP capabilities that extract and analyze text information, including intelligent chatbots, text analysis, and smart voice assistants.</p>
                    </div>
                    </div>
                    <div class="flex relative pb-12">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                        <MagnifyingGlassIcon className="p-2"/>
                    </div>
                    <div class="flex-grow pl-4">
                        <h2 class={`font-medium title-font text-s ${textColor} mb-1 tracking-wider`}>Recommendation & Search System</h2>
                        <p class="leading-relaxed">We help businesses deliver personalized and relevant recommendations to users based on their preferences and behavior.</p>
                    </div>
                    </div>
                    <div class="flex relative pb-12">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                        <EyeIcon className="p-2"/>
                    </div>
                    <div class="flex-grow pl-4">
                        <h2 class={`font-medium title-font text-s ${textColor} mb-1 tracking-wider`}>Computer Vision</h2>
                        <p class="leading-relaxed">We help companies leverage ML and deep learning for computer vision solutions, including object detection, OCR, AR systems, and RPA tools.</p>
                    </div>
                    </div>
                    <div class="flex relative pb-12">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                        <WrenchIcon className="p-2"/>
                    </div>
                    <div class="flex-grow pl-4">
                        <h2 class={`font-medium title-font text-s ${textColor} mb-1 tracking-wider`}>AI Ops</h2>
                        <p class="leading-relaxed">We maximizes the business value of AI initiatives by providing MLOps expertise for end-to-end governance, productivity, reliability, auditability, and quality enhancement.</p>
                    </div>
                    </div>
                    <div class="flex relative">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                        <UserIcon className="p-2"/>
                    </div>
                    <div class="flex-grow pl-4">
                        <h2 class={`font-medium title-font text-s ${textColor} mb-1 tracking-wider`}>Advisory</h2>
                        <p class="leading-relaxed">Our ML/AI advisory and team building services help organizations develop their AI capabilities by providing expert guidance and support in building and managing high-performing AI teams.</p>
                    </div>
                    </div>
                </div>
                <img class="lg:w-3/6 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://news.artnet.com/app/news-upload/2022/12/prisma-labs-lensa-ai.jpg" alt="step" />
                </div>
            </div>
        </section>
        )
    }