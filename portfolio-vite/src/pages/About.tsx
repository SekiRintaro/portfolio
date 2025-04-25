import React from 'react';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import bananaImage from '../images/banana_megane.png';

const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const About: React.FC = () => {
    return (
        <Element name="about">
            <section className="bg-[#f5f1e4] text-gray-800 font-serif py-16 px-6 md:px-20">
                <motion.div
                    className="max-w-6xl mx-auto tracking-widest text-center space-y-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-widest mb-6 border-l-4 border-[#a08f72] pl-4 inline-block text-left md:text-center md:pl-0 md:border-l-0">
                        About
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                        <img
                            src={bananaImage}
                            alt="Portrait"
                            className="w-40 h-40 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
                        />

                        <div className="text-left space-y-6 max-w-xl">
                            <p className="text-sm md:text-base font-bold">関 倫太郎</p>
                            <h3 className="text-2xl md:text-5xl font-bold tracking-wider text-gray-900">
                                RINTARO SEKI
                            </h3>
                            <p className="text-xs md:text-sm border-l-4 border-[#a08f72] pl-4 font-bold text-[#8f7e65]">
                                FULLSTACK ENGINEER
                            </p>

                            <div className="space-y-4 text-sm md:text-base leading-relaxed tracking-wide">
                                <p>
                                    平成11年11月11日奈良県生まれ。中学時代から企業経営に興味を抱きつつ、まずは確かな技術力を身に付けたいという想いから、大学では情報系の学部に進学しました。卒業後は金融系システム会社に新卒で入社し、エンジニアとしてのキャリアをスタート。
                                </p>
                                <p>
                                    入社後１年目は主にAWSを用いたインフラ設計・構築に従事し、２年目以降はフロントエンド・バックエンドの開発も担当するフルスタックエンジニアとして業務に携わる。
                                </p>
                                <p>
                                    また現在は、開発チームのリードとしてコードレビューや技術選定、スケジュール管理にも積極的に関わりながら、プロジェクト全体を見通した推進を行う。
                                </p>
                                <p>
                                    目標は「器用貧乏ではない、幅広い対応力でどの場面でも即戦力になるプレイヤー」。
                                </p>
                                <p>
                                    趣味は料理とラジオ。
                                </p>
                            </div>

                            <div className="flex justify-start items-center space-x-6 mt-6 text-[#8f7e65]">
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
                        </div>
                    </div>
                </motion.div>
            </section>
        </Element>
    );
};

export default About;
