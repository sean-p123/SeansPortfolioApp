
import React from 'react'

const WorkExperience = () => {
    return (
        <div className='max-w-[1200px] mx-auto p-5' id='workexperience'>
            <div className='pb-8'>
                <p className='text-4xl mb-3 font-bold primary-color'>
                    Work Experience
                </p>
                <p className='text-gray-400'>
                    My professional experience in software development
                </p>
            </div>

            <div className='flex flex-col gap-6'>

                <div className='border border-gray-700 rounded-lg p-6 bg-black'>
                    <div className='mb-4'>
                        <h3 className='text-white text-2xl font-bold'>
                            Medior Frontend Developer
                        </h3>
                        <p className='primary-color text-lg'>
                            Software Improvement Group
                        </p>
                    </div>

                    <ul className='text-gray-400 list-disc pl-5 space-y-2'>
                        <li>
                            Took ownership of frontend features from initial implementation
                            through testing and delivery, collaborating with developers and
                            stakeholders.
                        </li>
                        <li>
                            Developed and maintained web applications using Angular,
                            TypeScript and modern frontend technologies.
                        </li>
                        <li>
                            Contributed to frontend architecture in a multi-project codebase,
                            developing reusable components and shared services to reduce code
                            duplication and improve maintainability.
                        </li>
                        <li>
                            Focused on code quality, testing and maintainable software
                            development.
                        </li>
                        <li>
                            Applied test-driven development practices, implementing automated
                            unit, end-to-end and visual tests to improve application reliability.
                        </li>
                        <li>
                            Worked with modern Angular and TypeScript, improving existing
                            applications through framework upgrades, code refactoring and
                            modern frontend development practices.
                        </li>
                        <li>
                            Leveraged AI-assisted development tools to analyse complex codebases,
                            accelerate implementation and refactor existing functionality while
                            maintaining code quality.
                        </li>
                    </ul>
                </div>

                <div className='border border-gray-700 rounded-lg p-6 bg-black'>
                    <div className='mb-4'>
                        <h3 className='text-white text-2xl font-bold'>
                            Full-Stack Software Engineer
                        </h3>
                        <p className='primary-color text-lg'>
                            Axite Security Tools B.V.
                        </p>
                    </div>

                    <ul className='text-gray-400 list-disc pl-5 space-y-2'>
                        <li>
                            Led full-stack development, building and maintaining
                            applications using Angular, TypeScript, Node.js and SQL.
                        </li>
                        <li>
                            Implemented security measures to protect web applications, including
                            authentication, authorisation, encrypted data handling and protection
                            against common web vulnerabilities.
                        </li>
                        <li>
                            Implemented API integrations, authentication and
                            security-focused application features.
                        </li>
                        <li>
                            Led UI/UX design and development, creating intuitive user interfaces,
                            improving application usability and maintaining a consistent design
                            across the platform.
                        </li>
                        <li>
                            Designed and developed a filtering system from the ground
                            up, supporting complex queries across large datasets.
                        </li>
                        <li>
                            Optimised database queries and frontend table rendering
                            to improve performance when handling hundreds of thousands
                            of records.
                        </li>
                        <li>
                            Developed interactive dashboards, data visualisations
                            and reusable UI components.
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default WorkExperience
