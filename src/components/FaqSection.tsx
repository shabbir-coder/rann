"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface FaqItem {
    question: string;
    answer: string;
    link?: string;
    linkText?: string;
}

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqData: FaqItem[] = [
        {
            question: "What happens in Rann Utsav?",
            answer: "One of India's popular tourism festivals, Rann Utsav celebrates the rich cultural and artistic heritage of Kutch and the wonders of nature in the White Desert. The Hon. Prime Minister Shri Narendra Modi, who was Gujarat's chief minister at the time, came up with the idea for Rann Utsav.",
            link: "/booking",
            linkText: "Book Your Stay"
        },
        {
            question: "Is Rann Utsav worth visiting?",
            answer: "If you prefer greater comfort in your choice of accommodation, then the Rann Utsav is definitely the best time to visit the Rann of Kutch! Sightseeing: Rann Utsav packages come with many included and optional sightseeing tours of other interesting places nearby, such as Bhuj, Dhordo, Mandvi Beach, and Dholavira, etc.",
            link: "/gallery",
            linkText: "View Gallery"
        },
        {
            question: "What is the fees of Rann Utsav?",
            answer: "Rann Utsav package fees vary depending on the tent type and duration of stay.",
            link: "/packages",
            linkText: "View Packages"
        },
        {
            question: "What is the best time to visit Rann of Kutch?",
            answer: "Winters are the best time to visit Kutch. The temperature during these months is between 25 to 12 degrees Celsius and makes the weather perfect for sightseeing. This is also the best time to visit Rann of Kutch Festival.",
            link: "/",
            linkText: "Learn More"
        },
        {
            question: "How can the Tent City, Rann Utsav, be reached?",
            answer: "Rann Utsav Tent City is reached by train, road, and air by Bhuj, the nearest city. There are cars and bus rides from Bhuj to Dhordo, the location of the Tent City."
        },
        {
            question: "Which adventure activities can tourists enjoy at Rann Utsav Tent City?",
            answer: "Tourists at Rann Utsav Tent City can enjoy exciting adventure activities like desert safaris, camel rides, ATV rides, cycling in the White Rann, paramotoring, and hot air balloon rides, offering a perfect mix of thrill and scenic beauty."
        },
        {
            question: "Is food included in the Rann Utsav Tent City package?",
            answer: "Yes, food is included in the Rann Utsav Tent City package. Guests are served breakfast, lunch, evening tea, and dinner with a variety of traditional Kutchi, Gujarati, and multi-cuisine options."
        }
    ];

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <motion.section
            className="py-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <motion.div
                            className="text-center mb-5"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="display-6 fw-bold mb-3">
                                <span className="text-black">Frequently Asked</span>{' '}
                                <span className="text-primary">Questions</span>
                            </h2>
                            <p className="text-muted">Find answers to common questions about Rann Utsav</p>
                        </motion.div>

                        <motion.div
                            className="accordion"
                            id="faqAccordion"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {faqData.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    className="accordion-item mb-3 shadow-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="accordion-header">
                                        <button
                                            className={`accordion-button ${activeIndex !== index ? '' : 'collapsed'}`}
                                            type="button"
                                            onClick={() => toggleFaq(index)}
                                            aria-expanded={activeIndex === index}
                                            aria-controls={`faq-content-${index}`}
                                        >
                                            {faq.question}
                                        </button>
                                    </h3>
                                    <div
                                        id={`faq-content-${index}`}
                                        className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                                    >
                                        <div className="accordion-body">
                                            <p className="mb-3">{faq.answer}</p>
                                            {faq.link && (
                                                <Link href={faq.link} className="btn btn-outline-primary btn-sm">
                                                    {faq.linkText}
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default FaqSection;