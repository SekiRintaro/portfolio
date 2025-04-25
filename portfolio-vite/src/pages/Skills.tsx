// Skills.tsx
import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaTools } from 'react-icons/fa';
import SkillCard, { Skill } from '../components/SkillCard';
import SkillModal from '../components/SkillModal';

const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const skills: Skill[] = [
    {
        id: 'infra',
        title: 'Infrastructure',
        icon: <FaAws className="text-3xl md:text-4xl text-[#8f7e65]" />,
        level: 3,
        summary: ['AWS (EC2, S3, CloudWatchなど全般) - 3年', 'CDK/CloudFormation によるIaC対応', 'Docker/CI/CD構築', '高セキュリティ設計の金融領域実績あり'],
        description: `AWSに関する実務経験を3年以上有し、EC2、S3、Route53 などの基本サービス運用に加え、CDK や CloudFormation によるIaC対応を実施。\nEC2によるクライアント用Windowsサーバーの構築からLambda、ECSとAPIGWを利用したWebサイトなど様々なネットワークの構築を経験。\nDocker を用いたコンテナ環境構築、GitHub Actions によるCI/CDパイプライン整備を経験。\n金融領域プロジェクトにて、セキュリティ要件を満たす設計・構築・運用を担当。`,
    },
    {
        id: 'frontend',
        title: 'Frontend',
        icon: <FaReact className="text-3xl md:text-4xl text-[#8f7e65]" />,
        level: 2,
        summary: ['JavaScript / TypeScript - 2年', 'React - 2年', 'Vue - 0.5年', 'ウォーターフォールでの開発経験あり'],
        description: `JavaScript / TypeScript を用いたフロントエンド開発経験を2年有し、React を使用した業務システム実装に従事。\nVue も0.5年程度経験し、UIアニメーションやスタイリングには Framer Motion および Tailwind CSS を活用。\n要件定義に基づく設計から実装、テストまでウォーターフォール型開発に対応。`,
    },
    {
        id: 'backend',
        title: 'Backend',
        icon: <FaNodeJs className="text-3xl md:text-4xl text-[#8f7e65]" />,
        level: 2,
        summary: ['C# (.NET) - 2年', 'Java (Spring) - 1年', 'SQL, Python - 各1年', 'ウォーターフォールでの開発経験あり'],
        description: `C#(.NET) を2年、Java(Spring)、SQL、Python をそれぞれ1年程度経験。\nAPI開発、業務ロジックの構築を実施。\n設計、実装、テストまで一貫して担当。`,
    },
    {
        id: 'other',
        title: 'Others',
        icon: <FaTools className="text-3xl md:text-4xl text-[#8f7e65]" />,
        level: 2,
        summary: ['ITパスポート・基本情報・AWSクラウドプラクティショナー取得', 'アプリ・インフラでのチームリーダー経験', 'Figma / Notion活用経験あり'],
        description: `ITパスポート、基本情報技術者、AWSクラウドプラクティショナーの資格を取得。\nインフラおよびアプリケーション開発においてチームリーダーを務め、進捗管理、設計方針策定、メンバー育成に従事。\nFigma や Notion を用いた業務支援ツール活用にも精通。`,
    },
];


const Skills: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

    const nextSkill = () => setIndex((prev) => (prev + 1) % skills.length);
    const prevSkill = () => setIndex((prev) => (prev - 1 + skills.length) % skills.length);

    const visibleSkills = [
        skills[(index - 1 + skills.length) % skills.length],
        skills[index],
        skills[(index + 1) % skills.length],
    ];

    return (
        <Element name="skills">
            <section className="bg-[#f5f1e4] text-gray-800 font-noto py-16 px-6 md:px-20">
                <motion.div
                    className="max-w-6xl mx-auto text-center tracking-widest space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-widest mb-6 inline-block">
                        Skills
                    </h2>

                    <div className="w-full overflow-hidden">
                        <div className="flex justify-center gap-6 px-2 transition-transform duration-500 ease-in-out">
                            <AnimatePresence initial={false} mode="popLayout">
                                {visibleSkills.map((skill, i) => (
                                    <SkillCard
                                        key={skill.id}
                                        skill={skill}
                                        isCenter={i === 1}
                                        onClick={() => setSelectedSkill(skill)}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="flex justify-center mt-6 space-x-4">
                        <button
                            onClick={prevSkill}
                            className="px-4 py-2 bg-[#a08f72] text-white rounded hover:bg-[#8f7e65] transition"
                        >
                            ← Prev
                        </button>
                        <button
                            onClick={nextSkill}
                            className="px-4 py-2 bg-[#a08f72] text-white rounded hover:bg-[#8f7e65] transition"
                        >
                            Next →
                        </button>
                    </div>
                </motion.div>

                <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
            </section>
        </Element>
    );
};

export default Skills;
