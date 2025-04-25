import React from 'react';
import { motion } from 'framer-motion';

export type Skill = {
    id: string;
    title: string;
    icon: React.ReactNode;
    level: number;
    summary: string[];
    description: string;
};

type Props = {
    skill: Skill;
    isCenter: boolean;
    onClick: () => void;
};

const SkillCard: React.FC<Props> = ({ skill, isCenter, onClick }) => (
    <motion.div
        className={`cursor-pointer border border-[#a08f72] rounded-xl p-8 bg-white shadow-md transition duration-500 w-96 h-72 flex-shrink-0 hover:shadow-lg hover:scale-105 ${isCenter ? 'opacity-100 scale-100' : 'opacity-60 scale-95'} font-noto`}
        layout
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
    >
        <div className="flex items-center justify-center space-x-3 mb-4">
            {skill.icon}
            <h3 className="font-bold text-lg text-[#8f7e65] text-center">{skill.title}</h3>
        </div>
        <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-1 text-left">
            {skill.summary.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </motion.div>
);

export default SkillCard;
