// Portfolio.tsx
import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import portfolioImage from '../images/portfolio.png';
import tsuzuruImage from '../images/tsuzuruImage.png';

const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const portfolioItems = [
    {
        id: 'portfolio1',
        title: 'My Portfolio Site',
        image: portfolioImage,
        techs: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        link: 'https://sekirintaro.github.io/portfolio/',
        description: '和のテイストを基調としたシンプルかつ洗練されたデザインのポートフォリオサイト。自身のスキルや制作物を紹介するために構築。レスポンシブ対応およびアニメーションにも注力している。'
    },
    {
        id: 'tsuzuru1',
        title: 'つづる ~君と綴る毎日~',
        image: tsuzuruImage,
        techs: ['React', 'TypeScript', 'Tailwind CSS', 'ChatAPI', 'FireBase'],
        link: 'https://tsuzuru-diary-app.web.app/',
        description: '個人開発で初のWEBアプリケーション。住宅街を舞台に、キャラクターがランダムに「あなたの家」を訪問。チャット形式で1日を振り返ることで、親しみのある対話体験とAIによる自然な日記生成を融合。OpenAIとFirebaseを連携させた対話型AI日記アプリ。認証からデータ保存、API中継までをFirebaseで統合し、セキュアかつ高速なSPAをReactとTypeScriptで構築。画像最適化や表示パフォーマンスにも配慮。'
    },
];

const Portfolio: React.FC = () => {
    return (
        <Element name="portfolio">
            <section className="bg-[#f5f1e4] text-gray-800 font-noto py-16 px-6 md:px-20">
                <motion.div
                    className="max-w-6xl mx-auto text-center tracking-widest space-y-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-widest mb-2">
                        Portfolio
                    </h2>
                    <p className="text-gray-600 text-sm mb-8">
                        これまでに制作したサイトやアプリケーションを紹介します。今後さらに増やしていく予定です。
                    </p>

                    <div className="grid gap-10 md:grid-cols-2">
                        {portfolioItems.map((item) => (
                            <motion.div
                                key={item.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition transform duration-300 flex flex-col"
                                whileHover={{ scale: 1.05 }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-60 object-cover border border-[#a08f72] rounded-sm"
                                />
                                <div className="p-6 text-left flex flex-col flex-1 justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#8f7e65] mb-4">
                                            {item.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {item.techs.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="bg-[#e6dcc9] text-gray-700 px-3 py-1 rounded-full text-xs"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-4 px-5 py-2 bg-[#a08f72] text-white rounded hover:bg-[#8f7e65] transition text-center"
                                    >
                                        サイトを見る
                                    </a>
                                </div>
                            </motion.div>
                        ))}

                        {/* 将来追加予定枠 */}
                        <div className="border-2 border-dashed border-[#a08f72] rounded-xl flex flex-col items-center justify-center p-6 text-gray-500 hover:bg-[#f0ede5] transition">
                            <p className="text-xl font-bold mb-2">Coming Soon...</p>
                            <p className="text-sm">新たな作品を随時追加予定です。</p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </Element>
    );
};

export default Portfolio;
