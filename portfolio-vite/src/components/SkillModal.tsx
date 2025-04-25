import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Skill } from './SkillCard';

type Props = {
    skill: Skill | null;
    onClose: () => void;
};

const SkillModal: React.FC<Props> = ({ skill, onClose }) => {
    if (!skill) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="bg-[#fffdf8] max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl w-full max-w-3xl p-10 relative font-noto"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-5 text-3xl font-bold text-gray-500 hover:text-gray-800"
                        aria-label="Close"
                    >
                        ×
                    </button>

                    <div className="flex flex-col space-y-6">
                        <div className="flex flex-col items-center">
                            <div className="text-5xl text-[#8f7e65] mb-2">{skill.icon}</div>
                            <h3 className="text-3xl font-bold text-[#8f7e65] tracking-wide">
                                {skill.title}
                            </h3>
                            <div className="text-sm text-gray-500 mt-1">
                                習熟度：{'★'.repeat(skill.level) + '☆'.repeat(3 - skill.level)}
                            </div>
                        </div>

                        <div className="border-t border-[#d8cbb2] pt-6 px-2 text-gray-700 text-base leading-7 whitespace-pre-line">
                            {skill.description}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SkillModal;
