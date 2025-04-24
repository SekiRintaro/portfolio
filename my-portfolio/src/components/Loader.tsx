import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface LoaderProps {
    onFinish: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onFinish }) => {
    const nameControls = useAnimation();
    const thinLineControls = useAnimation();
    const thickLineControls = useAnimation();

    useEffect(() => {
        async function sequence() {
            await nameControls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.4 },
            });

            await thinLineControls.start({
                scaleX: 1,
                transition: { duration: 0.25 },
            });

            await new Promise((resolve) => setTimeout(resolve, 150));

            await thickLineControls.start({
                scaleX: 1,
                transition: { duration: 0.4 },
            });

            await nameControls.start({
                opacity: 0,
                y: 5,
                transition: { duration: 0.5 },
            });

            await Promise.all([
                thinLineControls.set({ transformOrigin: 'right' }),
                thickLineControls.set({ transformOrigin: 'right' }),
            ]);

            await Promise.all([
                thinLineControls.start({
                    scaleX: 0,
                    transition: { duration: 0.3, ease: 'easeIn' },
                }),
                thickLineControls.start({
                    scaleX: 0,
                    transition: { duration: 0.3, ease: 'easeIn' },
                }),
            ]);

            onFinish();
        }

        sequence();
    }, [nameControls, thinLineControls, thickLineControls, onFinish]);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#f5f1e4] to-[#e8e0d0] z-50">
            <motion.h1
                initial={{ opacity: 0, y: 5 }}
                animate={nameControls}
                className="tracking-[0.4em] font-bold mb-4 text-3xl md:text-4xl text-green-900 font-serif"
            >
                ようこそ
            </motion.h1>

            <div className="w-64 h-1 relative">
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={thinLineControls}
                    className="absolute top-0 left-0 w-full h-1 bg-green-200 origin-left z-10 rounded-full"
                ></motion.div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={thickLineControls}
                    className="absolute top-0 left-0 w-full h-1 bg-green-900 origin-left z-20 rounded-full"
                ></motion.div>
            </div>

            <p className="mt-4 text-sm text-green-800 font-light tracking-wide font-serif">
                Welcome to Rintaro Seki's Portfolio
            </p>
        </div>
    );
};

export default Loader;
