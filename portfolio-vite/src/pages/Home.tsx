// Home.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TitleImage from '../images/brushstroke-title.png';
import IconImage from '../images/icon-small.png'; // 小さな右下アイコン
import DinoImage from '../images/dino.png'; // 横切る恐竜画像

const Home: React.FC = () => {
    const [showDino, setShowDino] = useState(false);
    const [tapCount, setTapCount] = useState(0);

    const handleInteraction = () => {
        // タップやクリックでカウントし、2回で起動
        setTapCount((prev) => {
            const next = prev + 1;
            if (next >= 2) {
                setShowDino(true);
                setTimeout(() => setShowDino(false), 4000);
                return 0;
            }
            setTimeout(() => setTapCount(0), 1000); // 1秒以内に2回
            return next;
        });
    };

    return (
        <div className="relative h-screen bg-gradient-to-b from-[#f5f1e4] to-[#e8e0d0] flex flex-col justify-center items-center overflow-hidden">
            {/* 筆文字画像のタイトル */}
            <motion.img
                src={TitleImage}
                alt="関倫太郎 筆文字タイトル"
                className="w-[300px] md:w-[400px] mb-6 drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            />

            <motion.p
                className="text-base md:text-xl text-[#8f7e65] font-light"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
            >
                It is an engineer's portfolio site.
            </motion.p>

            {/* 右下の隠し要素用アイコン */}
            <img
                src={IconImage}
                alt="secret-icon"
                onClick={handleInteraction}
                className="absolute bottom-4 right-4 w-10 h-10 cursor-pointer opacity-70 hover:opacity-100 transition"
            />

            {/* 恐竜の横切りアニメーション（右→左） */}
            {showDino && (
                <motion.img
                    src={DinoImage}
                    alt="dino"
                    className="absolute bottom-12 right-[-200px] w-32 h-auto z-50 scale-x-[-1]"
                    initial={{ x: 0 }}
                    animate={{ x: '-120vw' }}
                    transition={{ duration: 3, ease: 'easeInOut' }}
                />
            )}
        </div>
    );
};

export default Home;
