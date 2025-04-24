import React from 'react';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const About: React.FC = () => {
    return (
        <Element name="about">
            <section className="bg-[#f5f1e4] text-gray-800 font-serif py-24 px-6 md:px-20">
                {/* 名前・肩書きセクション */}
                <motion.div
                    className="max-w-4xl pl-2 md:pl-6 tracking-widest text-left space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                >
                    <p className="text-sm md:text-base font-bold">関 倫太郎</p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-wider text-gray-900">RINTARO SEKI</h2>
                    <p className="text-xs md:text-sm border-l-4 border-[#a08f72] pl-4 font-bold text-[#8f7e65]">
                        FULLSTACK ENGINEER
                    </p>
                </motion.div>

                {/* プロフィール本文 */}
                <motion.div
                    className="max-w-4xl pl-2 md:pl-6 mt-12 space-y-6 text-sm md:text-base leading-relaxed tracking-wide text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                >
                    <p>1999年奈良県生まれ。中学時代から企業経営に興味を抱きつつ、まずは確かな技術力を身に付けたいという想いから、大学では情報系の学部に進学しました。卒業後は金融系システム会社に新卒で入社し、エンジニアとしてのキャリアをスタートさせました。</p>
                    <p>入社後は主にAWSを用いたインフラ設計・構築に従事し、2年目以降はフロントエンド・バックエンドの開発も担当するフルスタックエンジニアとして業務に携わっています。</p>
                    <p>また現在は、開発チームのリードとしてコードレビューや技術選定、スケジュール管理にも積極的に関わりながら、プロジェクト全体を見通した推進を行っています。</p>
                    <p>器用貧乏ではなく、どのポジションでも即戦力として価値を発揮できるプレイヤーであることを自負し、日々研鑽を重ねています。</p>

                    <div className="border-b border-gray-400 my-12 md:my-16"></div>

                    {/* SNSリンク */}
                    <div className="flex justify-start items-center space-x-6 mt-8 text-[#8f7e65]">
                        <a
                            href="https://github.com/SekiRintaro"
                            className="text-2xl md:text-3xl hover:opacity-70 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>

                        <a
                            href="https://instagram.com/tarorintiraymi"
                            className="text-2xl md:text-3xl hover:opacity-70 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </motion.div>
            </section>
        </Element>
    );
};

export default About;
