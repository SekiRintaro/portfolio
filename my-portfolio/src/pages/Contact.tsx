import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mjkwvqak");

    return (
        <section id="contact" className="bg-[#f5f1e4] py-24 px-6 md:px-20 font-serif text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left text-gray-900 tracking-widest">CONTACT</h2>
            {/* フォーム説明 */}
            <h1 className="mb-8 text-sm md:text-base max-w-2xl">
                お仕事のご相談はもちろん、励ましのお言葉や雑談でも大歓迎です。<br />
                どんなことでも、お気軽にお声がけください。
            </h1>

            <form onSubmit={handleSubmit} className="max-w-2xl space-y-10 text-left">
                {/* Name */}
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

                {/* Email */}
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

                {/* Message */}
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

                {/* Submit */}
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
        </section>
    );
};

export default ContactForm;
