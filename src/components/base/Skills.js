import React from 'react'
import { Element } from 'react-scroll';
import { Trans } from '@lingui/macro';
import IconWheel from '../media/IconWheel';
import { Carousel } from '../media/Carousel';
// import WordCloud from '../media/WordCloud'


// Frontend
import framerMotionLogo from "../../../public/images/logos/frontend/other-libraries/framer-motion.svg"
import viteLogo from "../../../public/images/logos/frontend/bundler/vitejs.svg"
import reactLogo from "../../../public/images/logos/frontend/frameworks/js/react.svg"
import nextjsLogo from "../../../public/images/logos/frontend/frameworks/js/next.svg"
import tailwindLogo from "../../../public/images/logos/frontend/frameworks/css/tailwind.svg"
import typescriptLogo from "../../../public/images/logos/frontend/languages/typescript.svg"

// Backend
import mysqlLogo from "../../../public/images/logos/backend/databases/mysql.svg"
import fastapiLogo from "../../../public/images/logos/backend/frameworks/fastapi.svg"
import springLogo from "../../../public/images/logos/backend/frameworks/spring.svg"
import kotlinLogo from "../../../public/images/logos/backend/languages/kotlin.svg"
import sqlLogo from "../../../public/images/logos/backend/languages/sql.svg"
import pythonLogo from "../../../public/images/logos/backend/languages/python.svg"


// Learning
import azureLogo from "../../../public/images/logos/clouds/azure.svg"
import elasticsearchLogo from "../../../public/images/logos/backend/other/elasticsearch.svg"
import kafkaLogo from "../../../public/images/logos/backend/other/kafka.svg"
import hadoopLogo from "../../../public/images/logos/backend/other/hadoop.svg"
import sparkLogo from "../../../public/images/logos/backend/other/spark.svg"
import scalaLogo from "../../../public/images/logos/backend/languages/scala.svg"

const frontendIcons = [
    { id: 1, src: typescriptLogo, name: "TypeScript" , size: 100 },
    { id: 2, src: reactLogo, name: "React" , size: 120 },
    { id: 3, src: nextjsLogo, name: "Next" , size: 120 },
    { id: 4, src: viteLogo, name: "Vite", size: 100 },
    { id: 5, src: tailwindLogo, name: "Tailwind" , size: 80},
    { id: 6, src: framerMotionLogo, name: "Framer" , size: 100},
];

// const frontendCloud = [
//     { id: 1, name: "TypeScript" , weight: 100 },
//     { id: 2, name: "React" , weight: 120 },
//     { id: 3, name: "Next" , weight: 120 },
//     { id: 4, name: "Vite", weight: 100 },
//     { id: 5, name: "Tailwind" , weight: 80},
//     { id: 6, name: "Framer" , weight: 100},
// ];

const backendIcons = [
    { id: 1, src: pythonLogo, name: "Python" , size: 100 },
    { id: 2, src: sqlLogo, name: "SQL" , size: 100 },
    { id: 3, src: kotlinLogo, name: "Kotlin" , size: 100 },
    { id: 4, src: fastapiLogo, name: "FastAPI", size: 100 },
    { id: 5, src: mysqlLogo, name: "MySQL" , size: 100},
    { id: 6, src: springLogo, name: "Spring" , size: 100},
];

// const backendCloud = [
//     { id: 1, name: "Python" , weight: 100 },
//     { id: 2, name: "SQL" , weight: 120 },
//     { id: 3, name: "Kotlin" , weight: 120 },
//     { id: 4, name: "FastAPI", weight: 100 },
//     { id: 5, name: "MySQL" , weight: 80},
//     { id: 6, name: "Spring" , weight: 100},
// ];


const learningIcons = [
    { id: 1, src: sparkLogo, name: "Spark" , size: 100 },
    { id: 2, src: hadoopLogo, name: "Hadoop" , size: 100 },
    { id: 3, src: kafkaLogo, name: "Kafka" , size: 100 },
    { id: 4, src: elasticsearchLogo, name: "ElasticSearch", size: 100 },
    { id: 5, src: scalaLogo, name: "Scala" , size: 100},
    { id: 6, src: azureLogo, name: "Azure" , size: 100},
];

// const learningCloud = [
//     { id: 1, name: "Spark" , weight: 100 },
//     { id: 2, name: "Hadoop" , weight: 120 },
//     { id: 3, name: "Kafka" , weight: 120 },
//     { id: 4, name: "ElasticSearch", weight: 100 },
//     { id: 5, name: "Scala" , weight: 80},
//     { id: 6, name: "Azure" , weight: 100},
// ];

const wheels = [
    { titleId: 'frontend-tools', component: <IconWheel icons={frontendIcons} /> },
    { titleId: 'backend-tools', component: <IconWheel icons={backendIcons} /> },
    { titleId: 'currently-learning', component: <IconWheel icons={learningIcons} /> },
]

// const clouds = [
//     { titleId: 'frontend-tools', component: <WordCloud words={frontendCloud} /> },
//     { titleId: 'backend-tools', component: <WordCloud words={backendCloud} /> },
//     { titleId: 'currently-learning', component: <WordCloud words={learningCloud} /> },
// ]

const Skills = () => {
    return (
        <Element name="Skills" id="skills-section">
            <section id="skills-section" className='my-64'>
                <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                    <Trans id="skills-section" />
                </h2>
                <Carousel items={wheels} />
            </section>
        </Element>
    )
}

export default Skills