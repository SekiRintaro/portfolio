import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="relative h-screen bg-gradient-to-b from-[#f5f1e4] to-[#e8e0d0] flex flex-col justify-center items-center">
            {/* 背景に和紙風のデザイン */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20 animate-fade-in"
                style={{
                    backgroundImage: "url('/path-to-your-washi-background.png')",
                }}
            ></div>

            <div className="relative text-center animate-slide-up">
                <h1 className="text-5xl md:text-6xl font-serif text-gray-600 leading-tight">
                    <span className="block">関 倫太郎</span>
                    <span className="block text-2xl md:text-3xl font-light text-gray-700">
                        It is an engineer's portfolio site.
                    </span>
                </h1>
            </div>

            {/* アイコンやイラスト（背景用） */}
            {/* <div className="absolute bottom-0 w-full flex justify-center opacity-50">
                <img
                    src="/path-to-your-illustration.png"
                    alt="Decorative"
                    className="w-64 h-auto"
                />
            </div> */}
        </div>
    );
};

export default Home;
