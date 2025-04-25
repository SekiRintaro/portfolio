import { useForm, ValidationError } from '@formspree/react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mjkwvqak");

    return (
        <Element name="contact">
            <section className="bg-[#f5f1e4] text-gray-800 font-serif py-16 px-6 md:px-20">
                <motion.div
                    className="max-w-4xl mx-auto tracking-widest text-center space-y-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-widest mb-2">
                        Contact
                    </h2>

                    <div className="flex flex-col items-center justify-center gap-12">
                        <div className="text-left max-w-xl w-full">
                            <p className="mb-8 text-sm md:text-base">
                                お仕事のご相談はもちろん、励ましのお言葉や雑談でも大歓迎です。<br />
                                どんなことでも、お気軽にお声がけください。
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-10 text-left">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm md:text-base font-bold tracking-widest">
                                        NAME
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full border border-gray-300 rounded px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#c8b99c] text-base"
                                    />
                                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm md:text-base font-bold tracking-widest">
                                        MAIL ADDRESS
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full border border-gray-300 rounded px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#c8b99c] text-base"
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block mb-2 text-sm md:text-base font-bold tracking-widest">
                                        MESSAGE
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        className="w-full border border-gray-300 rounded px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#c8b99c] resize-none text-base"
                                    />
                                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                                </div>

                                <div className="pt-6">
                                    <button
                                        type="submit"
                                        disabled={state.submitting || state.succeeded}
                                        className="w-full md:w-64 bg-[#a08f72] text-white font-semibold tracking-widest py-4 rounded hover:bg-[#8f7e65] transition"
                                    >
                                        {state.submitting
                                            ? "送信中..."
                                            : state.succeeded
                                                ? "送信しました"
                                                : "送信する"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </section>
        </Element>
    );
};

export default ContactForm;
